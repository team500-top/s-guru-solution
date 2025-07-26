import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Yandex Metrika
    (function(m: any, e: any, t: any, r: any, i: any, k: any, a: any) {
      m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments) };
      m[i].l = 1 * new Date().getTime();
      for (var j = 0; j < document.scripts.length; j++) { 
        if (document.scripts[j].src === r) { return; }
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=103424159', 'ym', undefined, undefined);

    (window as any).ym(103424159, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      accurateTrackBounce: true,
      trackLinks: true
    });

    // Google Analytics
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-E2ZF9TFG1F';
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-E2ZF9TFG1F');
      (window as any).gtag = gtag;
    };
  }, []);

  return (
    <noscript>
      <div>
        <img 
          src="https://mc.yandex.ru/watch/103424159" 
          style={{ position: 'absolute', left: '-9999px' }} 
          alt="" 
        />
      </div>
    </noscript>
  );
};

export default Analytics;