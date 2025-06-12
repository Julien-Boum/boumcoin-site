import { getDatabase, ref, get } from 'firebase/database'
import { initializeApp } from 'firebase/app'

// Config Firebase – à modifier avec tes vraies infos si besoin
const firebaseConfig = {
  apiKey: "AIza...xxx",               // à personnaliser
  authDomain: "boumcoin.firebaseapp.com",
  databaseURL: "https://boumcoin-default-rtdb.firebaseio.com",
  projectId: "boumcoin",
  storageBucket: "boumcoin.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const fetchConfig = async () => {
  try {
    const snapshot = await get(ref(db, 'siteConfig'))
    return snapshot.exists() ? snapshot.val() : null
  } catch (error) {
    console.error("Erreur récupération Firebase :", error)
    return null
  }
}

export default fetchConfig
