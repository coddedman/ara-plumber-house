import type { Metadata } from 'next';
import './globals.css';

// Favicon and other metadata
export const metadata: Metadata = {
  title: 'Ara Plumber House',
  description: 'Ara plumber House',
  generator: 'Ara plumber House',
  icons: {
    icon: "/images/Logo.png", // You can also use PNG: '/logo.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
     

        <main>{children}</main>
      </body>
    </html>
  );
}
