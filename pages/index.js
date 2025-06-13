import Head from 'next/head';
import { useEffect, useState } from 'react';
import fetchConfig from '../utils/fetchConfig';
import AppContext from '../utils/AppContext';
import Layout from '../components/Layout';

export default function Home() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetchConfig().then(setConfig);
  }, []);

  if (!config) {
    return (
      <>
        <Head>
          <title>BOUMCOIN</title>
        </Head>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Chargement...</h1>
        </div>
      </>
    );
  }

  const title = config?.texts?.title || 'BOUMCOIN - La crypto qui fait BOUM 💣';
  const cta = config?.texts?.cta || '🚀 Achetez des Boumcoin dès maintenant !';
  const footer = config?.texts?.footer || '© 2025 Boumcoin - Tous droits réservés';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppContext.Provider value={config}>
        <Layout>
          <h1>{title}</h1>
          <p style={{ fontSize: '18px', marginTop: '1rem' }}>{cta}</p>
          <p style={{ marginTop: '3rem', color: '#ccc' }}>{footer}</p>
        </Layout>
      </AppContext.Provider>
    </>
  );
}
