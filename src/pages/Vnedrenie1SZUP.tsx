import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calculator, 
  FileText, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Settings,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Award,
  BookOpen,
  Target,
  Zap,
  UserCheck,
  Building2,
  CreditCard,
  AlertTriangle,
  Download
} from "lucide-react";

const Vnedrenie1SZUP = () => {
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
        "name": "Внедрение 1С:Зарплата и управление персоналом",
        "item": "https://1s-guru.ru/uslugi/vnedrenie-1s-zup/"
      }
    ]
  };

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Внедрение 1С:Зарплата и управление персоналом",
      "description": "Настроим 1С:ЗУП за 15 дней так, что зарплата и налоги будут рассчитываться за 1 час, а кадровые документы формироваться в 2 клика. Гарантируем соответствие трудовому законодательству по договору.",
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
        "url": "https://1s-guru.ru/uslugi/vnedrenie-1s-zup/"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Пакеты услуг по внедрению 1С:ЗУП",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Базовая настройка 1С:ЗУП"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "100000",
              "priceCurrency": "RUB",
              "valueAddedTaxIncluded": "False"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Проект с глубокой кастомизацией и переносом данных"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceMin": "70000",
              "priceMax": "250000",
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
          "name": "Чем ЗУП отличается от расчета зарплаты в Бухгалтерии?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1С:ЗУП — это специализированный инструмент для полноценного кадрового учета и расчета зарплаты любой сложности, включая сложные начисления, удержания, гибкие графики, учет по обособленным подразделениям, воинский учет. В 1С:Бухгалтерии функционал расчета зарплаты сильно ограничен и подходит только для небольших компаний с простыми условиями оплаты труда."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли считать сдельную зарплату?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, 1С:ЗУП позволяет настраивать расчет сдельной оплаты труда, а также любые другие сложные начисления и удержания."
          }
        },
        {
          "@type": "Question",
          "name": "Как настроить учет по обособленным подразделениям?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Мы настроим учет по обособленным подразделениям с учетом специфики их налогообложения и отчетности."
          }
        },
        {
          "@type": "Question",
          "name": "Вы поможете с переходом на ЭТК?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы поможем настроить работу с электронными трудовыми книжками (ЭТК) в 1С:ЗУП, включая формирование и отправку необходимых отчетов."
          }
        },
        {
          "@type": "Question",
          "name": "А воинский учет есть?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, 1С:ЗУП включает полноценный блок воинского учета, который мы настроим в соответствии с требованиями законодательства."
          }
        },
        {
          "@type": "Question",
          "name": "Как настроить интеграцию с Бухгалтерией?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Мы настроим автоматический обмен данными между 1С:ЗУП и 1С:Бухгалтерией, чтобы данные по начислениям и удержаниям корректно отражались в финансовом учете."
          }
        },
        {
          "@type": "Question",
          "name": "Обучение кадровиков входит в стоимость?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, обучение ваших специалистов работе с программой включено в стоимость внедрения."
          }
        },
        {
          "@type": "Question",
          "name": "Вы помогаете с первоначальным заполнением данных?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы оказываем помощь в безопасном и корректном переносе исторических и начальных данных."
          }
        },
        {
          "@type": "Question",
          "name": "Как быть, если у нас ненормированные графики работы?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1С:ЗУП позволяет настраивать и учитывать работу по самым сложным и ненормированным графикам, включая суммированный учет рабочего времени."
          }
        },
        {
          "@type": "Question",
          "name": "Система учитывает последние изменения в законодательстве?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, 1С:ЗУП регулярно обновляется фирмой \"1С\" в соответствии с актуальными изменениями трудового и налогового законодательства. Мы обеспечиваем своевременное обновление вашей конфигурации."
          }
        }
      ]
    }
  ];

  const problems = [
    {
      icon: Calculator,
      problem: "Сложные расчеты (отпускные, больничные) отнимают много времени и сил",
      solution: "Настраиваем автоматический расчет зарплаты любой сложности в соответствии с Трудовым кодексом РФ."
    },
    {
      icon: AlertTriangle,
      problem: "Ошибки в расчете зарплаты и налогов, риск штрафов от контролирующих органов",
      solution: "Вы будете уверены в корректности расчета зарплаты и налогов, защититесь от штрафов ГИТ и СФР."
    },
    {
      icon: FileText,
      problem: "Кадровые документы формируются медленно, вручную",
      solution: "Кадровые документы будут формироваться в 2 клика, что значительно ускорит кадровое делопроизводство и сделает его простым и прозрачным."
    },
    {
      icon: Shield,
      problem: "Сложности с ведением воинского учета и соблюдением последних изменений в законодательстве",
      solution: "Настраиваем воинский учет в 1С:ЗУП и обеспечиваем соответствие всем актуальным требованиям законодательства."
    }
  ];

  const workSteps = [
    {
      title: "HR-аудит",
      duration: "1-3 дня",
      description: "Глубоко анализируем ваши текущие кадровые процессы, системы оплаты труда и документооборот, выявляя участки для оптимизации."
    },
    {
      title: "Проектирование системы",
      duration: "3-7 дней",
      description: "Разрабатываем архитектуру будущей системы, описываем функциональные требования и составляем детальный план внедрения."
    },
    {
      title: "Настройка 1С:ЗУП",
      duration: "10-15 дней",
      description: "Устанавливаем и конфигурируем программу, настраиваем учетную политику по персоналу, графики работы, виды расчетов и удержаний, а также права доступа."
    },
    {
      title: "Перенос исторических данных",
      duration: "3-7 дней",
      description: "Осуществляем безопасный и методологически правильный перенос данных о сотрудниках, их кадровых перемещениях и начислениях из старых систем."
    },
    {
      title: "Тестовый расчет зарплаты",
      duration: "2-3 дня",
      description: "Проводим тестовые расчеты на реальных данных для проверки корректности всех настроек и выявления возможных неточностей."
    },
    {
      title: "Обучение и запуск",
      duration: "2-5 дней",
      description: "Обучаем ваших сотрудников (бухгалтеров, кадровиков, HR-специалистов) работе с новой системой на практических примерах."
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Глубокая экспертиза",
      description: "Наша HR-практика состоит из сертифицированных консультантов по 1С:ЗУП и юристов по трудовому праву."
    },
    {
      icon: Shield,
      title: "Юридическая корректность",
      description: "Мы гарантируем не только техническую, но и юридическую корректность наших решений, что крайне важно для участка работы с персоналом."
    },
    {
      icon: Settings,
      title: "Методология безопасного переноса данных",
      description: "Мы разработали отработанную методику переноса данных, которая минимизирует риски и обеспечивает целостность информации."
    },
    {
      icon: Target,
      title: "Комплексный подход",
      description: "От аудита текущих процессов до обучения пользователей и поддержки после запуска."
    },
    {
      icon: Star,
      title: "Опыт более 20 лет",
      description: "С 2001 года мы реализовали более 500 проектов, что дает нам уникальный опыт в автоматизации самых сложных бизнес-задач."
    },
    {
      icon: CreditCard,
      title: "Аккредитация IT-компании",
      description: "Работа с нами позволяет вам получить налоговые льготы."
    }
  ];

  const cases = [
    {
      title: "Производственная компания",
      problem: "Сложный сдельно-премиальный расчет заработной платы велся в Excel, что приводило к ошибкам и задержкам.",
      result: "Расчет полностью автоматизирован, у рабочих появились личные кабинеты, что повысило лояльность и прозрачность начислений."
    },
    {
      title: "IT-компания с быстрым ростом",
      problem: "Кадровый учет велся «на коленке», что создавало риски трудовых споров.",
      result: "Наведен полный порядок в кадровых документах, риски сведены к минимуму, учет соответствует законодательству."
    },
    {
      title: "Сеть ресторанов",
      problem: "Сложные графики работы и суммированный учет рабочего времени создавали трудности в расчете зарплаты.",
      result: "Расчет зарплаты стал занимать 1 день вместо недели, устранены ошибки, повышена точность начислений."
    }
  ];

  const reviews = [
    {
      text: "С нашими сложными графиками и северными надбавками только вы смогли разобраться. Зарплата теперь считается идеально.",
      author: "Елена Т., начальник отдела кадров"
    },
    {
      text: "Переход на ЭТК прошел абсолютно безболезненно. Спасибо за шаблоны и консультации!",
      author: "АО «СеверСтрой»"
    },
    {
      text: "Наконец-то у нас есть уверенность в правильности расчета налогов с ФОТ.",
      author: "Главный бухгалтер, ООО «МедЦентр»"
    }
  ];

  const faqs = [
    {
      question: "Чем ЗУП отличается от расчета зарплаты в Бухгалтерии?",
      answer: "1С:ЗУП — это специализированный инструмент для полноценного кадрового учета и расчета зарплаты любой сложности, включая сложные начисления, удержания, гибкие графики, учет по обособленным подразделениям, воинский учет. В 1С:Бухгалтерии функционал расчета зарплаты сильно ограничен и подходит только для небольших компаний с простыми условиями оплаты труда."
    },
    {
      question: "Можно ли считать сдельную зарплату?",
      answer: "Да, 1С:ЗУП позволяет настраивать расчет сдельной оплаты труда, а также любые другие сложные начисления и удержания."
    },
    {
      question: "Как настроить учет по обособленным подразделениям?",
      answer: "Мы настроим учет по обособленным подразделениям с учетом специфики их налогообложения и отчетности."
    },
    {
      question: "Вы поможете с переходом на ЭТК?",
      answer: "Да, мы поможем настроить работу с электронными трудовыми книжками (ЭТК) в 1С:ЗУП, включая формирование и отправку необходимых отчетов."
    },
    {
      question: "А воинский учет есть?",
      answer: "Да, 1С:ЗУП включает полноценный блок воинского учета, который мы настроим в соответствии с требованиями законодательства."
    },
    {
      question: "Система учитывает последние изменения в законодательстве?",
      answer: "Да, 1С:ЗУП регулярно обновляется фирмой \"1С\" в соответствии с актуальными изменениями трудового и налогового законодательства. Мы обеспечиваем своевременное обновление вашей конфигурации."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Внедрение 1С:ЗУП в Москве: автоматизация зарплаты и кадров</title>
        <meta name="description" content="Настроим 1С:ЗУП за 15 дней. Расчет зарплаты за 1 час, кадровые документы в 2 клика. Гарантия соответствия ТК РФ. Получите консультацию по расчету зарплаты!" />
        <meta name="keywords" content="внедрение 1с зуп, настройка 1с зуп, автоматизация расчета зарплаты, кадровый учет в 1с, управление персоналом 1с, запустить 1с зарплата, сколько стоит 1с зуп внедрение, автоматизация отдела кадров, расчет зарплаты в 1с, 1с зарплата и управление персоналом цена, переход на 1с зуп 3.1, купить 1с зуп с внедрением, внедрение 1с зуп корп, перенос данных из зик 7.7 в зуп 3.1" />
        <meta name="author" content="Валентин Бутюгин, Эксперт и Партнер компании 1S-GURU.RU" />
        <meta name="robots" content="index, follow" />
        <meta name="mailru-domain" content="TIcBPRrUMEwywRfN" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Внедрение 1С:Зарплата и управление персоналом – 1S-GURU.RU" />
        <meta property="og:description" content="Настроим 1С:ЗУП для точного расчета зарплаты, быстрого кадрового учета и полного соответствия трудовому законодательству. Экспертное внедрение от 1S-GURU.RU." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1s-guru.ru/uslugi/vnedrenie-1s-zup/" />
        
        {/* Twitter tags */}
        <meta name="twitter:title" content="Внедрение 1С:Зарплата и управление персоналом – 1S-GURU.RU" />
        <meta name="twitter:description" content="Настроим 1С:ЗУП для точного расчета зарплаты, быстрого кадрового учета и полного соответствия трудовому законодательству. Экспертное внедрение от 1S-GURU.RU." />
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
              Внедрение 1С:Зарплата и управление персоналом (ЗУП) – точность расчетов и порядок в кадрах
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Заработная плата — один из самых чувствительных аспектов в любой компании. Ошибки в расчетах, задержки выплат или сложности с кадровым учетом могут привести к недовольству сотрудников и претензиям со стороны контролирующих органов. <strong>Внедрение 1С:Зарплата и управление персоналом (ЗУП) – это эффективное решение, которое позволит вам рассчитывать зарплату и налоги за 1 час, формировать кадровые документы в 2 клика и быть полностью уверенными в соответствии трудовому законодательству.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Получить консультацию по расчету зарплаты
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Закажите демонстрацию 1С:ЗУП
              </Button>
            </div>
          </div>
        </section>

        {/* What is 1C:ZUP Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Что такое внедрение 1С:ЗУП и кому это подходит?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  Внедрение 1С:ЗУП – это полный цикл работ по настройке и запуску специализированной программы для автоматизации всех процессов, связанных с расчетом заработной платы, ведением кадрового учета и управлением персоналом. <strong>Это решение не просто упрощает рутину, но и обеспечивает юридическую корректность всех операций.</strong>
                </p>
                <p className="text-muted-foreground mb-6">
                  Мы помогаем компаниям, которые сталкиваются с неточностями в расчетах, риском штрафов, высокой нагрузкой на кадровиков и сложностями с ведением воинского учета.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Эта услуга идеально подойдет для:
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Компаний со штатом от 20 до 1000 сотрудников</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Предприятий любой отрасли, особенно тех, где есть сложные системы оплаты труда (сдельная, KPI, вахтовики, северные надбавки)</span>
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
              Чем наше предложение по внедрению 1С:ЗУП превосходит конкурентов?
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы не просто технически настраиваем программу, а внедряем комплексное решение, которое обеспечивает юридическую безопасность и прозрачность
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Экспертиза в трудовом законодательстве</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Мы предлагаем не только техническую настройку 1С:ЗУП, но и глубокую экспертизу в области трудового законодательства.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Гарантия юридической корректности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Мы гарантируем не только точный расчет зарплаты, но и юридическую корректность всего кадрового учета по договору. <strong>Это означает, что вы будете защищены от штрафов ГИТ и СФР.</strong>
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>«Железный мост» между отделами</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Мы строим надежный мост между HR, бухгалтерией и руководством, устраняя хаос и риски на самом ответственном участке работы с персоналом.
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
              Как мы помогаем в решении ваших задач по зарплате и кадрам?
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы понимаем, какие сложности возникают при работе с зарплатой и кадрами. Наши решения призваны снять эти заботы
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
                        <p className="text-sm">{item.problem}</p>
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
              Как мы работаем: этапы внедрения 1С:ЗУП
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Наш подход к внедрению 1С:ЗУП обеспечивает максимальную эффективность и прозрачность каждого шага
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
                <strong>Личная поддержка в первый расчетный период:</strong> Наши эксперты оказывают оперативную помощь и консультации в первый же расчетный период, чтобы вы были уверены в корректности начислений и отчетности.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Наши преимущества: почему выбирают «Команду 500» для внедрения 1С:ЗУП
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы — аккредитованная IT-компания TEAM500, и наш опыт в автоматизации HR-процессов подтвержден годами успешной работы
            </p>
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
                    <strong>Честная цена:</strong> Наша ставка от 1950 ₽ за час работы специалиста значительно выгоднее, чем у большинства конкурентов.
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
              Стоимость внедрения 1С:ЗУП
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы предлагаем прозрачное ценообразование, чтобы вы могли заранее спланировать бюджет
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">Популярный</Badge>
                  </CardTitle>
                  <CardTitle className="text-2xl">Базовая настройка</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    От 100 000 ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Включает установку, базовую настройку типового функционала и обучение.</strong>
                  </p>
                  <Button className="w-full">
                    Заказать консультацию
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Проекты с глубокой кастомизацией</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    70 000 - 250 000 ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Стоимость рассчитывается индивидуально после HR-аудита. <strong>Средний чек на услугу 70 000 - 250 000 руб.</strong>
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
              Отзывы наших клиентов о внедрении 1С:ЗУП
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы гордимся тем, что помогаем нашим клиентам упростить работу с персоналом и быть уверенными в расчетах
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
              Примеры успешного внедрения 1С:ЗУП
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Наши кейсы демонстрируют эффективность внедрения 1С:ЗУП для компаний с различными особенностями
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
              Часто задаваемые вопросы по 1С:ЗУП
            </h2>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Мы собрали самые актуальные вопросы, чтобы вы могли получить полную информацию
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
              Технические характеристики 1С:ЗУП
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Платформа и конфигурация:</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Платформа:</strong> 1С:Предприятие 8.3</li>
                      <li><strong>Конфигурация:</strong> 1С:Зарплата и управление персоналом, ред. 3.1 (ПРОФ, КОРП)</li>
                      <li><strong>Ключевые подсистемы:</strong> Кадровый учет, Расчет зарплаты, HRM</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Возможности:</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Поддержка:</strong> Электронных трудовых книжек (ЭТК), воинского учета, обмена с ФНС, СФР</li>
                      <li><strong>Интеграция:</strong> Бесшовный обмен с 1С:Бухгалтерия, 1С:ERP, возможность интеграции с системами документооборота и порталами</li>
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
                  «Люди — главный актив. А зарплата — самый чувствительный нерв. <strong>Мы подходим к автоматизации учета труда с ответственностью хирурга, чтобы вы строили честные и прозрачные отношения с командой».</strong>
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
                    "Расчет зарплаты — самая ответственная и самая 'расстрельная' должность в бухгалтерии. Любая ошибка может привести к трудовому спору. Автоматизация здесь — не роскошь, а необходимость."
                  </p>
                  <p className="text-sm font-semibold">— <strong>Татьяна Минаева, эксперт по трудовому праву</strong></p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm italic mb-4">
                    "Современные системы, как 1С:ЗУП, позволяют не только считать зарплату, но и вести полноценный кадровый учет, включая воинский, что стало крайне актуально."
                  </p>
                  <p className="text-sm font-semibold">— <strong>Портал "HeadHunter"</strong></p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm italic mb-4">
                    "Эффективность HR-отдела напрямую зависит от степени автоматизации рутинных кадровых операций."
                  </p>
                  <p className="text-sm font-semibold">— <strong>Алена Владимирская, HR-эксперт</strong></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Сделайте кадровый учет и расчет зарплаты прозрачным и точным!
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Получите надежный инструмент для управления персоналом, который соответствует всем требованиям законодательства и помогает строить честные отношения с вашей командой
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Чек-лист для вас</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Скачайте наш <strong>"Чек-лист: Аудит кадрового делопроизводства: 30 пунктов для самопроверки"</strong>. Это поможет вам выявить потенциальные риски и убедиться, что ваш кадровый учет в порядке.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Скачать чек-лист
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Специальное предложение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Закажите <strong>"Экспресс-аудит вашего расчета зарплаты за 12 900 руб."</strong> Наш специалист проведет проверку ключевых аспектов расчета зарплаты в вашей компании, выявит потенциальные ошибки и даст рекомендации по их устранению.
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
                  Получите консультацию по расчету зарплаты
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Calculator className="w-5 h-5 mr-2" />
                  Рассчитайте стоимость внедрения 1С:ЗУП
                </Button>
              </div>
              <Button variant="ghost" size="lg" className="text-lg px-8 py-4">
                <ArrowRight className="w-5 h-5 mr-2" />
                Закажите демонстрацию возможностей 1С:ЗУП
              </Button>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Свяжитесь с нами напрямую через Telegram: <strong>@mgm5500</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vnedrenie1SZUP;