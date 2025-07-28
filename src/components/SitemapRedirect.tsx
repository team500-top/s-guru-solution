import { useEffect } from 'react';

const SitemapRedirect = () => {
  useEffect(() => {
    // Перенаправляем на Edge Function
    window.location.replace('https://avtrwggqjfauoborotqo.supabase.co/functions/v1/sitemap');
  }, []);

  return null;
};

export default SitemapRedirect;