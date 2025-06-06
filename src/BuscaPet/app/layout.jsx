import { Roboto } from 'next/font/google'
import "./globals.css";
import Sidebar from '../components/sidebar.jsx';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700']
})

export const metadata = {
  title: "BuscaPet | Encontre. Publique. Reencontre.",
  description: "A sua rede social de busca de pets perdidos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
