import Link from 'next/link';

export default function About() {
  const skills = [
    { name: 'Next.js', icon: '⚡', desc: 'SSR, SSG, App Router', level: 3 },
    { name: 'React', icon: '⚛️', desc: 'Hooks, Context, Components', level: 3 },
    { name: 'Tailwind CSS', icon: '🎨', desc: 'Utility-first, адаптив', level: 4 },
    { name: 'JavaScript', icon: '📜', desc: 'ES6+, асинхронность', level: 4 },
    { name: 'Git / GitHub', icon: '🌿', desc: 'Branching, PR, деплой', level: 3 },
    { name: 'Figma', icon: '✏️', desc: 'UI/UX, прототипы, макеты', level: 5 },
    { name: 'Premiere Pro', icon: '🎬', desc: 'Монтаж и нарезка', level: 3 },
    { name: 'FPV / Дроны', icon: '🚁', desc: 'Съёмка на заказ', level: 5 },
  ];

  const interests = [
    { icon: '🎮', text: 'Dota 2, сим-рейсинг' },
    { icon: '🏍️', text: 'Мотокросс (7 лет опыта)' },
    { icon: '🏃🏻', text: 'Спорт' },
    { icon: '🤿', text: 'Дайвинг (лицензия)' },
    { icon: '💻', text: 'Веб-разработка, дизайн' },
    { icon: '✈️', text: 'Путешествия, новые технологии' },
  ];

  return (
    <main className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Фоновые формы */}
      <div className="liquid-shape liquid-1" />
      <div className="liquid-shape liquid-2" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Обо <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">мне</span>
          </h1>
          <p className="text-gray-400 text-lg">Кратко о главном</p>
        </div>

        {/* Карточка профиля */}
        <div className="card-dark rounded-3xl p-8 md:p-12 mb-16 animate-slide-up neon-border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl neon-border shrink-0">
              Я
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Ярослав</h2>
              <p className="text-purple-400 font-medium mb-4">Студент • Разработчик • Предприниматель</p>
              <p className="text-gray-300 leading-relaxed">
                4 курс, специальность «Информационные системы и программирование». 
                Создаю современные веб-приложения, сочетаю технические навыки с креативным подходом. 
                Программист компании «МобилДом» по строительству быстровозводимых домов.
              </p>
            </div>
          </div>
        </div>

        {/* Навыки */}
        <section className="mb-16 animate-slide-up" style={{animationDelay: '0.1s'}}>
          <h3 className="text-2xl font-bold mb-6 neon-text">💻 Навыки</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="card-dark p-5 rounded-2xl group neon-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </span>
                  <span className="font-semibold text-white">{skill.name}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{skill.desc}</p>
                
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        dot <= skill.level 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-glow' 
                          : 'bg-gray-700'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">{skill.level}/5</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Интересы */}
        <section className="mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h3 className="text-2xl font-bold mb-6 neon-text">✨ Интересы</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((item, index) => (
              <div 
                key={index} 
                className="card-dark p-4 rounded-2xl text-center neon-border hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-pink-900/30 transition-all"
              >
                <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Кнопка назад */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors px-6 py-3 rounded-xl card-dark neon-border"
          >
            ← На главную
          </Link>
        </div>
        
      </div>
    </main>
  );
}