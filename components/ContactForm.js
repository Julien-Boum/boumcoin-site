import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const translations = {
  fr: { title: 'Contactez-nous', name: 'Nom', message: 'Votre message', send: 'Envoyer' },
  en: { title: 'Contact us', name: 'Name', message: 'Your message', send: 'Send' },
  es: { title: 'Contáctanos', name: 'Nombre', message: 'Su mensaje', send: 'Enviar' },
  it: { title: 'Contattaci', name: 'Nome', message: 'Il tuo messaggio', send: 'Invia' },
  de: { title: 'Kontaktiere uns', name: 'Name', message: 'Deine Nachricht', send: 'Senden' },
  pt: { title: 'Contacte-nos', name: 'Nome', message: 'Sua mensagem', send: 'Enviar' },
};

export default function ContactForm() {
  const locale = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
  const t = translations[locale] || translations['en'];

  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      name: form.name,
      message: form.message,
    }, 'YOUR_PUBLIC_KEY')
      .then(() => alert('Message envoyé !'))
      .catch((error) => alert('Erreur : ' + error.text));
  };

  return (
    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
      <h2>{t.title}</h2>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder={t.name}
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', width: '60%', maxWidth: '400px', margin: '0.5rem 0' }}
        />
        <br />
        <textarea
          name="message"
          placeholder={t.message}
          value={form.message}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', width: '60%', maxWidth: '400px', height: '100px', marginBottom: '1rem' }}
        />
        <br />
        <button type="submit" style={{
          background: '#ff5722',
          color: 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none'
        }}>
          {t.send}
        </button>
      </form>
    </div>
  );
}
