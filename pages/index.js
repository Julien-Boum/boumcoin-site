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

  if (!config) return <p>Chargement...</p>;

  return (
    <>
      <Head>
        <title>{config.texts?.title || 'BOUMCOIN'}</title>
      </Head>
      <AppContext.Provider value={config}>
        <Layout>
          <p>{config.texts?.cta || 'Acheter des Boumcoin !'}</p>
          <p>{config.texts?.footer || '© 2025 Boumcoin'}</p>
        </Layout>
      </AppContext.Provider>
    </>
  );
}
