import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxx.firebaseapp.com",
  projectId: "xxxxxxxx",
  storageBucket: "xxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxx",
  appId: "xxxxxxxxxxxxxxxx"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchConfig = async () => {
  try {
    const docRef = doc(db, 'config', 'main');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
    else {
      console.warn("Document config/main introuvable");
      return null;
    }
  } catch (err) {
    console.error("Erreur Firebase:", err);
    return null;
  }
};

export default fetchConfig;
