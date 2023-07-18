import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'
import NavBar from './components/navBar';
import { ToastContainer } from 'react-toastify';

const roboto_slab = Roboto_Slab({ subsets: ["latin"]});
const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: 'Village Square',
  description: 'Welcome to the Village Square',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_slab.className}>
        <ToastContainer />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
