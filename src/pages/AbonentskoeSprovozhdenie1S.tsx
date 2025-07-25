import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Shield, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Zap,
  HeadphonesIcon,
  Monitor,
  Database,
  Settings
} from "lucide-react";

const AbonentskoeSprovozhdenie1S = () => {
  useEffect(() => {
    document.title = "Абонентское сопровождение 1С в Москве: стабильность и поддержка 24/7";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полное абонентское сопровождение 1С: обновление, консультации, решение проблем. Ваша 1С будет работать стабильно, а вы сосредоточитесь на бизнесе. Закажите бесплатный аудит 1С!');
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'абонентское сопровождение 1с, обслуживание 1с по договору, поддержка 1с ежемесячно, сколько стоит сопровождение 1с, итс сопровождение 1с, договор на 1с обслуживание, постоянная поддержка 1с, регулярное обслуживание 1с, сопровождение 1с цена, поддержка 1с, обслуживание 1с, 1с итс цена, абонентское обслуживание 1с бухгалтерия, удаленное сопровождение 1с, стоимость часа обслуживания 1с, тарифы на сопровождение 1с, сопровождение нетиповой конфигурации 1с, консультации по 1с, обновление 1с цена, аутсорсинг поддержки 1с, круглосуточная поддержка 1с, итс проф, сопровождение 1с зуп, линия консультаций 1с, заказать обновление 1с, нужен программист 1с на поддержку, сопровождение доработанной 1с, ежемесячное обслуживание 1с, сервис 1с отчетность, помощь в работе с 1с, техническая поддержка 1с предприятие, исправление ошибок в базе 1с');
    }

    // OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Абонентское сопровождение 1С – 1S-GURU.RU');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Обеспечьте стабильную работу вашей 1С с экспертной поддержкой от 1S-GURU.RU. Проактивный мониторинг, оперативное решение проблем, гарантия SLA.');
    }

    // Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Абонентское сопровождение 1С – 1S-GURU.RU');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Обеспечьте стабильную работу вашей 1С с экспертной поддержкой от 1S-GURU.RU. Проактивный мониторинг, оперативное решение проблем, гарантия SLA.');
    }

    // Structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://1s-guru.ru"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Услуги",
            "item": "https://1s-guru.ru/uslugi/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Абонентское сопровождение 1С",
            "item": "https://1s-guru.ru/uslugi/abonentskoe-soprovozhdenie-1s/"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Абонентское сопровождение 1С",
        "description": "Комплексное абонентское сопровождение 1С. Закрепим за вашей компанией команду экспертов, которая будет решать любые вопросы по 1С, обновлять систему и консультировать пользователей. Ваша 1С будет работать стабильно, а вы сможете сосредоточиться на бизнесе.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "1S-GURU.RU (Команда 500)",
          "image": "https://1s-guru.ru/images/og-image.png",
          "telephone": "+79778386097",
          "email": "i@1s-guru.ru",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1-я Фрезерная, д.2/1, с.1",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "url": "https://1s-guru.ru/uslugi/abonentskoe-soprovozhdenie-1s/"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Тарифы абонентского сопровождения 1С",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Тариф «Старт»"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "15000",
                "priceCurrency": "RUB",
                "valueAddedTaxIncluded": "False",
                "additionalType": "https://schema.org/MonthlyPrice"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Тариф «Развитие»"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "по запросу",
                "priceCurrency": "RUB",
                "valueAddedTaxIncluded": "False"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Тариф «Проект»"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "по запросу",
                "priceCurrency": "RUB",
                "valueAddedTaxIncluded": "False"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "3"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что входит в абонентскую плату?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "В абонентскую плату входит проактивный мониторинг, консультации пользователей, оперативное решение текущих проблем, регулярные обновления типовых и нетиповых конфигураций, а также поддержка сервисов 1С (1С-Отчетность, 1С:Контрагент, 1С-ЭДО)."
            }
          },
          {
            "@type": "Question",
            "name": "Как быстро вы реагируете на заявку?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Мы гарантируем реакцию согласно SLA (Service Level Agreement), прописанному в вашем договоре. Как правило, инциденты решаются в течение 1-2 часов."
            }
          },
          {
            "@type": "Question",
            "name": "Что если мне не хватит часов в тарифе?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Если у вас тариф с фиксированным объемом часов, мы заранее предупредим о приближении лимита. В рамках тарифа 'Развитие' часы не сгорают, и вы всегда можете пополнить аванс."
            }
          },
          {
            "@type": "Question",
            "name": "Вы обновляете нетиповые конфигурации?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, мы специализируемся на обновлении доработанных конфигураций, используя безопасные технологии (расширения), которые не ломают обновления."
            }
          },
          {
            "@type": "Question",
            "name": "А если проблема с сервером, а не с 1С?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Наши специалисты обладают компетенциями в администрировании серверов 1С и смежных IT-систем, поэтому мы можем помочь и в этом случае."
            }
          },
          {
            "@type": "Question",
            "name": "Как вы контролируете сохранность моих данных?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Мы настраиваем и контролируем регулярное резервное копирование вашей базы данных, а также подписываем соглашение о конфиденциальности."
            }
          },
          {
            "@type": "Question",
            "name": "У меня будет персональный менеджер?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, за вашей компанией будет закреплен персональный аккаунт-менеджер, который будет вашим единым контактом по всем вопросам."
            }
          },
          {
            "@type": "Question",
            "name": "Вы работаете в выходные и праздники?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "По договоренности и для критичных ситуаций мы можем обеспечить поддержку 24/7."
            }
          },
          {
            "@type": "Question",
            "name": "Как я могу контролировать, на что тратятся ваши часы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Мы предоставляем детальные отчеты о выполненных работах и затраченных часах, обеспечивая полную прозрачность."
            }
          },
          {
            "@type": "Question",
            "name": "Чем вы лучше штатного специалиста?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Наша команда обходится дешевле, при этом вы получаете доступ к компетенциям 5-10 экспертов. Мы не болеем, не уходим в отпуск и гарантируем результат по договору."
            }
          }
        ]
      }
    ];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const advantages = [
    {
      icon: Shield,
      title: "Проактивный мониторинг",
      description: "Предотвращаем 90% сбоев через круглосуточное отслеживание состояния системы"
    },
    {
      icon: Clock,
      title: "Гарантированное SLA",
      description: "Реакция на инциденты в течение 1-2 часов по договору"
    },
    {
      icon: Users,
      title: "Команда экспертов",
      description: "Доступ к компетенциям 5-10 специалистов дешевле штатного сотрудника"
    },
    {
      icon: TrendingUp,
      title: "Постоянное развитие",
      description: "Регулярные обновления и оптимизация работы системы"
    }
  ];

  const problems = [
    {
      icon: AlertTriangle,
      problem: "1С ломается в самый неподходящий момент",
      solution: "Проводим регулярное техобслуживание и проактивный мониторинг, предотвращая 90% сбоев. Ваша система будет работать стабильно."
    },
    {
      icon: Database,
      problem: "Неактуальные данные, ошибки в учете",
      solution: "Обеспечиваем своевременные обновления системы, консультации и исправление ошибок, гарантируя актуальность данных."
    },
    {
      icon: HeadphonesIcon,
      problem: "Отсутствие ответов на вопросы, сбои системы",
      solution: "Закрепляем персонального консультанта и команду экспертов для оперативного решения проблем."
    },
    {
      icon: Zap,
      problem: "Незапланированные расходы, риск штрафов",
      solution: "Предлагаем предсказуемые тарифы и регулярные обновления для избежания дорогостоящих аварий."
    }
  ];

  const tariffs = [
    {
      name: "Старт",
      price: "от 15 000 ₽/мес",
      description: "Идеально для малого бизнеса и стабильных систем",
      features: [
        "Консультации пользователей",
        "Обновления системы",
        "Решение технических проблем",
        "Проактивный мониторинг"
      ],
      popular: false
    },
    {
      name: "Развитие",
      price: "Гибкий аванс",
      description: "Самый популярный тариф с несгораемым авансом",
      features: [
        "Все из тарифа Старт",
        "Доработки функционала",
        "Крупные консультации",
        "Гибкое списание средств",
        "Персональный менеджер"
      ],
      popular: true
    },
    {
      name: "Проект",
      price: "Индивидуально",
      description: "Для крупных компаний и сложных систем",
      features: [
        "Полный спектр услуг",
        "Выделенная команда",
        "Круглосуточная поддержка",
        "Индивидуальные SLA",
        "Проектное управление"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      text: "Надежность и скорость реакции — вот что мы ценим в этой команде. Любая проблема решается очень быстро.",
      author: "Главный бухгалтер",
      company: "Торговый Дом"
    },
    {
      text: "Перестали бояться обновлений. Знаем, что ребята все проверят и сделают в лучшем виде.",
      author: "IT-директор",
      company: "Производственная компания"
    },
    {
      text: "Это действительно как личный IT-отдел, только дешевле и эффективнее.",
      author: "Директор",
      company: "ООО «Логистик»"
    }
  ];

  const cases = [
    {
      title: "Торговая сеть",
      problem: "Постоянные сбои обменов между базами, приводившие к простоям и потере данных.",
      result: "Количество сбоев сократилось на 90%, инциденты решаются в течение 1-2 часов. Система работает стабильно."
    },
    {
      title: "Производственная компания",
      problem: "Уволился штатный программист, оставив сложную, неконтролируемую систему.",
      result: "Система стала стабильной и прозрачной, появился четкий план ее развития, устранены риски."
    },
    {
      title: "Интернет-магазин",
      problem: "В «черную пятницу» «лег» сервер, что привело к потере продаж.",
      result: "Работоспособность восстановлена за 2 часа, проведена оптимизация для предотвращения сбоев."
    }
  ];

  const faqData = [
    {
      question: "Что входит в абонентскую плату?",
      answer: "В абонентскую плату входит проактивный мониторинг, консультации пользователей, оперативное решение текущих проблем, регулярные обновления типовых и нетиповых конфигураций, а также поддержка сервисов 1С (1С-Отчетность, 1С:Контрагент, 1С-ЭДО)."
    },
    {
      question: "Как быстро вы реагируете на заявку?",
      answer: "Мы гарантируем реакцию согласно SLA (Service Level Agreement), прописанному в вашем договоре. Как правило, инциденты решаются в течение 1-2 часов."
    },
    {
      question: "Что если мне не хватит часов в тарифе?",
      answer: "Если у вас тариф с фиксированным объемом часов, мы заранее предупредим о приближении лимита. В рамках тарифа «Развитие» часы не сгорают, и вы всегда можете пополнить аванс."
    },
    {
      question: "Вы обновляете нетиповые конфигурации?",
      answer: "Да, мы специализируемся на обновлении доработанных конфигураций, используя безопасные технологии (расширения), которые не ломают обновления."
    },
    {
      question: "А если проблема с сервером, а не с 1С?",
      answer: "Наши специалисты обладают компетенциями в администрировании серверов 1С и смежных IT-систем, поэтому мы можем помочь и в этом случае."
    },
    {
      question: "Как вы контролируете сохранность моих данных?",
      answer: "Мы настраиваем и контролируем регулярное резервное копирование вашей базы данных, а также подписываем соглашение о конфиденциальности."
    },
    {
      question: "У меня будет персональный менеджер?",
      answer: "Да, за вашей компанией будет закреплен персональный аккаунт-менеджер, который будет вашим единым контактом по всем вопросам."
    },
    {
      question: "Вы работаете в выходные и праздники?",
      answer: "По договоренности и для критичных ситуаций мы можем обеспечить поддержку 24/7."
    },
    {
      question: "Как я могу контролировать, на что тратятся ваши часы?",
      answer: "Мы предоставляем детальные отчеты о выполненных работах и затраченных часах, обеспечивая полную прозрачность."
    },
    {
      question: "Чем вы лучше штатного специалиста?",
      answer: "Наша команда обходится дешевле, при этом вы получаете доступ к компетенциям 5-10 экспертов. Мы не болеем, не уходим в отпуск и гарантируем результат по договору."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <Badge variant="outline" className="text-primary border-primary/20">
          Абонентское сопровождение 1С
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight">
          Абонентское сопровождение 1С: Ваша система работает стабильно, вы — сфокусированы на бизнесе
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Вы устали от того, что 1С «ломается в самый неподходящий момент», а решение проблем отнимает время и нервы? 
          Хотите быть уверены в актуальности отчетности и доступности специалистов? Абонентское сопровождение 1С — это не просто реагирование на сбои, 
          это проактивный подход, который обеспечит стабильность вашей системы и позволит вам сосредоточиться на главном: развитии вашего бизнеса.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Подобрать тариф на сопровождение
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Заказать бесплатный аудит 1С
          </Button>
        </div>
      </section>

      {/* Advantages */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Почему наше абонентское сопровождение 1С лучше?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем больше, чем просто "ремонт по вызову". Мы ваш личный IT-отдел по 1С.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <advantage.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {advantage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What is it */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Что такое абонентское сопровождение 1С и для кого это?</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Абонентское сопровождение 1С — это комплексная услуга, при которой за вашей компанией закрепляется команда экспертов, 
            готовая решать любые вопросы по 1С, обновлять систему и консультировать пользователей на регулярной основе. 
            Мы обеспечиваем стабильную и бесперебойную работу вашей 1С, предотвращая проблемы до их возникновения.
          </p>
          <div className="bg-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Наша услуга идеально подходит для:</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Любой компании, использующей 1С, со штатом от 5 до 500 сотрудников</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Бизнеса с годовой выручкой от 10 млн до 1 млрд руб.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Компаний, для которых стабильная работа 1С критически важна</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Всех отраслей, где используется 1С</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problems and Solutions */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ваши боли — наши решения</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы понимаем, как критична стабильная работа 1С для вашего бизнеса
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <item.icon className="w-8 h-8 text-destructive mt-1" />
                  <div>
                    <CardTitle className="text-lg text-destructive mb-2">Боль:</CardTitle>
                    <p className="text-base">{item.problem}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Наше решение:</h4>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Как происходит абонентское сопровождение 1С?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наша работа строится на принципах прозрачности, эффективности и проактивности
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold">Бесплатный аудит (1-3 дня)</h3>
                <p className="text-muted-foreground">Проведем экспресс-оценку вашей текущей системы 1С, выявим потенциальные проблемы и точки роста.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold">Подбор тарифа и заключение договора с SLA</h3>
                <p className="text-muted-foreground">На основе аудита предложим оптимальный тариф и зафиксируем гарантированные сроки реакции.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold">Настройка взаимодействия (1-2 дня)</h3>
                <p className="text-muted-foreground">Организуем удобные каналы связи (HelpDesk, телефон, Telegram) и удаленный доступ.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold">Ежедневная работа</h3>
                <ul className="text-muted-foreground space-y-1 mt-2">
                  <li>• Проактивный мониторинг системы 24/7</li>
                  <li>• Решение текущих вопросов и консультации</li>
                  <li>• Регулярные обновления</li>
                  <li>• Развитие системы по запросу</li>
                  <li>• Прозрачная отчетность</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Стоимость абонентского сопровождения 1С</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наши тарифы разработаны для максимальной прозрачности и выгоды
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tariffs.map((tariff, index) => (
            <Card key={index} className={`relative ${tariff.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
              {tariff.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{tariff.price}</div>
                <CardDescription className="text-base">{tariff.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tariff.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={tariff.popular ? "default" : "outline"}>
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наши клиенты высоко ценят стабильность и оперативность нашей поддержки
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <cite className="font-semibold not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Кейсы успешного сопровождения</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы успешно поддерживаем 1С-системы различной сложности
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{caseItem.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">Проблема:</h4>
                  <p className="text-sm text-muted-foreground">{caseItem.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Результат:</h4>
                  <p className="text-sm text-muted-foreground">{caseItem.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Часто задаваемые вопросы</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы собрали самые популярные вопросы, чтобы вы могли получить ответы сразу
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Технические спецификации</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы используем передовые инструменты и методологии для высококачественного сервиса
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Database,
              title: "Поддержка любых конфигураций 1С",
              description: "Включая типовые и нетиповые решения"
            },
            {
              icon: HeadphonesIcon,
              title: "Системы HelpDesk",
              description: "Для регистрации и отслеживания заявок"
            },
            {
              icon: Shield,
              title: "Защищенные каналы доступа",
              description: "RDP, AnyDesk для безопасного подключения"
            },
            {
              icon: Monitor,
              title: "Проактивный мониторинг",
              description: "Zabbix для отслеживания состояния системы"
            },
            {
              icon: Settings,
              title: "Стандарты ITIL",
              description: "Работа по международным стандартам"
            },
            {
              icon: CheckCircle,
              title: "Гарантия качества",
              description: "SLA и документированные процессы"
            }
          ].map((spec, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <spec.icon className="w-10 h-10 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{spec.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expert Opinion */}
      <section className="bg-secondary/50 p-8 rounded-lg space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Мнение основателя компании</h2>
        </div>
        <blockquote className="text-xl text-center italic text-muted-foreground max-w-4xl mx-auto">
          "1С — это живой организм, требующий заботы. Наше сопровождение — это как сервисное обслуживание для хорошего автомобиля. 
          Мы проводим диагностику, чтобы вы могли уверенно ехать к своим целям."
        </blockquote>
        <p className="text-center font-semibold">— Валентин Бутюгин, основатель 1S-GURU.RU</p>
      </section>

      {/* Market Expert Opinions */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Что говорят эксперты рынка</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Стоимость простоя IT-системы для современного бизнеса может исчисляться миллионами в час. Абонентское сопровождение — это страховка от таких простоев.",
              source: "Журнал CNews"
            },
            {
              quote: "Держать в штате специалиста, способного решить любую проблему с 1С, — непозволительная роскошь для 95% компаний. Аутсорсинг поддержки — экономически оправданная модель.",
              source: "Хабр Карьера"
            },
            {
              quote: "Проактивный мониторинг позволяет предотвратить до 80% инцидентов. Это гораздо дешевле, чем 'тушить пожары' по факту.",
              source: "IT-портал Global CIO"
            }
          ].map((opinion, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{opinion.quote}"
                </blockquote>
                <cite className="text-sm font-semibold not-italic">— {opinion.source}</cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8 bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Готовы забыть о проблемах с 1С?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Обеспечьте стабильную и бесперебойную работу вашей 1С уже сегодня
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Лид-магнит</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Скачайте "Чек-лист: 15 пунктов для аудита вашей системы 1С своими силами" — 
                это поможет вам выявить слабые места и понять, где нужна профессиональная помощь.
              </p>
              <Button className="w-full">Скачать чек-лист</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Специальное предложение</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Закажите "Комплексный аудит производительности и безопасности вашей 1С за 19 900 руб.". 
                Глубокая проверка системы и рекомендации по оптимизации.
              </p>
              <Button variant="outline" className="w-full">Заказать аудит</Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Подобрать тариф на сопровождение
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Заказать бесплатный аудит 1С
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            Получить консультацию эксперта
          </Button>
        </div>

        <p className="text-muted-foreground">
          Вы можете связаться с нами напрямую через Telegram: <strong>@mgm5500</strong>
        </p>
      </section>
    </div>
  );
};

export default AbonentskoeSprovozhdenie1S;