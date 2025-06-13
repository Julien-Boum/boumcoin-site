import React, { useEffect, useState } from 'react';
import fetchConfig from '../utils/fetchConfig';
import { useRouter } from 'next/router';

const translations = {
  fr: 'Acheter Boumcoin',
  en: 'Buy Boumcoin',
  es: 'Comprar Boumcoin',
  it: 'Compra Boumcoin',
  de: 'Boumcoin kaufen',
  pt: 'Comprar Boumcoin'
};

const BuyButton = () => {
  const [buyUrl, setBuyUrl] = useState('');
  const { locale } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchConfig();
        if (data?.buyLink) setBuyUrl(data.buyLink);
      } catch (e) {
        console.error('Erreur fetch buyLink:', e);
      }
    };
    fetchData();
  }, []);

  const label = translations[locale] || translations['en'];
  if (!buyUrl) return null;

  return (
    <div style={{ margin: '2rem auto', textAlign: 'center' }}>
      <a
        href={buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#ff5722',
          padding: '15px 30px',
          fontSize: '18px',
          color: 'white',
          borderRadius: '6px',
          border: 'none',
          textDecoration: 'none'
        }}
      >
        {label}
      </a>
    </div>
  );
};

export default BuyButton;
