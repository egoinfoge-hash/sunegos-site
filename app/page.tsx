'use client';
import React from 'react';

export default function Home() {
  return (
    <main
      style={{
        height: '100vh',
        background: 'radial-gradient(circle at center, #002f4b, #005c97)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '56px', marginBottom: '20px' }}>Sunegos</h1>
      <p style={{ fontSize: '20px', opacity: 0.9 }}>
        საიტი წარმატებით მუშაობს 🚀 <br /> მზად ხარ დიზაინის დასამატებლად!
      </p>
      <a
        href="mailto:sandro.sandro789@yahoo.com"
        style={{
          marginTop: '30px',
          background: 'white',
          color: '#005c97',
          padding: '12px 22px',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Contact
      </a>
    </main>
  );
}
