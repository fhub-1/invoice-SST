import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export interface Invoice {
  id?: string;
  clientId: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'pending' | 'paid' | 'overdue';
  dueDate: Date;
  notes?: string;
  createdAt?: Date;
}

const COLLECTION_NAME = 'invoices';

export async function getInvoices() {
  const invoicesRef = collection(db, COLLECTION_NAME);
  const q = query(invoicesRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Invoice[];
}

export async function getClientInvoices(clientId: string) {
  const invoicesRef = collection(db, COLLECTION_NAME);
  const q = query(
    invoicesRef,
    where('clientId', '==', clientId),
    orderBy('createdAt', 'desc')
  );
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Invoice[];
}

export async function addInvoice(invoice: Omit<Invoice, 'id'>) {
  const invoicesRef = collection(db, COLLECTION_NAME);
  const docRef = await addDoc(invoicesRef, {
    ...invoice,
    createdAt: new Date(),
  });
  return docRef.id;
}

export async function updateInvoice(id: string, invoice: Partial<Invoice>) {
  const invoiceRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(invoiceRef, invoice);
}

export async function deleteInvoice(id: string) {
  const invoiceRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(invoiceRef);
}