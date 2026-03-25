import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Портфолио на Next.js',
      description: 'Персональный сайт-визитка с адаптивным дизайном, анимациями и деплоем на GitHub Pages.',
      tags: ['Next.js', 'Tailwind CSS', 'GitHub Pages'],
      demo: '/',
      color: 'from-purple-500 to-pink-500',
      icon: '🎨'
    },
    {
      title: 'Сайт компании MobilDom',
      description: 'Лендинг для компании по строительству быстровозводимых домов с калькулятором стоимости.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://mobildom.pro', // ЗАМЕНИ на свою реальную ссылку
      color: 'from-blue-500 to-cyan-500',
      icon: '🏠'
    },
    {
      title: 'Пародия на Ebay',
      description: 'Юмористическая версия маркетплейса с товарами, личным профилем профилем, заказами и интерактивными элементами.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'ebay-parody.html', // Ссылка на HTML файл в /public
      color: 'from-orange-500 to-amber-500',
      icon: '🛒'
    },
    {
      title: 'Магазин ювелирии',
      description: 'Проект с средневековым стилем, сделаный в качестве учебного проекта.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'jewelry-store.html', // Ссылка на HTML файл в /public
      color: 'from-pink-500 to-rose-500',
      icon: '💎'
    },
    {
      title: 'Геймплейные хайлайты',
      description: 'Коллекция смонтированных видео с динамичным монтажом и эффектами.',
      tags: ['Premiere Pro', 'After Effects'],
      demo: 'https://youtube.com', // ЗАМЕНИ на свой канал
      color: 'from-red-500 to-pink-600',
      icon: '🎮'
    },
    {
      title: 'FPV-съёмка: проморолик',
      description: 'Динамичный видеоролик, снятый на дрон.',
      tags: ['FPV', 'DaVinci Resolve'],
      demo: '#', // Пока нет ссылки
      color: 'from-emerald-500 to-teal-500',
      icon: '🚁'
    },
  ];

  return (
    <main className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Фоновые жидкие формы */}
      <div className="liquid-shape liquid-1" />
      <div className="liquid-shape liquid-3" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Мои <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">проекты</span>
          </h1>
          <p className="text-gray-400 text-lg">От учебных работ до коммерческих задач</p>
        </div>

        {/* Сетка проектов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="card-dark rounded-3xl overflow-hidden animate-slide-up neon-border group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Цветной хедер карточки с градиентом */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                {/* Иконка и заголовок */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Описание */}
                <p className="text-gray-300 mb-5 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                {/* Теги */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 card-dark border border-gray-700 rounded-xl text-xs font-medium text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Кнопка Демо */}
                <a 
                  href={project.demo}
                  target={project.demo.startsWith('http') ? '_blank' : undefined}
                  rel={project.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-full px-4 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl text-sm font-medium text-center hover:shadow-lg hover:scale-[1.02] transition-all neon-border block`}
                >
                 Посмотреть
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA секция */}
        <div className="mt-16 text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="card-dark rounded-3xl p-8 md:p-12 neon-border">
            <h3 className="text-2xl font-bold mb-4 neon-text">
              Хочешь создать что-то подобное?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Открыт к предложениям о работе, фриланс-проектам и интересным коллаборациям.
            </p>
            <Link 
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-2xl hover:scale-105 transition-all neon-border"
            >
              Связаться со мной →
            </Link>
          </div>
        </div>

        {/* Кнопка назад */}
        <div className="text-center mt-8">
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