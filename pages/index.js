import Head from 'next/head'
import { useEffect, useState } from 'react'
import BuyButton from '../components/BuyButton'

export default function Home() {
  return (
    <div>
      {/* ... autres composants */}
      <BuyButton />
    </div>
  )
}

export default function Home({ config }) {
  const [lang, setLang] = useState('fr')

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2)
    if (['fr', 'en', 'es', 'it', 'de', 'pt'].includes(browserLang)) {
      setLang(browserLang)
    }
  }, [])

  const t = config?.texts?.[lang] || {}

  return (
    <div
      style={{
        backgroundImage: `url(${config?.images?.background || '/default-bg.png'})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        color: 'white',
        textAlign: 'center',
        paddingTop: '50px'
      }}
    >
      <Head>
        <title>{t.title || 'BOUMCOIN'}</title>
      </Head>

      <img
        src={config?.images?.logo || '/default-logo.png'}
        alt="Logo"
        style={{ maxWidth: '150px', marginBottom: '20px' }}
      />

      <h1>{t.header || 'Bienvenue sur Boumcoin'}</h1>
      <p>{t.subheader || 'La cryptomonnaie qui fait BOUM 💥'}</p>

      <a
        href={config?.buyLink || '#'}
        style={{
          marginTop: '30px',
          display: 'inline-block',
          padding: '15px 30px',
          background: '#ff3b3f',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        {t.buy || 'Acheter des Boumcoin'}
      </a>

      <div style={{ marginTop: '50px' }}>
        {Object.entries(config?.socials || {}).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 10px', color: 'white' }}
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  )
}
