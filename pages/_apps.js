import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { fetchConfig } from '../utils/firebase'
import AppContext from '../utils/AppContext'

export default function MyApp({ Component, pageProps }) {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      const data = await fetchConfig()
      setConfig(data)
    }
    loadConfig()
  }, [])

  if (!config) return <div>Chargement...</div>

  return (
    <AppContext.Provider value={config}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
