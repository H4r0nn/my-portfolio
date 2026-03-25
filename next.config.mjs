/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ✅ Статический экспорт для GitHub Pages
  images: {
    unoptimized: true,     // ✅ Отключаем оптимизацию изображений (не работает на статике)
  },
  // База пути будет подставляться автоматически при деплое
};

export default nextConfig;