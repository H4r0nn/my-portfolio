/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ✅ Статический экспорт
  images: {
    unoptimized: true,        // ✅ Отключаем оптимизацию изображений
  },
  basePath: '/my-portfolio',  // ✅ ВАЖНО: имя твоего репозитория
  assetPrefix: '/my-portfolio/', // ✅ Для корректной загрузки стилей и скриптов
};

export default nextConfig;