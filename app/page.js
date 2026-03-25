import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Фоновые жидкие формы */}
      <div className="liquid-shape liquid-1" />
      <div className="liquid-shape liquid-2" />
      <div className="liquid-shape liquid-3" />
      
      {/* Контент */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-4xl text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 card-dark rounded-full text-sm font-medium neon-border">
              👋 Привет, я Ярослав
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
            Разработчик <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">и студент</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Создаю современные веб-приложения на Next.js. 
            Увлекаюсь сим-рейсингом, видеомонтажом и технологиями.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-2xl transition-all hover:scale-105 neon-border"
            >
              Мои проекты →
            </Link>
            <Link 
              href="/contacts"
              className="px-8 py-4 card-dark border border-gray-700 rounded-xl font-medium hover:border-purple-500 hover:text-purple-400 transition-all neon-border"
            >
              Связаться
            </Link>
          </div>
          
          {/* Быстрые ссылки */}
          <div className="mt-16 flex justify-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-purple-400 transition-colors">Обо мне</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Проекты</a>
            <a href="#contacts" className="hover:text-purple-400 transition-colors">Контакты</a>
          </div>
        </div>
      </section>
    </main>
  );
}