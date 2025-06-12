import React, { useState } from 'react';

const translations = {
  fr: {
    title: 'Contactez-nous',
    name: 'Nom',
    message: 'Votre message',
    send: 'Envoyer'
  },
  en: {
    title: 'Contact us',
    name: 'Name',
    message: 'Your message',
    send: 'Send'
  },
  es: {
    title: 'Contáctanos',
    name: 'Nombre',
    message: 'Tu mensaje',
    send: 'Enviar'
  },
  it: {
    title: 'Contattaci',
    name: 'Nome',
    message: 'Il tuo messaggio',
    send: 'Invia'
  },
  de: {
    title: 'Kontaktiere uns',
    name: 'Name',
    message: 'Deine Nachricht',
    send: 'Senden'
  },
  pt: {
    title: 'Contacte-nos',
    name: 'Nome',
    message: 'Sua mensagem',
    send: 'Enviar'
  }
};

export default function ContactForm() {
  const locale = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
  const t = translations[locale] || translations.en;

  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const mailto = `mailto:hello@boumcoin.com?subject=Message Boumcoin&body=Nom: ${form.name}%0D%0A%0D%0A${form.message}`;

  return (
    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
      <h2>{t.title}</h2>
      <form action={mailto} method="POST" encType="text/plain">
        <input
          type="text"
          name="name"
          placeholder={t.name}
          required
          value={form.name}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '80%', maxWidth: '400px', margin: '0.5rem 0' }}
        />
        <br />
        <textarea
          name="message"
          placeholder={t.message}
          required
          value={form.message}
          onChange={handleChange}
          style={{ padding: '0.5rem', width: '80%', maxWidth: '400px', height: '100px', marginBottom: '1rem' }}
        />
        <br />
        <button
          type="submit"
          style={{
            background: '#fff572',
            padding: '0.5rem 1.5rem',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          {t.send}
        </button>
      </form>
    </div>
  );
}
