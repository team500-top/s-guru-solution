import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calculator,
  CheckCircle,
  Users,
  Clock,
  Shield,
  FileText,
  Download,
  MessageCircle,
  Star
} from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect } from "react";

const Vnedrenie1SBuhgalteriya = () => {
  useEffect(() => {
    // Добавляем JSON-LD схему
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
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
          "name": "Внедрение 1С:Бухгалтерия",
          "item": "https://1s-guru.ru/uslugi/vnedrenie-1s-buhgalteriya/"
        }
      ]
    });

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Внедрение 1С:Бухгалтерия",
        "description": "Комплексное внедрение 1С:Бухгалтерии под ключ для малого и среднего бизнеса. Настройка, перенос данных, обучение и поддержка для корректной отчетности и уверенности перед налоговой.",
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
          "url": "https://1s-guru.ru/uslugi/vnedrenie-1s-buhgalteriya/"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Пакеты услуг по внедрению 1С:Бухгалтерия",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Пакет «Быстрый старт»"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "30000",
                "priceCurrency": "RUB"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Пакет «Внедрение под ключ»"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "70000",
                "priceCurrency": "RUB"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Пакет «Сложный переход»"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "120000",
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
            "name": "Чем версия ПРОФ отличается от Базовой?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Базовая версия однопользовательская, в ней нельзя вести учет по нескольким организациям в одной базе и ее нельзя дорабатывать. ПРОФ лишена этих ограничений."
            }
          },
          {
            "@type": "Question",
            "name": "Нужно ли покупать подписку ИТС?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, для легального получения обновлений версий ПРОФ и КОРП требуется действующая подписка 1С:ИТС. Мы поможем ее оформить."
            }
          },
          {
            "@type": "Question",
            "name": "Смогу ли я сам(а) работать после настройки?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, это наша главная цель. Мы проводим обучение, чтобы вы или ваш бухгалтер могли самостоятельно выполнять все повседневные операции."
            }
          },
          {
            "@type": "Question",
            "name": "Поможете ли с переносом данных из старой программы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, мы специализируемся на переносе данных из 1С 7.7, Excel и других систем."
            }
          },
          {
            "@type": "Question",
            "name": "Это не слишком сложно для ИП на УСН \"Доходы\"?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Нет, мы настроим интерфейс так, что у вас останется 3-5 нужных кнопок. Вести учет будет не сложнее, чем в онлайн-банке."
            }
          },
          {
            "@type": "Question",
            "name": "Входит ли обучение в стоимость?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, в пакеты \"Внедрение под ключ\" и \"Сложный переход\" включено несколько часов обучения."
            }
          },
          {
            "@type": "Question",
            "name": "Как быстро вы все настроите?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Базовую настройку мы можем выполнить за 3-5 рабочих дней. Полное внедрение занимает в среднем 10-15 рабочих дней."
            }
          },
          {
            "@type": "Question",
            "name": "А с управленческим учетом поможете?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1С:Бухгалтерия имеет ограниченные возможности для управленческого учета. Мы можем настроить базовые отчеты, но для полноценного учета рекомендуем другие решения (например, 1С:УНФ)."
            }
          },
          {
            "@type": "Question",
            "name": "Вы настраиваете обмен с банком?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, мы можем настроить прямой обмен (DirectBank) с вашим банком, чтобы выписки загружались, а платежки отправлялись автоматически."
            }
          },
          {
            "@type": "Question",
            "name": "Что делать, если после настройки возникнут вопросы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "В течение месяца после завершения проекта мы оказываем бесплатную консультационную поддержку по всем вопросам, связанным с внедрением."
            }
          }
        ]
      }
    ]);

    document.head.appendChild(breadcrumbScript);
    document.head.appendChild(serviceScript);

    // Очистка при размонтировании
    return () => {
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(serviceScript);
    };
  }, []);

  const advantages = [
    {
      icon: Shield,
      title: "Гарантия по договору",
      description: "Мы прописываем в договоре нашу ответственность за корректность первоначальной настройки учета и полное соответствие законодательству."
    },
    {
      icon: Users,
      title: "Двойная экспертиза",
      description: "В нашей команде работают не только опытные программисты 1С, но и аттестованные бухгалтеры и аудиторы с опытом более 10 лет."
    },
    {
      icon: CheckCircle,
      title: "Ориентация на результат",
      description: "Наша цель — чтобы вы спали спокойно, зная, что ваш учет в полном порядке, а отчеты сдаются вовремя и без ошибок."
    }
  ];

  const painPoints = [
    {
      pain: "Боюсь штрафов и проверок от налоговой",
      solution: "Мы настраиваем автоматический расчет налогов и формирование отчетности, сводя риск ошибок к минимуму. Встроенный календарь бухгалтера напомнит о сроках, а вы будете уверены в корректности данных."
    },
    {
      pain: "Бардак в первичных документах",
      solution: "Внедряем единую систему для создания и хранения всех документов. Функция \"ЭДО\" позволяет обмениваться документами с контрагентами онлайн. Вы всегда будете знать, где находится нужный акт или счет-фактура."
    },
    {
      pain: "Мой бухгалтер ничего не успевает / я сам трачу на это вечность",
      solution: "Автоматизируем рутинные операции: загрузка банковских выписок, автоматическое заполнение документов по шаблонам, пакетное формирование отчетов. Экономим до 10 часов в неделю."
    },
    {
      pain: "Плачу налоги, но не понимаю, за что",
      solution: "Настраиваем понятные отчеты (анализ счета, оборотно-сальдовая ведомость), которые расшифровывают каждую цифру в налоговой декларации. Вы всегда сможете проверить, из чего складывается сумма налога."
    },
    {
      pain: "Хочу перейти на 1С с другой программы/Excel, но боюсь потерять данные",
      solution: "Мы разработали методику безопасного и быстрого переноса данных. Аккуратно перенесем все справочники и остатки, проверим корректность и запустим новую систему без простоя в работе."
    }
  ];

  const workSteps = [
    {
      title: "Бесплатная консультация",
      duration: "1 день",
      description: "Мы обсудим ваши текущие задачи, систему налогообложения, объем операций и желаемые результаты."
    },
    {
      title: "Аудит и план работ",
      duration: "2-3 дня",
      description: "Изучаем текущее состояние учета. Составляем детальный план-график внедрения и смету, заключаем договор с прописанными гарантиями."
    },
    {
      title: "Настройка программы",
      duration: "3-5 дней",
      description: "Устанавливаем и настраиваем 1С:Бухгалтерию, включая учетную политику, план счетов, параметры учета и права доступа."
    },
    {
      title: "Перенос данных",
      duration: "1-3 дня",
      description: "Аккуратно переносим данные по контрагентам, номенклатуре и вводим начальные остатки, обеспечивая целостность информации."
    },
    {
      title: "Обучение и запуск",
      duration: "1-2 дня",
      description: "Проводим индивидуальное обучение для вас или вашего бухгалтера на реальных примерах вашего бизнеса. Наша главная цель – чтобы вы могли самостоятельно выполнять все повседневные операции."
    },
    {
      title: "Поддержка первого отчетного периода",
      duration: "1 месяц",
      description: "Мы не бросаем вас после запуска. Помогаем сформировать и сдать первую отчетность в новой программе, обеспечивая вашу уверенность."
    }
  ];

  const pricingPackages = [
    {
      name: "Быстрый старт",
      description: "для новых ИП/ООО на УСН",
      price: "30 000",
      features: [
        "Установка",
        "Базовая настройка", 
        "Обучение 1 пользователя"
      ]
    },
    {
      name: "Внедрение под ключ",
      description: "для компаний на ОСНО",
      price: "70 000",
      features: [
        "Полный цикл с аудитом",
        "Настройка",
        "Перенос данных",
        "Обучение до 3 пользователей"
      ],
      popular: true
    },
    {
      name: "Сложный переход",
      description: "с других систем с большим объемом данных",
      price: "120 000",
      features: [
        "Индивидуальный расчет стоимости",
        "Детальный аудит",
        "Комплексная миграция",
        "Полное сопровождение"
      ]
    }
  ];

  const testimonials = [
    {
      text: "Наконец-то мы перестали бояться отчетного периода! Команда 1С-Гуру не просто установила программу, а навела реальный порядок в нашем учете. Спасибо за профессионализм и терпение!",
      author: "Анна В., главный бухгалтер",
      company: "ООО \"МегаТорг\""
    },
    {
      text: "Даже не думал, что в стандартной Бухгалтерии можно вести такой удобный учет для небольшого бизнеса. Все четко и по делу. Отдельное спасибо за обучение, теперь я сам понимаю, откуда берутся цифры.",
      author: "Константин С., директор",
      company: "ИП Соин"
    },
    {
      text: "Быстро и безболезненно перенесли нас с самописной программы, где был полный хаос. Теперь все по закону, понятно и прозрачно. Рекомендую!",
      author: "ООО \"СтройТехПроект\"",
      company: ""
    }
  ];

  const cases = [
    {
      title: "Стартап в IT-сфере",
      description: "Клиент, молодая IT-компания с 15 сотрудниками, вел учет в Excel, что приводило к проблемам с учетом расходов и рискам со стороны ФНС. Мы внедрили 1С:Бухгалтерия ПРОФ, настроили учетную политику и учет затрат по проектам, а также провели обучение.",
      result: "Сэкономлено более 200 000 руб. налогов за первый год, обеспечен прозрачный учет и база для дальнейшего роста."
    },
    {
      title: "Торговая компания на ОСНО",
      description: "Оптовая компания с 40 сотрудниками и оборотом 500 млн/год сталкивалась со сложностями в учете НДС и расхождениями. Мы провели аудит, настроили автоматическую регистрацию счетов-фактур и подключили 1С-ЭДО.",
      result: "Время на подготовку декларации по НДС сократилось с 3 дней до 4 часов, количество запросов от налоговой снизилось на 80%."
    },
    {
      title: "Аутсорсинговая бухгалтерская компания",
      description: "Компания, обслуживающая более 30 клиентов, имела все базы на устаревшей платформе 1С 7.7. Мы разработали и реализовали проект по миграции всех клиентских баз на 1С:Бухгалтерию 8.3.",
      result: "Учет для всех клиентов стандартизирован, скорость работы бухгалтеров повысилась на 30%, появилась возможность предоставлять облачные услуги."
    }
  ];

  const faqData = [
    {
      question: "Чем версия ПРОФ отличается от Базовой?",
      answer: "Базовая версия однопользовательская, в ней нельзя вести учет по нескольким организациям в одной базе и ее нельзя дорабатывать. ПРОФ лишена этих ограничений."
    },
    {
      question: "Нужно ли покупать подписку ИТС?",
      answer: "Да, для легального получения обновлений версий ПРОФ и КОРП требуется действующая подписка 1С:ИТС. Мы поможем ее оформить."
    },
    {
      question: "Смогу ли я сам(а) работать после настройки?",
      answer: "Да, это наша главная цель. Мы проводим обучение, чтобы вы или ваш бухгалтер могли самостоятельно выполнять все повседневные операции."
    },
    {
      question: "Поможете ли с переносом данных из старой программы?",
      answer: "Да, мы специализируемся на переносе данных из 1С 7.7, Excel и других систем."
    },
    {
      question: "Это не слишком сложно для ИП на УСН \"Доходы\"?",
      answer: "Нет, мы настроим интерфейс так, что у вас останется 3-5 нужных кнопок. Вести учет будет не сложнее, чем в онлайн-банке."
    },
    {
      question: "Входит ли обучение в стоимость?",
      answer: "Да, в пакеты \"Внедрение под ключ\" и \"Сложный переход\" включено несколько часов обучения."
    },
    {
      question: "Как быстро вы все настроите?",
      answer: "Базовую настройку мы можем выполнить за 3-5 рабочих дней. Полное внедрение занимает в среднем 10-15 рабочих дней."
    },
    {
      question: "А с управленческим учетом поможете?",
      answer: "1С:Бухгалтерия имеет ограниченные возможности для управленческого учета. Мы можем настроить базовые отчеты, но для полноценного учета рекомендуем другие решения (например, 1С:УНФ)."
    },
    {
      question: "Вы настраиваете обмен с банком?",
      answer: "Да, мы можем настроить прямой обмен (DirectBank) с вашим банком, чтобы выписки загружались, а платежки отправлялись автоматически."
    },
    {
      question: "Что делать, если после настройки возникнут вопросы?",
      answer: "В течение месяца после завершения проекта мы оказываем бесплатную консультационную поддержку по всем вопросам, связанным с внедрением."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Хлебные крошки */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/uslugi">Услуги</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Внедрение 1С:Бухгалтерия</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero секция */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Внедрение 1С:Бухгалтерия под ключ – залог порядка в финансах и уверенности перед ФНС
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Вы устали от ручного учета, страха перед налоговыми проверками и постоянных ошибок в отчетах? 
            Внедрение 1С:Бухгалтерия – это не просто установка программы, это фундамент вашей "финансовой крепости", 
            который обеспечит порядок, прозрачность и спокойствие. Мы предлагаем комплексное решение, которое позволит 
            вам забыть о рутине и сосредоточиться на развитии бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-w-[250px]">
              Заказать бесплатный аудит бухучета
            </Button>
            <Button variant="outline" size="lg" className="min-w-[250px]">
              Рассчитать стоимость внедрения
            </Button>
          </div>
        </div>

        {/* Что такое внедрение */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Что такое внедрение 1С:Бухгалтерия и для кого это?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Внедрение 1С:Бухгалтерия «под ключ» – это полный комплекс услуг по настройке, запуску и обучению работе 
                с программным продуктом 1С:Бухгалтерия, адаптированным под специфику вашего бизнеса. Мы гарантируем, 
                что уже через 10 дней отчетность будет сдаваться вовремя и без ошибок, а вы получите полный контроль 
                над документами и уверенность перед налоговой.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Наша услуга идеально подходит для:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">ООО и ИП на любой системе налогообложения (УСН, ОСНО): от стартапов до стабильно работающих компаний</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Компаний с количеством сотрудников от 1 до 50 человек</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Бизнеса с годовой выручкой от 10 млн до 1 млрд руб.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Предприятий любой отрасли: торговля, услуги, производство, строительство</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Мы поможем тем, кто начинает деятельность, переходит с других систем учета (включая Excel) или недоволен 
            текущим состоянием своей бухгалтерии.
          </p>
        </div>

        {/* Почему наш подход лучший */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Почему наш подход к внедрению 1С:Бухгалтерия лучший?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            В отличие от конкурентов, которые могут просто установить программу, мы предлагаем нечто большее. 
            Мы строим вашу "финансовую крепость".
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Боли и решения */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Ваши боли — наши решения: как мы помогаем бизнесу
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Мы понимаем, с какими проблемами вы сталкиваетесь ежедневно. Наше внедрение 1С:Бухгалтерия — 
            это эффективное решение для каждой из них:
          </p>
          <div className="space-y-6">
            {painPoints.map((item, index) => (
              <Card key={index} className="border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-destructive mb-2">Боль:</h3>
                      <p className="text-muted-foreground italic">"{item.pain}"</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Наше решение:</h3>
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Как происходит работа */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Как происходит наша работа по внедрению 1С:Бухгалтерия?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Мы следуем четкому, проверенному плану, чтобы обеспечить максимальную эффективность и прозрачность каждого этапа:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-medium bg-background/90 backdrop-blur-sm relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{step.duration}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Стоимость */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Стоимость внедрения 1С:Бухгалтерия
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-center">
            Мы предлагаем гибкие пакеты услуг, чтобы каждый мог найти оптимальное решение для своего бизнеса:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-medium bg-background/90 backdrop-blur-sm relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground z-10">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">
                    от {pkg.price} ₽
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "default" : "outline"} className="w-full">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Отзывы */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Отзывы клиентов о нашей работе
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-center">
            Мы гордимся тем, что наши клиенты доверяют нам самое ценное — свою бухгалтерию:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    {testimonial.company && (
                      <div className="text-muted-foreground">{testimonial.company}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Кейсы */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Кейсы успешного внедрения 1С:Бухгалтерия
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-center">
            Наш опыт подтвержден сотнями успешных проектов. Вот лишь некоторые из них:
          </p>
          <div className="space-y-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{caseItem.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{caseItem.description}</p>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-2">Результат:</h4>
                      <p className="text-muted-foreground">{caseItem.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Часто задаваемые вопросы о внедрении 1С:Бухгалтерия
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-center">
            Мы собрали самые популярные вопросы, чтобы вы могли получить ответы сразу:
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0 bg-background/90 backdrop-blur-sm rounded-xl shadow-medium">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Технические возможности */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Технические возможности 1С:Бухгалтерия
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-medium bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Платформа и конфигурация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Платформа:</span>
                  <span className="text-foreground">1С:Предприятие 8.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Конфигурация:</span>
                  <span className="text-foreground">1С:Бухгалтерия предприятия, ред. 3.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Варианты:</span>
                  <span className="text-foreground">Базовая, ПРОФ, КОРП</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-medium bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Варианты работы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Файловый:</span>
                  <span className="text-foreground">для 1-3 пользователей</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Клиент-серверный:</span>
                  <span className="text-foreground">для 5+ пользователей</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Облачный:</span>
                  <span className="text-foreground">1С:Fresh</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Лид-магнит */}
        <div className="mb-20">
          <Card className="border-0 shadow-medium bg-secondary/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Скачайте наш "Гайд: Календарь бухгалтера на 2025 год с подсказками"
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Получите PDF-файл с инфографикой, где указаны все сроки сдачи ключевых отчетов и уплаты налогов. 
                Это поможет вам оценить объем задач и задуматься об их автоматизации.
              </p>
              <Button size="lg">
                Скачать бесплатно
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Мнение основателя */}
        <div className="mb-20">
          <Card className="border-0 shadow-medium bg-background/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
                Мнение основателя компании – Валентина Бутюгина
              </h2>
              <blockquote className="text-lg text-muted-foreground italic text-center leading-relaxed">
                «Многие предприниматели считают бухгалтерию скучной обязаловкой. Но я знаю, что правильно построенный 
                бухучет — это как крепкий фундамент у дома. Без него любой бизнес — карточный домик, который рухнет при 
                первой же налоговой проверке. Мы не просто устанавливаем программу, мы закладываем этот фундамент. 
                Чтобы вы спали спокойно и строили свой бизнес на надежной основе».
              </blockquote>
              <div className="text-center mt-6">
                <div className="font-semibold text-foreground">Валентин Бутюгин</div>
                <div className="text-muted-foreground">Основатель 1S-GURU.RU</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA секция */}
        <div className="text-center bg-secondary/30 rounded-2xl p-8 border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Готовы навести порядок в бухгалтерии?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы здесь, чтобы помочь вам построить надежный финансовый фундамент. Начните прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="min-w-[250px]">
              Заказать бесплатный аудит бухучета
            </Button>
            <Button variant="outline" size="lg" className="min-w-[250px]">
              Получить консультацию по выбору версии
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-w-[200px]">
              <a href="https://t.me/mgm5500" target="_blank" rel="noopener noreferrer">
                Написать в Telegram
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px]">
              <a href="https://wa.me/79778386097" target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            Вы можете связаться с нами напрямую через Telegram: @mgm5500
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vnedrenie1SBuhgalteriya;