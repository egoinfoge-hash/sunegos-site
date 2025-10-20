import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Sunegos — Portfolio',
  description: 'Personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
