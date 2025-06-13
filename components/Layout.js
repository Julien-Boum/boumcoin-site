import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';
import BuyButton from './BuyButton';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const Layout = ({ children }) => {
  const config = useContext(AppContext);

  // Valeurs par défaut si non fournies par Firestore
  const backgroundUrl = config?.backgroundUrl || 'https://images.unsplash.com/photo-1647531300542-e6b09d2c5f32';
  const logoUrl = config?.logoUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emoji_u1f4a5.svg/1200px-Emoji_u1f4a5.svg.png';

  const backgroundStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    padding: '2rem',
    textAlign: 'center'
  };

  return (
    <div style={backgroundStyle}>
      {logoUrl && (
        <img
          src={logoUrl}
          alt="Logo Boumcoin"
          style={{ width: '150px', marginBottom: '1rem', borderRadius: '10px' }}
        />
      )}

      {config?.title && <h1>{config.title}</h1>}
      {config?.description && <p>{config.description}</p>}

      <BuyButton />
      <SocialLinks links={config?.socials} />

      <div style={{ marginTop: '2rem' }}>
        {children}
      </div>

      <div style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#ccc' }}>
        {config?.texts?.footer || '© 2025 Boumcoin'}
      </div>

      <ContactForm />
    </div>
  );
};

export default Layout;
