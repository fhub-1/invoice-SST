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

export interface Client {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt?: Date;
}

const COLLECTION_NAME = 'clients';

export async function getClients() {
  const clientsRef = collection(db, COLLECTION_NAME);
  const q = query(clientsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Client[];
}

export async function addClient(client: Omit<Client, 'id'>) {
  const clientsRef = collection(db, COLLECTION_NAME);
  const docRef = await addDoc(clientsRef, {
    ...client,
    createdAt: new Date(),
  });
  return docRef.id;
}

export async function updateClient(id: string, client: Partial<Client>) {
  const clientRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(clientRef, client);
}

export async function deleteClient(id: string) {
  const clientRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(clientRef);
}