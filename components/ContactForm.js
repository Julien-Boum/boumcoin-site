import React, { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/xqabqnwr", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target)
    });
    if (res.ok) {
      setSent(true);
    } else {
      alert("Erreur lors de l’envoi du message.");
    }
  };

  if (sent) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>✅ Message envoyé avec succès !</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Contactez-nous</h2>
      <input
        name="name"
        placeholder="Votre nom"
        required
        style={{ padding: '0.5rem', width: '60%', maxWidth: '400px', marginBottom: '1rem' }}
      />
      <br />
      <textarea
        name="message"
        placeholder="Votre message"
        required
        style={{ padding: '0.5rem', width: '60%', maxWidth: '400px', height: '100px', marginBottom: '1rem' }}
      />
      <br />
      <button
        type="submit"
        style={{
          background: '#ff5722',
          color: 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none'
        }}
      >
        Envoyer
      </button>
    </form>
  );
}
