import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { app } from '../utils/firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

function MyApp({ Component, pageProps }) {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app)
      const docRef = doc(db, 'config', 'site')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setConfig(docSnap.data())
      }
    }
    fetchData()
  }, [])

  return (
    <Component {...pageProps} config={config} />
  )
}

export default MyApp
