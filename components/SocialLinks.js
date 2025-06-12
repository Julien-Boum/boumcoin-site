import React from 'react';

const iconMap = {
  tiktok: '/icons/tiktok.svg',
  instagram: '/icons/instagram.svg',
  x: '/icons/x.svg',
  facebook: '/icons/facebook.svg',
  discord: '/icons/discord.svg',
  telegram: '/icons/telegram.svg',
};

const SocialLinks = ({ links }) => {
  if (!links) return null;

  return (
    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {Object.entries(links).map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          <img
            src={iconMap[platform] || '/icons/default.svg'}
            alt={platform}
            style={{ width: '32px', height: '32px' }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
