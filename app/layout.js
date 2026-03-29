import './globals.css';

export const metadata = {
  title: 'Ярослав • Портфолио разработчика',
  description: 'Персональное портфолио: проекты, навыки, контакты. Next.js, Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}