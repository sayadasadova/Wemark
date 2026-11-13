import { Space_Grotesk, Instrument_Sans } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--f-display' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--f-body' });

export const metadata = { title: 'Wemark xSchool', description: 'WM xSchool — Find your X' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
