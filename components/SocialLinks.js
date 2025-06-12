import React, { useEffect, useState } from 'react'
import fetchConfig from '../utils/fetchConfig'

const iconClassMap = {
  tiktok: 'fab fa-tiktok',
  instagram: 'fab fa-instagram',
  x: 'fab fa-x-twitter', // ou 'fab fa-twitter' si ton CDN ne supporte pas "x"
  facebook: 'fab fa-facebook',
  discord: 'fab fa-discord',
  telegram: 'fab fa-telegram',
}

const SocialLinks = () => {
  const [links, setLinks] = useState({})

  useEffect(() => {
    const loadLinks = async () => {
      const data = await fetchConfig()
      setLinks(data.socials || {})
    }
    loadLinks()
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {Object.entries(links).map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '2rem', color: '#000' }}
        >
          <i className={iconClassMap[key.toLowerCase()] || 'fas fa-link'}></i>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
