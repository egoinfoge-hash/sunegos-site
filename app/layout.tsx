import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Sunegos — Creative Studio',
  description: 'Web • Apps • Ads • IT — premium craft, bold visuals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
