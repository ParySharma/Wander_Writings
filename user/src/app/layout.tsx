import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import './globals.css';
import { AuthGuard } from '@/guards/AuthGuard';
// import '@/styles/common.scss';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Wander Writing',
    template: '%s | Wander Writing',
  },
  description: 'Wander Writing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}
