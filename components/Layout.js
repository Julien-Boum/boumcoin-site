import React, { useEffect, useState } from 'react'
import fetchConfig from '../utils/fetchConfig'

const Layout = ({ children }) => {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      const data = await fetchConfig()
      setConfig(data)
    }
    loadConfig()
  }, [])

  if (!config) {
    return <div>Chargement en cours...</div>
  }

  const { backgroundUrl, logoUrl } = config

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        {logoUrl && <img src={logoUrl} alt="Boumcoin Logo" style={{ height: '100px' }} />}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
