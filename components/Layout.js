import React, { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
import SocialLinks from './SocialLinks';
import BuyButton from './BuyButton';

const Layout = ({ children }) => {
  const { config } = useContext(AppContext);

  const backgroundStyle = {
    backgroundImage: config.backgroundUrl ? `url(${config.backgroundUrl})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#fff',
    padding: '2rem',
  };

  return (
    <div style={backgroundStyle}>
      {config.logoUrl && (
        <img
          src={config.logoUrl}
          alt="Logo Boumcoin"
          style={{ width: '150px', marginBottom: '1rem' }}
        />
      )}

      {config.title && <h1>{config.title}</h1>}
      {config.description && <p>{config.description}</p>}

      <BuyButton />

      <SocialLinks links={config.socials} />

      <div style={{ marginTop: '2rem' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
