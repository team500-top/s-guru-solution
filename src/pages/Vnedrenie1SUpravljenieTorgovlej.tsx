import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Package,
  Calculator,
  FileText,
  Zap,
  Target,
  Settings,
  Star,
  ArrowRight,
  Phone,
  MessageCircle
} from "lucide-react";

const Vnedrenie1SUpravljenieTorgovlej = () => {
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
        "name": "Внедрение 1С:Управление торговлей",
        "item": "https://1s-guru.ru/uslugi/vnedrenie-1s-upravlenie-torgovley/"
      }
    ]
  };

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Внедрение 1С:Управление торговлей",
      "description": "Построим для вас систему управления торговлей на базе 1С:УТ за 1-3 месяца. Вы будете управлять продажами по воронке, видеть точные остатки на складе и на 30% увеличить скорость обработки заказов.",
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
        "url": "https://1s-guru.ru/uslugi/vnedrenie-1s-upravlenie-torgovley/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Пакеты услуг по внедрению 1С:Управление торговлей",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Типовое внедрение"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "150000",
              "priceCurrency": "RUB",
              "valueAddedTaxIncluded": "False"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Проект с доработками и интеграциями"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceMin": "80000",
              "priceMax": "300000",
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
          "name": "Чем УТ отличается от УНФ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1С:УТ – это более мощное и детализированное решение для управления торговлей, складом и закупками, подходит для средних и крупных торговых компаний. 1С:УНФ – комплексное решение для малого бизнеса, объединяющее функции торговли, услуг, производства и финансов в упрощенном виде."
          }
        },
        {
          "@type": "Question",
          "name": "В УТ есть CRM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, в 1С:УТ реализована подсистема CRM для управления взаимоотношениями с клиентами, воронкой продаж, планированием контактов и анализом эффективности менеджеров."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли подключить кассы и сканеры?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, 1С:УТ поддерживает подключение широкого спектра торгового оборудования, включая онлайн-кассы, сканеры штрихкодов, принтеры этикеток и терминалы сбора данных."
          }
        },
        {
          "@type": "Question",
          "name": "Как настроить обмен с Бухгалтерией?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Мы настраиваем автоматический двусторонний обмен данными между 1С:УТ и 1С:Бухгалтерией, что исключает двойной ввод и обеспечивает актуальность финансовых данных."
          }
        },
        {
          "@type": "Question",
          "name": "Вы поможете с настройкой ценообразования?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы настроим гибкие схемы ценообразования, системы скидок и акций, индивидуальные цены для разных групп клиентов."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли вести учет по нескольким складам?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, 1С:УТ позволяет вести детализированный учет по неограниченному количеству складов, включая ордерные и адресные склады."
          }
        },
        {
          "@type": "Question",
          "name": "А если у нас опт и розница одновременно?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1С:УТ отлично подходит для компаний, ведущих одновременно оптовую и розничную торговлю, позволяя разделять учетные процессы и аналитику."
          }
        },
        {
          "@type": "Question",
          "name": "Поможете с настройкой прав доступа для менеджеров?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы настроим систему прав доступа так, чтобы каждый сотрудник видел только ту информацию, которая необходима для его работы, и не мог получить доступ к конфиденциальным данным."
          }
        },
        {
          "@type": "Question",
          "name": "Интеграция с сайтом входит в стоимость?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Базовая интеграция с популярными CMS (например, Bitrix) может входить в комплексный проект. Для сложных или кастомных интеграций с сайтами или маркетплейсами стоимость рассчитывается отдельно."
          }
        },
        {
          "@type": "Question",
          "name": "Как долго длится внедрение?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Типовое внедрение 1С:УТ занимает от 1 до 3 месяцев. Более сложные проекты с глубокой кастомизацией и интеграциями могут потребовать больше времени, сроки обсуждаются индивидуально после предпроектного обследования."
          }
        }
      ]
    }
  ];

  const problems = [
    {
      icon: Package,
      problem: "Хаос на складе: то пусто, то густо",
      solution: "Внедряем систему управления запасами с автоматическим расчетом потребностей, что позволит вам перестать терять заказы и замораживать деньги в неликвидах."
    },
    {
      icon: Clock,
      problem: "Медленная отгрузка, сложности с учетом возвратов",
      solution: "Автоматизируем процессы поступлений и отгрузок, а также учет возвратов, что значительно ускоряет работу склада и исключает ошибки."
    },
    {
      icon: BarChart3,
      problem: "Неактуальные остатки на складе, менеджеры путаются",
      solution: "Вы будете видеть точные остатки онлайн, что позволит оптимизировать ассортимент и избежать пересортицы."
    },
    {
      icon: FileText,
      problem: "Отсутствие единой картины по продажам, ручное формирование документов",
      solution: "Построим для вас систему управления продажами по воронке, где все данные будут в одном месте. Автоматизируем формирование счетов и коммерческих предложений."
    },
    {
      icon: Calculator,
      problem: "Не можем посчитать реальную прибыль от сделки",
      solution: "Настраиваем детальную аналитику, которая покажет себестоимость каждой продажи и реальную прибыль от сделки."
    }
  ];

  const workSteps = [
    {
      title: "Предпроектное обследование",
      duration: "2-5 дней",
      description: "Глубоко погружаемся в ваши бизнес-процессы, анализируем текущее состояние продаж, закупок и склада, выявляем узкие места."
    },
    {
      title: "Моделирование и разработка ТЗ",
      duration: "5-10 дней",
      description: "Моделируем будущую систему, описываем функциональные требования и составляем детальное техническое задание, учитывая все ваши пожелания."
    },
    {
      title: "Настройка и адаптация",
      duration: "15-45 дней",
      description: "Устанавливаем и настраиваем 1С:УТ, адаптируем функционал под ваши уникальные процессы, настраиваем ценообразование, скидки, права доступа."
    },
    {
      title: "Перенос данных",
      duration: "3-7 дней",
      description: "Осуществляем безопасный перенос всех необходимых данных (номенклатура, контрагенты, начальные остатки) из старых систем или Excel."
    },
    {
      title: "Обучение и запуск",
      duration: "3-5 дней",
      description: "Проводим комплексное обучение ваших сотрудников работе с новой системой на реальных примерах. После обучения вы будете управлять продажами по воронке, видеть точные остатки на складе и увеличить скорость обработки заказов."
    }
  ];

  const advantages = [
    {
      icon: TrendingUp,
      title: "Экспертиза в продажах и логистике",
      description: "В нашей команде не только программисты, но и бывшие коммерческие директора, руководители отделов продаж и логистики. Мы понимаем ваш бизнес изнутри."
    },
    {
      icon: Settings,
      title: "Глубокая интеграционная экспертиза",
      description: "Специализируемся на сложных, кастомных интеграциях по API с любыми, даже самописными системами, обеспечивая надежность и стабильность."
    },
    {
      icon: Target,
      title: "Опыт в автоматизации сетей",
      description: "Мы имеем опыт автоматизации крупных торговых сетей, что позволяет нам строить масштабируемые и эффективные решения."
    },
    {
      icon: CheckCircle,
      title: "Комплексный подход «под ключ»",
      description: "Мы берем на себя все: от аудита и аналитики до запуска и технической поддержки."
    },
    {
      icon: Star,
      title: "20+ лет работы на рынке",
      description: "С 2001 года мы реализовали более 500 проектов, что подтверждает нашу надежность."
    },
    {
      icon: Users,
      title: "Команда из 25+ специалистов",
      description: "Над вашим проектом работает слаженная команда: бизнес-аналитики, архитекторы, менеджеры проектов и профильные разработчики."
    }
  ];

  const cases = [
    {
      title: "Дистрибьютор автозапчастей",
      problem: "Компания страдала от хаоса в ценах и скидках, что приводило к ошибкам и потере прибыли.",
      result: "Ошибки в ценах исключены, время от заявки до счета сократилось с 30 до 5 минут."
    },
    {
      title: "Сеть магазинов одежды",
      problem: "Руководство не могло отследить остатки по всей сети в реальном времени, что приводило к замораживанию средств в неликвидах.",
      result: "Руководство видит остатки онлайн, оптимизирован ассортимент, выручка выросла на 15%."
    },
    {
      title: "Интернет-магазин",
      problem: "Заказы обрабатывались вручную, что приводило к низкой скорости и ошибкам в остатках на сайте.",
      result: "Скорость обработки заказов выросла на 400%, точность остатков на сайте достигла 99.9%, устранен ручной труд."
    }
  ];

  const reviews = [
    {
      text: "После внедрения УТ мы наконец-то поняли, на чем зарабатываем, а что продаем в убыток. Это открыло глаза!",
      author: "Михаил П., коммерческий директор"
    },
    {
      text: "Наш склад перестал быть 'черной дырой'. Полный контроль и порядок.",
      author: "ООО «Авто-Лига»"
    },
    {
      text: "Отдельное спасибо за настройку CRM. Отдел продаж стал работать в разы эффективнее.",
      author: "Сергей Н., РОП"
    }
  ];

  const faqs = [
    {
      question: "Чем УТ отличается от УНФ?",
      answer: "1С:УТ – это более мощное и детализированное решение для управления торговлей, складом и закупками, подходит для средних и крупных торговых компаний. 1С:УНФ – комплексное решение для малого бизнеса, объединяющее функции торговли, услуг, производства и финансов в упрощенном виде."
    },
    {
      question: "В УТ есть CRM?",
      answer: "Да, в 1С:УТ реализована подсистема CRM для управления взаимоотношениями с клиентами, воронкой продаж, планированием контактов и анализом эффективности менеджеров."
    },
    {
      question: "Можно ли подключить кассы и сканеры?",
      answer: "Да, 1С:УТ поддерживает подключение широкого спектра торгового оборудования, включая онлайн-кассы, сканеры штрихкодов, принтеры этикеток и терминалы сбора данных."
    },
    {
      question: "Как настроить обмен с Бухгалтерией?",
      answer: "Мы настраиваем автоматический двусторонний обмен данными между 1С:УТ и 1С:Бухгалтерией, что исключает двойной ввод и обеспечивает актуальность финансовых данных."
    },
    {
      question: "Как долго длится внедрение?",
      answer: "Типовое внедрение 1С:УТ занимает от 1 до 3 месяцев. Более сложные проекты с глубокой кастомизацией и интеграциями могут потребовать больше времени, сроки обсуждаются индивидуально после предпроектного обследования."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Внедрение 1С:Управление торговлей – контроль продаж и склада</title>
        <meta name="description" content="Внедрим 1С:Управление торговлей за 1-3 месяца. Получите полный контроль над продажами, точные остатки и рост скорости обработки заказов на 30%. Закажите аудит склада!" />
        <meta name="keywords" content="внедрение 1с управление торговлей, автоматизация продаж 1с, учет товаров 1с, управление складом 1с, настройка 1с ут, запустить 1с ут, сколько стоит внедрить 1с ут, оптимизация торговли 1с, управление торговой компанией в 1с, внедрение ут" />
        <meta name="author" content="Валентин Бутюгин, Эксперт и Партнер компании 1S-GURU.RU" />
        <meta name="robots" content="index, follow" />
        <meta name="mailru-domain" content="TIcBPRrUMEwywRfN" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Внедрение 1С:Управление торговлей – УТ от 1S-GURU.RU" />
        <meta property="og:description" content="Постройте эффективную систему управления торговлей с 1С:УТ от 1S-GURU.RU. Контроль продаж, запасов и оперативное увеличение скорости обработки заказов." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1s-guru.ru/uslugi/vnedrenie-1s-upravlenie-torgovley/" />
        
        {/* Twitter tags */}
        <meta name="twitter:title" content="Внедрение 1С:Управление торговлей – УТ от 1S-GURU.RU" />
        <meta name="twitter:description" content="Постройте эффективную систему управления торговлей с 1С:УТ от 1S-GURU.RU. Контроль продаж, запасов и оперативное увеличение скорости обработки заказов." />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Внедрение 1С:Управление торговлей – полный контроль над продажами и складом
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ваш бизнес растет, но хаос в продажах и на складе мешает развитию? Теряете заказы, замораживаете деньги в неликвидах, а отчеты не отражают реальную картину? Внедрение 1С:Управление торговлей (УТ) — это инвестиция в управляемость и прибыльность вашей компании. <strong>Мы построим для вас систему, которая позволит контролировать каждый аспект торговли, от первой заявки до отгрузки, и увеличит скорость обработки заказов на 30%.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Получить план автоматизации
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Заказать демонстрацию
              </Button>
            </div>
          </div>
        </section>

        {/* What is 1C:UT Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Что такое внедрение 1С:Управление торговлей и для кого это?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  <strong>Внедрение 1С:Управление торговлей — это комплексный проект по автоматизации всех бизнес-процессов, связанных с продажами, закупками, складским учетом и финансами в торговой компании.</strong> Это не просто установка программы, а создание единой экосистемы, где все данные о клиентах, заказах и остатках взаимосвязаны.
                </p>
                <p className="text-muted-foreground mb-6">
                  Мы поможем вам навести порядок, если вы устали от ручного учета, не видите точных остатков и теряете прибыль из-за неэффективного управления торговлей.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Наша услуга идеально подходит для:
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Оптовых и дистрибьюторских компаний, интернет-магазинов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Бизнеса с количеством сотрудников от 5 до 100 человек</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Компаний с годовой выручкой от 50 млн до 2 млрд руб</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Растущего бизнеса, который столкнулся с хаосом в продажах и на складе</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Our Approach Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Почему наш подход к внедрению 1С:Управление торговлей лучший?
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы не просто устанавливаем программу, мы строим эффективную систему управления торговлей, опираясь на глубокую экспертизу и практический опыт
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Мы оптимизируем вашу торговлю</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <strong>Наша команда не просто внедряет учет, а строит полноценную систему управления продажами, включая CRM и воронку, что отличает нас от конкурентов.</strong> Мы настраиваем систему так, чтобы она работала на увеличение вашей прибыли, а не просто для учета.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Экспертиза бывших коммерческих директоров</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Наши консультанты — это не только программисты, но и специалисты с практическим опытом в построении отделов продаж и логистики. <strong>Это позволяет нам понимать ваши задачи изнутри и предлагать решения, которые действительно работают.</strong>
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Фокус на увеличении прибыли и скорости</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Вы получите систему, которая поможет увеличить продажи, оптимизировать запасы и даст полный контроль над торговой деятельностью.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problems and Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ваши задачи — наши решения: как мы оптимизируем вашу торговлю
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы понимаем ключевые проблемы, с которыми сталкиваются торговые компании, и предлагаем эффективные решения с помощью 1С:Управление торговлей
            </p>
            <div className="space-y-6">
              {problems.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <item.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-600 mb-2">Задача:</h3>
                        <p className="text-sm">"{item.problem}"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-600 mb-2">Наше решение:</h3>
                        <p className="text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Как происходит наша работа по внедрению 1С:Управление торговлей?
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы следуем проверенной методологии, обеспечивая прозрачность и эффективность на каждом шаге
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {index + 1}
                      </Badge>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground">
                <strong>Поддержка после запуска:</strong> Не оставляем вас один на один с новой системой. Оказываем консультационную и техническую поддержку на первых этапах работы.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Наши конкурентные преимущества и почему нам доверяют
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <advantage.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <p className="text-lg">
                    <strong>Честная цена:</strong> Наши ставки значительно выгоднее, чем у топовых интеграторов, при этом мы являемся аккредитованной IT-компанией, что дает вам налоговые льготы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Стоимость внедрения 1С:Управление торговлей
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы предлагаем прозрачное ценообразование, чтобы вы могли планировать бюджет
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">Популярный</Badge>
                  </CardTitle>
                  <CardTitle className="text-2xl">Типовое внедрение</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    От 150 000 ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Включает базовую настройку, перенос данных и обучение.</strong>
                  </p>
                  <Button className="w-full">
                    Заказать консультацию
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Проекты с доработками</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    80 000 - 300 000 ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Стоимость рассчитывается индивидуально после предпроектного обследования и составления ТЗ. <strong>Средний чек на услугу 80 000 - 300 000 руб.</strong>
                  </p>
                  <Button variant="outline" className="w-full">
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Отзывы клиентов о нашем внедрении 1С:УТ
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы гордимся тем, что помогаем нашим клиентам достигать реальных бизнес-результатов
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">"{review.text}"</p>
                    <p className="text-sm text-muted-foreground font-medium">— {review.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Кейсы успешного внедрения 1С:Управление торговлей
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Наш опыт подтвержден успешными проектами в различных сферах торговли
            </p>
            <div className="space-y-6">
              {cases.map((caseItem, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline">Кейс {index + 1}</Badge>
                      {caseItem.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Проблема:</h4>
                        <p className="text-sm text-muted-foreground">{caseItem.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Результат:</h4>
                        <p className="text-sm">{caseItem.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Часто задаваемые вопросы о внедрении 1С:Управление торговлей
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы собрали самые популярные вопросы, чтобы вы могли получить ответы сразу
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Технические спецификации 1С:Управление торговлей
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Платформа и конфигурация:</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Платформа:</strong> 1С:Предприятие 8.3</li>
                      <li><strong>Конфигурация:</strong> 1С:Управление торговлей, ред. 11.5</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Возможности:</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Ключевые подсистемы:</strong> CRM, Продажи, Закупки, Склад, Казначейство</li>
                      <li><strong>Интеграция:</strong> Поддерживает обмен с 1С:Бухгалтерия, 1С:ЗУП, сайтами (через CommerceML), CRM-системами, системами маркировки, ЕГАИС</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expert Opinion Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Мнение основателя компании – Валентина Бутюгина
            </h2>
            <Card className="text-center">
              <CardContent className="pt-6">
                <blockquote className="text-xl italic text-muted-foreground mb-4">
                  «Торговля — это скорость и точность. 1С:Управление торговлей — это приборная панель вашего бизнеса. <strong>Наша миссия — сделать так, чтобы эта панель показывала вам правду и помогала обгонять конкурентов».</strong>
                </blockquote>
                <p className="font-semibold">— Валентин Бутюгин, основатель 1S-GURU.RU</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Market Expert Quotes */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Что говорят эксперты рынка?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm italic mb-4">
                    "Компании, которые не управляют своими запасами и не анализируют продажи, в 90% случаев проигрывают конкуренцию в течение 3-5 лет."
                  </p>
                  <p className="text-sm font-semibold">— <strong>Федор Вирин, Data Insight</strong></p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm italic mb-4">
                    "Эпоха 'интуитивных продаж' закончилась. Сегодня побеждает тот, кто строит системный процесс на основе CRM и точных данных со склада."
                  </p>
                  <p className="text-sm font-semibold">— <strong>Максим Батырев, бизнес-спикер</strong></p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm italic mb-4">
                    "Ключ к успеху в e-commerce — скорость обработки заказа. Интеграция сайта, склада и CRM — это основа этой скорости."
                  </p>
                  <p className="text-sm font-semibold">— <strong>Журнал "Retail.ru"</strong></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Готовы навести порядок в торговле и увеличить прибыль?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Сделайте первый шаг к полной автоматизации и контролю вашего бизнеса
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Польза</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    <strong>Скачайте наш "Чек-лист: 20 точек роста для вашей торговой компании"</strong> – получите практические рекомендации, которые помогут вам найти скрытые резервы для увеличения прибыли и оптимизации процессов.
                  </p>
                  <Button variant="outline" className="w-full">
                    Скачать чек-лист
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Удобно</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    <strong>Закажите "Аудит вашего склада за 9900 руб."</strong> Наш специалист проведет экспресс-анализ текущего состояния складского учета, выявит узкие места и предложит конкретные шаги по оптимизации.
                  </p>
                  <Button className="w-full">
                    Заказать аудит
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Получить план автоматизации торговли
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Calculator className="w-5 h-5 mr-2" />
                  Рассчитать стоимость внедрения 1С:УТ
                </Button>
              </div>
              <Button variant="ghost" size="lg" className="text-lg px-8 py-4">
                <ArrowRight className="w-5 h-5 mr-2" />
                Заказать демонстрацию 1С:Управление торговлей
              </Button>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Вы можете связаться с нами напрямую через Telegram: <strong>@mgm5500</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vnedrenie1SUpravljenieTorgovlej;