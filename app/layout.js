import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Ярослав • Портфолио разработчика',
  description: 'Персональное портфолио: проекты, навыки, контакты. Next.js, Tailwind CSS, GitHub Pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}