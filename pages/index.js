// pages/index.js

import Head from 'next/head'
import { useEffect, useState } from 'react'
import { fetchConfig } from '../utils/fetchConfig'
import { AppContext } from '../utils/AppContext'
import Layout from '../components/Layout'
import BuyButton from '../components/BuyButton'
import SocialLinks from '../components/SocialLinks'
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    fetchConfig().then(setConfig)
  }, [])

  if (!config) return <p>Chargement...</p>

  return (
    <>
      <Head>
        <title>{config?.texts?.fr?.title || 'BOUMCOIN'}</title>
      </Head>
      <AppContext.Provider value={config}>
        <Layout>
          <h1>{config?.texts?.fr?.title}</h1>
          <p>{config?.texts?.fr?.description}</p>
          <BuyButton />
          <SocialLinks />
        </Layout>
      </AppContext.Provider>
    </>
  )
}
