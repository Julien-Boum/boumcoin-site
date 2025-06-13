import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './firebase';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchConfig = async () => {
  try {
    const docRef = doc(db, 'config', 'main');
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (err) {
    console.error('Erreur Firebase:', err);
    return null;
  }
};

export default fetchConfig;
