import React from 'react';

const ContactForm = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>📬 Contacte-nous</h2>
      <form
        action="https://formspree.io/f/mnqewpqz" // Remplace ce lien par le tien si besoin
        method="POST"
        style={{ maxWidth: '400px', margin: '2rem auto' }}
      >
        <input
          type="text"
          name="name"
          placeholder="Ton nom"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Ton email"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        <textarea
          name="message"
          placeholder="Ton message"
          required
          rows="5"
          style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#FF5722',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
