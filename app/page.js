'use client';
import { useState, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

// Динамический импорт ThreeBackground
const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), {
  ssr: false,
  loading: () => null
});

// Анимации framer-motion
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // ✅ Навыки с оценкой 5-балльной (вместо процентов)
  const skills = [
    { name: 'Next.js', level: 4, category: 'Frontend' },
    { name: 'React', level: 4, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 5, category: 'Styling' },
    { name: 'JavaScript', level: 4, category: 'Language' },
    { name: 'Git / GitHub', level: 4, category: 'Tools' },
    { name: 'Figma', level: 3, category: 'Design' },
  ];

  const projects = [
    {
      title: 'Портфолио на Next.js',
      description: 'Персональный сайт-визитка с адаптивным дизайном и деплоем на GitHub Pages.',
      tags: ['Next.js', 'Tailwind CSS'],
      demo: '/',
      category: 'Web',
      year: '2025'
    },
    {
      title: 'Сайт компании MobilDom',
      description: 'Лендинг для компании по строительству быстровозводимых домов.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://mobildom.pro',
      category: 'Web',
      year: '2024'
    },
    {
      title: 'Пародия на Ebay',
      description: 'Юмористическая версия маркетплейса с профилем и заказами.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'ebay-parody.html',
      category: 'Web',
      year: '2026'
    },
    {
      title: 'Магазин ювелирии',
      description: 'Интернет-магазин ювелирных изделий в готическом стиле.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'jewelry-store.html',
      category: 'Web',
      year: '2024'
    },
    {
      title: 'Геймплейные хайлайты',
      description: 'Коллекция смонтированных видео и нарезок.',
      tags: ['Premiere Pro', 'After Effects'],
      demo: 'https://youtube.com',
      category: 'Media',
      year: '2024'
    },
    {
      title: 'FPV-съёмка',
      description: 'Динамичный видеоролик, снятый на дрон от первого лица.',
      tags: ['FPV', 'DaVinci Resolve'],
      demo: '#',
      category: 'Media',
      year: '2023'
    },
  ];

  // ✅ Обновлённые интересы (Dota 2, Спорт, без МобилДом)
  const interests = [
    { icon: '🎮', text: 'Dota 2', sub: 'Любимая игра' },
    { icon: '🏍️', text: 'Мотокросс', sub: '7 лет опыта' },
    { icon: '⚽', text: 'Спорт', sub: 'Активный образ жизни' },
    { icon: '🤿', text: 'Дайвинг', sub: 'Лицензия' },
    { icon: '🚁', text: 'FPV', sub: 'Съёмка' },
    { icon: '💻', text: 'Разработка', sub: 'Веб-приложения' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <main className="relative overflow-x-hidden bg-slate-900 min-h-screen">
      {/* 3D Фон */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* Прогресс-бар скролла */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white font-bold text-xl tracking-tight hover:text-slate-300 transition-colors"
            >
              HARON
            </button>
            
            <div className="hidden md:flex items-center gap-1">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'projects', label: 'Проекты' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeSection === item.id 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button className="md:hidden text-slate-400 hover:text-white">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </nav>

      {/* СЕКЦИЯ: ГЛАВНАЯ */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
        <div className="max-w-5xl w-full">
          <motion.div 
            className="grid md:grid-cols-12 gap-6 items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="md:col-span-7" variants={fadeInUp}>
              <motion.div className="mb-6" variants={fadeInUp}>
                <span className="inline-block px-5 py-2.5 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-none text-xs font-semibold tracking-widest uppercase text-slate-400">
                  Портфолио разработчика
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
                variants={fadeInUp}
              >
                HARON
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-xl"
                variants={fadeInUp}
              >
                Студент. Разработчик. Предприниматель.
                <br />
                Создаю цифровые продукты на стыке технологий и дизайна.
              </motion.p>
              
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-slate-100 text-slate-900 font-semibold text-sm tracking-wide uppercase hover:bg-white hover:scale-105 transition-all"
                >
                  Проекты
                </button>
                <button 
                  onClick={() => scrollToSection('contacts')}
                  className="px-8 py-4 border border-slate-700 text-slate-100 font-semibold text-sm tracking-wide uppercase hover:border-slate-500 hover:bg-slate-800/50 transition-all"
                >
                  Контакты
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div className="md:col-span-5 hidden md:block" variants={fadeInUp}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl font-bold text-white mb-1">4+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Года опыта</div>
                </motion.div>
                <motion.div 
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl font-bold text-white mb-1">12+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Проектов</div>
                </motion.div>
                <motion.div 
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-6 col-span-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm text-slate-400 uppercase tracking-wider mb-2">Навыки</div>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Tailwind', 'Node.js'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-700/50 text-xs text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-20 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          
          <motion.div 
            className="mt-8 flex justify-between text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors uppercase tracking-wider">Обо мне ↓</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors uppercase tracking-wider">Проекты ↓</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors uppercase tracking-wider">Связаться ↓</button>
          </motion.div>
        </div>
      </section>

      {/* СЕКЦИЯ: ОБО МНЕ */}
      <section id="about" className="min-h-screen py-20 px-6 relative z-10 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Информация</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-2 tracking-tight">ОБО МНЕ</h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 aspect-square flex items-center justify-center">
                <div className="text-8xl font-bold text-white">H</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-8 h-full">
                <h3 className="text-2xl text-white font-bold mb-4">Haron</h3>
                <p className="text-slate-400 uppercase tracking-wider text-sm mb-6">Студент • Разработчик • Предприниматель</p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  4 курс, специальность «Информационные системы и программирование». 
                  Создаю современные веб-приложения, сочетаю технические навыки с креативным подходом. 
                  Разрабатываю сайт для компании «МобилДом» по строительству быстровозводимых домов.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-700/50 text-xs text-white uppercase tracking-wider">Москва, UTC+3</span>
                  <span className="px-4 py-2 bg-slate-700/50 text-xs text-white uppercase tracking-wider">Открыт к предложениям</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ✅ Навыки с 5-балльной оценкой */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Компетенции</span>
            <h3 className="text-3xl font-bold text-white mt-2 mb-8 tracking-tight">НАВЫКИ</h3>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-5 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">{skill.category}</div>
                  <div className="text-lg text-white font-semibold mb-3">{skill.name}</div>
                  
                  {/* ✅ 5-балльная оценка вместо процентов */}
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-sm ${
                          star <= skill.level ? 'text-slate-400' : 'text-slate-700'
                        }`}
                      >
                        ●
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400">{skill.level}/5</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ✅ Обновлённые интересы */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Личное</span>
            <h3 className="text-3xl font-bold text-white mt-2 mb-8 tracking-tight">ИНТЕРЕСЫ</h3>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
            >
              {interests.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-5 text-center hover:bg-slate-700/50 transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-3 grayscale hover:grayscale-0 transition-all">{item.icon}</div>
                  <div className="text-sm text-white font-medium">{item.text}</div>
                  <div className="text-xs text-slate-400 mt-1">{item.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* СЕКЦИЯ: ПРОЕКТЫ */}
      <section id="projects" className="min-h-screen py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Портфолио</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-2 tracking-tight">ПРОЕКТЫ</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.article 
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 group"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-slate-700/50 flex items-center justify-center overflow-hidden">
                  <motion.div 
                    className="text-4xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.category === 'Web' ? '🌐' : '🎬'}
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">{project.category}</span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl text-white font-bold mb-3 group-hover:text-slate-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-700/50 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.demo}
                    target={project.demo.startsWith('http') ? '_blank' : undefined}
                    rel={project.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block w-full px-4 py-3 bg-slate-100 text-slate-900 text-xs font-semibold uppercase tracking-wider text-center hover:bg-white hover:scale-105 transition-all"
                  >
                    Посмотреть
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div 
            className="mt-20 bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-12 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">ХОЧЕШЬ СОЗДАТЬ ЧТО-ТО ПОДОБНОЕ?</h3>
            <p className="text-slate-400 mb-8">Открыт к предложениям о работе и фриланс-проектам.</p>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="px-8 py-4 bg-slate-100 text-slate-900 font-semibold text-sm uppercase tracking-wider hover:bg-white hover:scale-105 transition-all"
            >
              Связаться со мной
            </button>
          </motion.div>
        </div>
      </section>

      {/* СЕКЦИЯ: КОНТАКТЫ */}
      <section id="contacts" className="min-h-screen py-20 px-6 relative z-10 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Связь</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-2 tracking-tight">КОНТАКТЫ</h2>
          </motion.div>

          {/* ✅ Только Email и GitHub */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.a
              href="mailto:yaroslav_bykov_06@mail.ru"
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-8 group hover:bg-slate-700/50 transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Email</div>
              <div className="text-lg text-white font-semibold group-hover:text-slate-300 transition-colors">
                yaroslav_bykov_06@mail.ru
              </div>
              <div className="mt-4 text-slate-400 text-sm">→</div>
            </motion.a>

            <motion.a
              href="https://github.com/h4r0nn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-8 group hover:bg-slate-700/50 transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">GitHub</div>
              <div className="text-lg text-white font-semibold group-hover:text-slate-300 transition-colors">
                github.com/h4r0nn
              </div>
              <div className="mt-4 text-slate-400 text-sm">→</div>
            </motion.a>
          </motion.div>

          <motion.div 
            className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-8 md:p-12 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">НАПИСАТЬ СООБЩЕНИЕ</h3>
            <p className="text-slate-400 mb-8">Заполните форму, и я свяжусь с вами в ближайшее время.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-wider mb-3">Имя *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 focus:border-slate-500 outline-none transition-colors text-white placeholder-slate-600"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-wider mb-3">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 focus:border-slate-500 outline-none transition-colors text-white placeholder-slate-600"
                    placeholder="ivan@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-wider mb-3">Тема</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 focus:border-slate-500 outline-none transition-colors text-white placeholder-slate-600"
                  placeholder="Предложение о работе"
                />
              </div>
              
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-wider mb-3">Сообщение *</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 focus:border-slate-500 outline-none transition-colors text-white placeholder-slate-600 resize-none"
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full px-4 py-4 bg-slate-100 text-slate-900 font-semibold text-sm uppercase tracking-wider hover:bg-white hover:scale-105 transition-all"
              >
                Отправить
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              { value: '24 ЧАСА', label: 'Время ответа' },
              { value: 'UTC+3', label: 'Часовой пояс' },
              { value: 'СОЧИ', label: 'Локация' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-6 text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl text-white font-bold mb-1">{item.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 px-6 border-t border-slate-800 relative z-10 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © 2026 Haron. Все права защищены.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Создано с использованием Next.js, Tailwind CSS и Three.js
          </p>
        </div>
      </footer>
    </main>
  );
}