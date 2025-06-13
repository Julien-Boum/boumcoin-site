import React from 'react';

const SocialLinks = ({ links }) => {
  if (!links) return null;

  return (
    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      {Object.entries(links).map(([platform, url]) => (
        <a key={platform} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '18px' }}>
          {platform}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
