import { useEffect } from 'react';

const RobotsTxt = () => {
  useEffect(() => {
    const robotsContent = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://1s-guru.ru/sitemap.xml`;

    // Устанавливаем правильный content-type
    document.documentElement.style.display = 'none';
    document.body.innerHTML = '';
    
    // Создаем новый response с правильным content-type
    const blob = new Blob([robotsContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Заменяем содержимое страницы
    window.location.replace(url);
  }, []);

  return null;
};

export default RobotsTxt;