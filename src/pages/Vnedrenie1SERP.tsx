import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Users, Building, TrendingUp, Settings, Shield, Award, BarChart3, Factory, Cog, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Vnedrenie1SERP = () => {
  useEffect(() => {
    // Add BreadcrumbList Schema
    const breadcrumbSchema = {
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
          "name": "Внедрение 1С:ERP Управление предприятием",
          "item": "https://1s-guru.ru/uslugi/vnedrenie-1s-erp/"
        }
      ]
    };

    // Add Service and FAQ Schema
    const serviceSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Внедрение 1С:ERP Управление предприятием",
        "description": "Спроектируем и внедрим 1С:ERP как единую систему управления ресурсами вашего предприятия. Вы получите полный контроль над производством, финансами и активами и повысите эффективность бизнеса на 15-20%.",
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
          "url": "https://1s-guru.ru/uslugi/vnedrenie-1s-erp/"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Стоимость внедрения 1С:ERP Управление предприятием",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Корпоративный проект"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "5000000",
                "priceCurrency": "RUB",
                "valueAddedTaxIncluded": "False"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Предпроектное обследование и разработка концепции внедрения"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "490000",
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
            "name": "Нам точно нужна ERP, может хватит КА?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1С:ERP — это флагманское решение для крупных предприятий и холдингов с глубокими производственными и финансовыми процессами, требующими детализированного планирования и учета. 1С:Комплексная автоматизация (КА) подходит для средних компаний, которым нужен единый контур учета без глубокой автоматизации производства. Выбор зависит от масштаба и сложности ваших задач. Мы поможем вам определить оптимальное решение."
            }
          },
          {
            "@type": "Question",
            "name": "Внедрение ERP — это очень долго?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Сроки внедрения ERP зависят от масштаба и сложности проекта. В среднем, проект занимает от 6 до 18 месяцев. Однако, благодаря модульной структуре 1С:ERP, возможно поэтапное внедрение, что позволяет быстрее получить первые результаты."
            }
          },
          {
            "@type": "Question",
            "name": "Как управлять таким сложным проектом?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Мы используем проверенные методологии проектного управления (например, Agile-подходы) и закрепляем за вами команду опытных руководителей проектов, системных архитекторов и бизнес-аналитиков, которые обеспечат прозрачность и контроль на всех этапах."
            }
          },
          {
            "@type": "Question",
            "name": "Какие риски у проекта внедрения ERP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Основные риски связаны с некорректным анализом, отсутствием вовлеченности руководства, недостаточным обучением персонала. Мы минимизируем эти риски за счет глубокого предпроектного обследования, вовлечения топ-менеджмента и комплексного обучения."
            }
          },
          {
            "@type": "Question",
            "name": "Вы можете сделать интеграцию с нашим производственным оборудованием (MES)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, 1С:ERP имеет широкие возможности для интеграции с внешними системами, включая MES (Manufacturing Execution System) и SCADA, что позволяет обеспечить сквозной контроль производственных процессов."
            }
          },
          {
            "@type": "Question",
            "name": "Как в ERP ведется бюджетирование и МСФО?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1С:ERP содержит мощные подсистемы для бюджетирования, планирования денежных средств (казначейство) и ведения международного финансового учета (МСФО), что позволяет получать консолидированную отчетность по всему холдингу."
            }
          },
          {
            "@type": "Question",
            "name": "Сколько стоит поддержка ERP после внедрения?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Стоимость поддержки 1С:ERP после внедрения обсуждается индивидуально, так как зависит от объема и сложности системы. Мы предлагаем гибкие тарифы абонентского сопровождения, включая проактивный мониторинг и выделенную команду поддержки."
            }
          },
          {
            "@type": "Question",
            "name": "Вашей команде хватит компетенций для нашего сложного производства?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, наша команда имеет статус \"1С:Центр ERP\" и обладает глубокой отраслевой экспертизой в различных областях промышленности. Наши архитекторы систем имеют опыт реализации самых масштабных и сложных проектов в России."
            }
          },
          {
            "@type": "Question",
            "name": "Как происходит обучение сотен пользователей?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Мы разрабатываем индивидуальные программы обучения, проводим групповые и индивидуальные занятия, создаем обучающие материалы и видео-уроки. Обучение может быть организовано как на территории заказчика, так и удаленно."
            }
          },
          {
            "@type": "Question",
            "name": "Какой реальный бизнес-эффект мы получим?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Внедрение 1С:ERP позволяет получить значительный экономический эффект за счет повышения эффективности производства, оптимизации затрат, сокращения циклов планирования, улучшения управляемости и прозрачности бизнеса, что подтверждается нашими кейсами (повышение эффективности на 15-20%)."
            }
          }
        ]
      }
    ];

    // Create and append script elements
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    // Cleanup function
    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(serviceScript);
    };
  }, []);

  const advantages = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Инструмент стратегического управления",
      description: "Наши проекты ведутся архитекторами систем, которые говорят на языке топ-менеджмента"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Статус «1С:Центр ERP»",
      description: "Подтверждает нашу высшую компетенцию в области ERP-систем"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Глубокая отраслевая экспертиза",
      description: "Опыт реализации масштабных проектов в машиностроении и пищевой промышленности"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Цифровой суверенитет",
      description: "Стоимость владения 1С:ERP в 3-5 раз ниже западных аналогов"
    }
  ];

  const painPoints = [
    {
      problem: "Невозможно построить точный производственный план",
      solution: "Внедряем подсистему управления производством с оперативным планированием и расчетом потребностей"
    },
    {
      problem: "Сложности с учетом себестоимости, нет прозрачности финансовых потоков",
      solution: "Настраиваем точный расчет себестоимости, бюджетирование и консолидацию данных, включая МСФО"
    },
    {
      problem: "Разрозненность отделов и информационных систем",
      solution: "Единая цифровая платформа для управления всем холдингом"
    },
    {
      problem: "Неэффективное управление ресурсами и активами",
      solution: "Повышение эффективности бизнеса на 15-20% за счет системного подхода"
    },
    {
      problem: "Отсутствие контроля над цепочками поставок",
      solution: "Автоматизация управления закупками, складом, логистикой и системы ТОиР"
    }
  ];

  const workSteps = [
    {
      title: "Предпроектное обследование",
      duration: "от 2 недель",
      description: "Глубокий анализ текущих бизнес-процессов, IT-инфраструктуры и стратегических целей предприятия"
    },
    {
      title: "Концептуальное проектирование",
      duration: "от 3 недель",
      description: "Разработка общей концепции будущей системы, определение архитектуры и ключевых подсистем"
    },
    {
      title: "Техническое проектирование",
      duration: "от 4 недель",
      description: "Детальное описание функциональных и технических требований к системе"
    },
    {
      title: "Разработка",
      duration: "от 8 недель",
      description: "Реализация функционала, настройка типовых подсистем, разработка уникальных модулей"
    },
    {
      title: "Подготовка к запуску",
      duration: "от 2 недель",
      description: "Перенос данных, настройка рабочих мест, тестирование системы и обучение пользователей"
    },
    {
      title: "Опытно-промышленная эксплуатация",
      duration: "от 4 недель",
      description: "Запуск системы в реальную работу под контролем наших специалистов"
    }
  ];

  const pricingPackages = [
    {
      title: "Корпоративный проект",
      price: "от 5 000 000 ₽",
      description: "Полное внедрение 1С:ERP для крупных предприятий",
      features: [
        "Полный анализ требований",
        "Архитектурное проектирование",
        "Настройка всех подсистем",
        "Интеграции с внешними системами",
        "Перенос исторических данных",
        "Обучение персонала",
        "ОПЭ и поддержка"
      ]
    },
    {
      title: "Предпроектное обследование",
      price: "от 490 000 ₽",
      description: "Анализ и разработка концепции внедрения",
      features: [
        "Аудит текущих процессов",
        "Анализ IT-инфраструктуры",
        "Концепция будущей системы",
        "План проекта и сроки",
        "Оценка рисков",
        "Презентация для руководства"
      ]
    }
  ];

  const testimonials = [
    {
      text: "Это был сложный, но очень важный для нас проект. Результат превзошел ожидания. Управляемость бизнеса выросла на порядок.",
      author: "Генеральный директор",
      company: "АО «Машиностроительный завод»"
    },
    {
      text: "Благодаря внедрению ERP мы смогли оптимизировать производственные запасы и высвободить более 50 млн рублей оборотных средств.",
      author: "Финансовый директор",
      company: "«ФармСинтез»"
    },
    {
      text: "Теперь мы видим полную картину по всему холдингу в реальном времени. Для принятия стратегических решений это бесценно.",
      author: "Председатель совета директоров",
      company: "Промышленный холдинг"
    }
  ];

  const cases = [
    {
      title: "Машиностроительный холдинг",
      description: "Переход со старой системы УПП, отсутствие единой системы планирования",
      result: "Создана единая система планирования, точность планирования выросла на 40%, сроки подготовки отчетности по МСФО сократились с 20 до 5 дней"
    },
    {
      title: "Пищевой комбинат",
      description: "Сложности с расчетом себестоимости и прослеживаемостью партий",
      result: "Обеспечена полная прослеживаемость от сырья до готовой продукции, экономия на сырье составила 5%"
    },
    {
      title: "Фармацевтическая компания",
      description: "Необходимость учета по сериям и срокам годности, валидация процессов для GMP",
      result: "Внедрена система, полностью соответствующая строгим стандартам GMP, обеспечен точный учет и контроль качества"
    }
  ];

  const faqData = [
    {
      question: "Нам точно нужна ERP, может хватит КА?",
      answer: "1С:ERP — это флагманское решение для крупных предприятий и холдингов с глубокими производственными и финансовыми процессами, требующими детализированного планирования и учета. 1С:Комплексная автоматизация (КА) подходит для средних компаний, которым нужен единый контур учета без глубокой автоматизации производства. Выбор зависит от масштаба и сложности ваших задач. Мы поможем вам определить оптимальное решение."
    },
    {
      question: "Внедрение ERP — это очень долго?",
      answer: "Сроки внедрения ERP зависят от масштаба и сложности проекта. В среднем, проект занимает от 6 до 18 месяцев. Однако, благодаря модульной структуре 1С:ERP, возможно поэтапное внедрение, что позволяет быстрее получить первые результаты."
    },
    {
      question: "Как управлять таким сложным проектом?",
      answer: "Мы используем проверенные методологии проектного управления (например, Agile-подходы) и закрепляем за вами команду опытных руководителей проектов, системных архитекторов и бизнес-аналитиков, которые обеспечат прозрачность и контроль на всех этапах."
    },
    {
      question: "Какие риски у проекта внедрения ERP?",
      answer: "Основные риски связаны с некорректным анализом, отсутствием вовлеченности руководства, недостаточным обучением персонала. Мы минимизируем эти риски за счет глубокого предпроектного обследования, вовлечения топ-менеджмента и комплексного обучения."
    },
    {
      question: "Вы можете сделать интеграцию с нашим производственным оборудованием (MES)?",
      answer: "Да, 1С:ERP имеет широкие возможности для интеграции с внешними системами, включая MES (Manufacturing Execution System) и SCADA, что позволяет обеспечить сквозной контроль производственных процессов."
    },
    {
      question: "Как в ERP ведется бюджетирование и МСФО?",
      answer: "1С:ERP содержит мощные подсистемы для бюджетирования, планирования денежных средств (казначейство) и ведения международного финансового учета (МСФО), что позволяет получать консолидированную отчетность по всему холдингу."
    },
    {
      question: "Сколько стоит поддержка ERP после внедрения?",
      answer: "Стоимость поддержки 1С:ERP после внедрения обсуждается индивидуально, так как зависит от объема и сложности системы. Мы предлагаем гибкие тарифы абонентского сопровождения, включая проактивный мониторинг и выделенную команду поддержки."
    },
    {
      question: "Вашей команде хватит компетенций для нашего сложного производства?",
      answer: "Да, наша команда имеет статус «1С:Центр ERP» и обладает глубокой отраслевой экспертизой в различных областях промышленности. Наши архитекторы систем имеют опыт реализации самых масштабных и сложных проектов в России."
    },
    {
      question: "Как происходит обучение сотен пользователей?",
      answer: "Мы разрабатываем индивидуальные программы обучения, проводим групповые и индивидуальные занятия, создаем обучающие материалы и видео-уроки. Обучение может быть организовано как на территории заказчика, так и удаленно."
    },
    {
      question: "Какой реальный бизнес-эффект мы получим?",
      answer: "Внедрение 1С:ERP позволяет получить значительный экономический эффект за счет повышения эффективности производства, оптимизации затрат, сокращения циклов планирования, улучшения управляемости и прозрачности бизнеса, что подтверждается нашими кейсами (повышение эффективности на 15-20%)."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Helmet>
        <title>Внедрение 1С:ERP Управление предприятием – комплексная автоматизация</title>
        <meta name="description" content="Спроектируем и внедрим 1С:ERP для полного контроля над производством, финансами и активами. Повысьте эффективность бизнеса на 15-20%. Закажите консультацию архитектора ERP!" />
        <meta name="keywords" content="внедрение 1с erp, 1с erp цена, стоимость внедрения 1с erp, внедрение 1с erp 2, заказать внедрение 1с erp, 1с erp управление предприятием, внедрение 1с erp на производственном предприятии, проект внедрения 1с erp, стоимость лицензий 1с erp, переход с 1с упп на 1с erp, внедрение блока производства в 1с erp, внедрение бюджетирования в 1с erp, внедрение мсфо в 1с erp, команда для внедрения 1с erp, корпоративное внедрение 1с erp, предпроектное обследование для 1с erp, внедрение 1с erp агропромышленный комплекс, стоимость часа консультанта 1с erp, внедрение mes на базе 1с erp, обучение пользователей 1с erp, поддержка после внедрения 1с erp, внедрение тоир в 1с erp, расчет полной стоимости владения 1с erp, внедрение 1с erp в холдинге, партнер по внедрению 1с erp, аудит проекта внедрения 1с erp" />
        <meta name="author" content="Валентин Бутюгин, Эксперт и Партнер компании 1S-GURU.RU" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Внедрение 1С:ERP Управление предприятием – 1S-GURU.RU" />
        <meta property="og:description" content="Единая система управления ресурсами вашего предприятия на базе 1С:ERP. Повышение эффективности бизнеса и полный контроль над всеми процессами." />
        <meta name="twitter:title" content="Внедрение 1С:ERP Управление предприятием – 1S-GURU.RU" />
        <meta name="twitter:description" content="Единая система управления ресурсами вашего предприятия на базе 1С:ERP. Повышение эффективности бизнеса и полный контроль над всеми процессами." />
      </Helmet>

      {/* Breadcrumbs */}
      <section className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">Главная</a>
            <span className="mx-2">/</span>
            <a href="/uslugi" className="hover:text-primary">Услуги</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Внедрение 1С:ERP Управление предприятием</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Внедрение 1С:ERP Управление предприятием
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Единая цифровая платформа для вашего бизнеса
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Вы управляете крупным предприятием или холдингом и сталкиваетесь с разобщенностью данных, сложностями в планировании производства и принятии стратегических решений? 
            Мы спроектируем и внедрим систему, которая даст вам полный контроль над производством, финансами и активами, повысив эффективность на 15-20%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Получить консультацию архитектора ERP
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Рассчитать стоимость внедрения
            </Button>
          </div>
        </div>
      </section>

      {/* What is ERP Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Что такое внедрение 1С:ERP и кому это подходит?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                Внедрение 1С:ERP Управление предприятием – это масштабный проект по созданию единой информационной системы для комплексного управления всеми ключевыми ресурсами крупной и средней компании.
              </p>
              <p className="text-lg leading-relaxed">
                Это не просто программа, а инструмент стратегического управления, который обеспечивает прозрачность и управляемость вашего бизнеса.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Эта услуга идеально подойдет для:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Средних и крупных производственных предприятий, а также холдингов</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Компаний с количеством сотрудников от 100 до 5000+</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Предприятий с годовой выручкой от 1 млрд руб.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Любой производственной отрасли</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>Зрелого бизнеса, которому нужна мощная система для управления ресурсами</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Чем наше предложение по внедрению 1С:ERP превосходит конкурентов?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы помогаем в развитии вашего предприятия с 1С:ERP?</h2>
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Badge variant="destructive" className="mb-3">Задача</Badge>
                      <p className="text-lg">{point.problem}</p>
                    </div>
                    <div>
                      <Badge variant="default" className="mb-3">Наше решение</Badge>
                      <p className="text-lg text-primary">{point.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Как происходит наша работа по внедрению 1С:ERP?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg pt-2">{step.title}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline">{step.duration}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Стоимость внедрения 1С:ERP Управление предприятием</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription className="text-lg">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов о внедрении 1С:ERP</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Примеры успешного внедрения 1С:ERP</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                  <div className="border-t pt-4">
                    <Badge className="mb-2">Результат</Badge>
                    <p className="text-primary font-medium">{caseStudy.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы о внедрении 1С:ERP</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Технические характеристики 1С:ERP Управление предприятием</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Cog className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Платформа</CardTitle>
              </CardHeader>
              <CardContent>
                <p>1С:Предприятие 8.3</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Конфигурация</CardTitle>
              </CardHeader>
              <CardContent>
                <p>1С:ERP Управление предприятием 2</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Ключевые подсистемы</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Управление производством (MES/APS), Финансы (МСФО, бюджетирование), CRM, ТОиР</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Архитектура</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Масштабируемые решения для крупных и распределенных предприятий</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Интеграция</CardTitle>
              </CardHeader>
              <CardContent>
                <p>API, веб-сервисы, интеграция с производственным оборудованием</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Мнение основателя компании – Валентина Бутюгина</h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-muted-foreground">
                "Сильный бизнес сегодня — это цифровой бизнес. 1С:ERP — это мощнейший инструмент для построения такой компании. 
                Наша миссия — помочь отечественным предприятиям внедрить его для конкуренции на мировом уровне"
              </blockquote>
              <p className="mt-4 font-semibold">— Валентин Бутюгин, основатель 1S-GURU.RU</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expert Opinions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Что говорят эксперты рынка?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  "ERP-система — это цифровой хребет современного промышленного предприятия. Без него невозможно конкурировать на глобальном рынке."
                </blockquote>
                <p className="font-semibold">Борис Нуралиев, основатель «1С»</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  "Внедрение ERP — это не IT-проект, это проект по трансформации всего бизнеса. Он должен инициироваться и контролироваться на уровне первого лица компании."
                </blockquote>
                <p className="font-semibold">Журнал «Директор ИС»</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  "Основной эффект от внедрения ERP — не автоматизация, а повышение управляемости и прозрачности бизнеса, возможность принимать решения на основе точных данных."
                </blockquote>
                <p className="font-semibold">Gartner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Постройте цифровую основу вашего бизнеса!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Получите комплексную систему, которая обеспечит прозрачность, управляемость и эффективность всех процессов на вашем предприятии.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  White Paper для вас
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Получите "White Paper: Методология успешного внедрения ERP-системы на промышленном предприятии". 
                  Наш многолетний опыт и ключевые рекомендации для успешной реализации проекта.
                </p>
                <Button className="w-full">Скачать White Paper</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/20 to-secondary/10 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Специальное предложение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Закажите "Предпроектное обследование и разработку концепции внедрения за 490 000 руб.". 
                  Получите детальный план проекта, оценку рисков и стратегию внедрения.
                </p>
                <Button variant="outline" className="w-full">Заказать обследование</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Начните сейчас:</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Консультация архитектора ERP
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Рассчитать стоимость внедрения
              </Button>
              <Button variant="outline" size="lg">
                Демонстрация 1С:ERP
              </Button>
            </div>
            <p className="text-muted-foreground">
              Или свяжитесь с нами напрямую через Telegram: <a href="https://t.me/mgm5500" className="text-primary hover:underline">@mgm5500</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vnedrenie1SERP;