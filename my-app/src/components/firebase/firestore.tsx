// firebase/firestore.ts
import { db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { Cantiere } from './types/types.ts';

export const fetchCantieri = async (): Promise<Cantiere[]> => {
  try {
    const cantieriCollection = collection(db, 'cantieri');
    const cantieriSnapshot = await getDocs(cantieriCollection);
    const cantieriList = cantieriSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Cantiere[];

    return cantieriList;
  } catch (error) {
    console.error('Error fetching cantieri: ', error);
    return [];
  }
};
