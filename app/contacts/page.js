import Link from 'next/link';

export default function Contacts() {
  const contacts = [
    { 
      platform: 'Telegram', 
      handle: '@Haron_dev', 
      link: 'https://t.me',
      icon: '✈️',
      color: 'hover:border-blue-500 hover:from-blue-900/30 hover:to-cyan-900/30',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      platform: 'GitHub', 
      handle: 'github.com/H4r0nn', 
      link: 'https://github.com/H4r0nn',
      icon: '💻',
      color: 'hover:border-gray-500 hover:from-gray-900/30 hover:to-gray-800/30',
      gradient: 'from-gray-600 to-gray-400'
    },
    { 
      platform: 'Email', 
      handle: 'yaroslav@example.com', 
      link: 'mailto:yaroslav@example.com',
      icon: '📧',
      color: 'hover:border-red-500 hover:from-red-900/30 hover:to-orange-900/30',
      gradient: 'from-red-500 to-orange-500'
    },
    { 
      platform: 'VK', 
      handle: 'vk.com/yaroslav', 
      link: 'https://vk.com',
      icon: '🔵',
      color: 'hover:border-blue-600 hover:from-blue-900/40 hover:to-indigo-900/30',
      gradient: 'from-blue-600 to-indigo-600'
    },
    { 
      platform: 'YouTube', 
      handle: 'YouTube канал', 
      link: 'https://youtube.com',
      icon: '🎬',
      color: 'hover:border-red-600 hover:from-red-900/30 hover:to-pink-900/30',
      gradient: 'from-red-600 to-pink-600'
    },
    { 
      platform: 'LinkedIn', 
      handle: 'LinkedIn профиль', 
      link: 'https://linkedin.com/in/your-profile',
      icon: '💼',
      color: 'hover:border-blue-700 hover:from-blue-900/40 hover:to-blue-800/30',
      gradient: 'from-blue-700 to-blue-500'
    },
  ];

  return (
    <main className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Фоновые жидкие формы */}
      <div className="liquid-shape liquid-2" />
      <div className="liquid-shape liquid-3" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Связаться <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">со мной</span>
          </h1>
          <p className="text-gray-400 text-lg">Открыт к предложениям и сотрудничеству</p>
        </div>

        {/* Карточки контактов */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-dark p-5 rounded-2xl neon-border transition-all duration-300 group ${contact.color} hover:bg-gradient-to-br hover:scale-[1.02]`}
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">{contact.platform}</p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {contact.handle}
                  </p>
                </div>
                <span className="text-gray-500 group-hover:text-purple-400 transition-colors text-xl">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Форма обратной связи */}
        <div className="card-dark rounded-3xl p-8 md:p-12 mb-12 animate-slide-up neon-border">
          <h3 className="text-2xl font-bold mb-2 neon-text">Или напишите здесь</h3>
          <p className="text-gray-400 mb-8">Заполните форму, и я свяжусь с вами в ближайшее время</p>
          
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя *
                </label>
                <input 
                  type="text" 
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3.5 card-dark border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 neon-border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  placeholder="ivan@example.com"
                  className="w-full px-4 py-3.5 card-dark border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 neon-border"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Тема
              </label>
              <input 
                type="text" 
                placeholder="Предложение о работе"
                className="w-full px-4 py-3.5 card-dark border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 neon-border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Сообщение *
              </label>
              <textarea 
                placeholder="Расскажите о вашем проекте..." 
                rows="5"
                className="w-full px-4 py-3.5 card-dark border border-gray-700 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none neon-border"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-2xl hover:scale-[1.02] transition-all neon-border flex items-center justify-center gap-2"
            >
              <span>Отправить сообщение</span>
              <span className="text-xl">✈️</span>
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            🔒 Ваши данные защищены. Я не передаю информацию третьим лицам.
          </p>
        </div>

        {/* Дополнительная информация */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="card-dark p-6 rounded-2xl text-center neon-border">
            <div className="text-3xl mb-2">⏱️</div>
            <p className="text-sm text-gray-400">Обычно отвечаю в течение</p>
            <p className="text-lg font-semibold text-white mt-1">24 часов</p>
          </div>
          <div className="card-dark p-6 rounded-2xl text-center neon-border">
            <div className="text-3xl mb-2">🌍</div>
            <p className="text-sm text-gray-400">Часовой пояс</p>
            <p className="text-lg font-semibold text-white mt-1">UTC+3 (Москва)</p>
          </div>
          <div className="card-dark p-6 rounded-2xl text-center neon-border">
            <div className="text-3xl mb-2">💼</div>
            <p className="text-sm text-gray-400">Открыт к</p>
            <p className="text-lg font-semibold text-white mt-1">Фрилансу и работе</p>
          </div>
        </div>

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