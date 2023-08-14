import './globals.css';
import { Inter } from 'next/font/google';
//import NavBar from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TaaseenDev',
  description: `Taaseen's Developer Portfolio`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
