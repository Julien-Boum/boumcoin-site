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
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert('✅ Message envoyé !');
        setForm({ name: '', message: '' });
      })
      .catch((error) => {
        alert('❌ Une erreur est survenue : ' + error.text);
      })
      .finally(() => {
        setSending(false);
      });
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
        <button
          type="submit"
          disabled={sending}
          style={{
            background: sending ? '#ccc' : '#ff5722',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          {sending ? '...' : t.send}
        </button>
      </form>
    </div>
  );
}
