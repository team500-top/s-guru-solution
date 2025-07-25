import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Settings, Zap, Award, Users, Shield, Target, ArrowRight, Download } from "lucide-react";

const Dorabotka1S = () => {
  const advantages = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Безопасные технологии доработок",
      description: "Используем современные технологии (расширения конфигураций), которые не ломают обновления типовой 1С"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Гарантия на код",
      description: "Даем гарантию на все выполненные работы и написанный нами код"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Решаем бизнес-задачи",
      description: "Предлагаем оптимальные решения для ваших бизнес-задач, создавая реальное конкурентное преимущество"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Комплексный подход",
      description: "От анализа задачи до тестирования и сдачи-приемки, включая написание инструкций и поддержку"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Анализ задачи и оценка",
      description: "Вникаем в ваши процессы и оцениваем объем работ и стоимость",
      duration: "2-5 дней"
    },
    {
      step: "02", 
      title: "Техническое задание",
      description: "Переводим ваши цели на язык технического задания",
      duration: "3-7 дней"
    },
    {
      step: "03",
      title: "Разработка",
      description: "Написание кода с использованием современных и безопасных технологий",
      duration: "от 5 дней"
    },
    {
      step: "04",
      title: "Тестирование",
      description: "Тщательная проверка функционала для исключения ошибок и сбоев",
      duration: "1-3 дня"
    },
    {
      step: "05",
      title: "Сдача-приемка и обучение",
      description: "Демонстрация готового решения и обучение сотрудников",
      duration: "1-2 дня"
    },
    {
      step: "06",
      title: "Гарантийная поддержка",
      description: "Гарантия на все работы и поддержка после запуска",
      duration: "по договору"
    }
  ];

  const cases = [
    {
      title: "Финансовая компания",
      challenge: "Потребовался сложный отчет по портфелю, отсутствующий в типовой 1С",
      result: "Отчет разработан, время на его сборку сократилось с 2 дней до 1 минуты",
      industry: "Финансы"
    },
    {
      title: "Производство",
      challenge: "Нужна была уникальная этикетка со сложным штрихкодом",
      result: "Разработана внешняя печатная форма, интегрированная с принтером этикеток",
      industry: "Производство"
    },
    {
      title: "Логистическая компания",
      challenge: "Требовалась доработка для расчета стоимости перевозки по сложным тарифам",
      result: "Расчет автоматизирован, ошибки исключены, скорость работы логистов выросла на 50%",
      industry: "Логистика"
    }
  ];

  const pricing = [
    {
      title: "Простая печатная форма",
      price: "от 5 000 ₽",
      description: "Создание стандартных печатных документов",
      features: [
        "Разработка печатной формы",
        "Тестирование",
        "Инструкция по использованию"
      ]
    },
    {
      title: "Сложный отчет",
      price: "от 25 000 ₽", 
      description: "Аналитические отчеты с графиками и диаграммами",
      features: [
        "Техническое задание",
        "Разработка отчета",
        "Тестирование и отладка",
        "Обучение пользователей"
      ]
    },
    {
      title: "Крупный проект кастомизации",
      price: "от 20 000 ₽",
      description: "Комплексные решения под уникальные процессы",
      features: [
        "Полный анализ требований",
        "Разработка архитектуры",
        "Программирование",
        "Тестирование",
        "Документация",
        "Гарантийная поддержка"
      ],
      popular: true
    }
  ];

  const testimonials = [
    {
      text: "Нам сделали такой отчет для руководителя, о котором мы и мечтать не могли. Вся информация на одном экране!",
      author: "Владелец бизнеса"
    },
    {
      text: "Спасибо, что перенесли наши доработки на расширения. Теперь обновления проходят без проблем.",
      author: "IT-специалист" 
    },
    {
      text: "Заказывали доработку для интеграции со специфическим оборудованием. Сделали все четко по ТЗ. Работает.",
      author: "Главный инженер"
    }
  ];

  const faqs = [
    {
      question: "Доработка не \"сломает\" обновления?",
      answer: "Нет. Мы используем безопасную технологию внешних отчетов и форм (расширения), которая не затрагивает типовую конфигурацию. Ваша 1С остается типовой, и обновления проходят без проблем."
    },
    {
      question: "Как вы гарантируете качество кода?",
      answer: "Мы придерживаемся строгих стандартов кодирования, проводим внутреннее код-ревью и тщательное тестирование всех доработок отдельным специалистом по контролю качества. На все наши работы дается гарантия."
    },
    {
      question: "Сколько времени занимает разработка?",
      answer: "Сроки зависят от сложности задачи. Простая печатная форма может быть сделана за несколько часов, сложный отчет – за несколько дней, крупные модули – за недели или месяцы. Точные сроки обсуждаются после анализа задачи и составления ТЗ."
    },
    {
      question: "Как происходит постановка задачи и приемка?",
      answer: "Вы формулируете бизнес-задачу. Наш бизнес-аналитик переводит ее в техническое задание, которое согласовывается с вами. После разработки и тестирования мы демонстрируем вам готовый функционал для приемки."
    },
    {
      question: "Вы можете доработать чужой код?",
      answer: "Да, мы можем провести аудит и рефакторинг существующего кода, даже если он был написан другими специалистами, чтобы улучшить его качество и стабильность."
    },
    {
      question: "Что такое \"внешний\" отчет и чем он лучше?",
      answer: "Внешний отчет — это отдельный файл, который подключается к 1С, но не является частью основной конфигурации. Это позволяет создавать уникальные отчеты без изменения типовой программы, что облегчает ее обновление и поддержку."
    },
    {
      question: "Вы даете гарантию на свои доработки?",
      answer: "Да, мы предоставляем гарантию на все выполненные нами работы."
    },
    {
      question: "Можете ли вы сделать что-то очень сложное и нестандартное?",
      answer: "Да, мы специализируемся на разработке комплексных и нестандартных решений под уникальные бизнес-процессы, включая интеграции со сложным оборудованием или специфическими системами."
    },
    {
      question: "Как оценивается стоимость доработки?",
      answer: "Стоимость оценивается на основе сложности задачи, требуемых трудозатрат и количества часов работы специалистов. Мы всегда предоставляем прозрачную смету."
    },
    {
      question: "Вы пишете документацию к своим доработкам?",
      answer: "Да, мы подробно описываем все сделанные доработки, чтобы в будущем вы могли легко понимать и поддерживать систему."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Доработка 1С под ваш бизнес: кастомизация и развитие функционала</title>
        <meta name="description" content="Расширим возможности 1С: от уникального отчета до интеграции. Автоматизируем ваши уникальные процессы. Безопасные доработки с гарантией. Рассчитайте стоимость доработки!" />
        <meta name="keywords" content="доработка 1с, программирование 1с, настройка 1с под себя, изменить конфигурацию 1с, создать отчет в 1с, обработка для 1с, кастомизация 1с, разработка 1с цена, индивидуальные доработки 1с, написание модулей 1с, программист 1с, доработка конфигурации 1с, разработка в 1с, услуги программиста 1с цена, разработка отчетов в 1с, доработка печатных форм 1с, создание обработок в 1с, доработка 1с под заказ, стоимость часа работы программиста 1с, внесение изменений в конфигурацию 1с, доработка 1с управление торговлей, доработка 1с бухгалтерия, аутсорсинг разработки 1с, программист 1с удаленно, доработка обмена между базами 1с, исправление ошибок в коде 1с, оптимизация кода 1с, разработка мобильных приложений на платформе 1с, доработка нетиповой конфигурации 1с, техническое задание на доработку 1с, консультация программиста 1с, разработка расширений для 1с, доработка прав доступа в 1с, написание инструкций к доработкам 1с" />
        <meta name="author" content="Валентин Бутюгин, Эксперт и Партнер компании 1S-GURU.RU" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Доработки и развитие 1С (Кастомизация) – 1S-GURU.RU" />
        <meta property="og:description" content="Вашему бизнесу тесно в рамках типовой 1С? Мы расширим ее возможности и создадим функционал, который нужен именно вам." />
        <meta property="og:image" content="https://1s-guru.ru/images/og-image.png" />
        <meta property="og:url" content="https://1s-guru.ru/uslugi/dorabotka-1s/" />
        <meta name="twitter:title" content="Доработки и развитие 1С (Кастомизация) – 1S-GURU.RU" />
        <meta name="twitter:description" content="Вашему бизнесу тесно в рамках типовой 1С? Мы расширим ее возможности и создадим функционал, который нужен именно вам." />
        <link rel="canonical" href="https://1s-guru.ru/uslugi/dorabotka-1s/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
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
                "name": "Доработки и развитие 1С",
                "item": "https://1s-guru.ru/uslugi/dorabotka-1s/"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Доработки и развитие 1С (Кастомизация)",
              "description": "Вашему бизнесу тесно в рамках типовой 1С? Мы расширим ее возможности и создадим функционал, который нужен именно вам: от уникального отчета до интеграции со сложным оборудованием.",
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
                "url": "https://1s-guru.ru/uslugi/dorabotka-1s/"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Стоимость доработок 1С",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Простая печатная форма"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "5000",
                      "priceCurrency": "RUB",
                      "valueAddedTaxIncluded": "False"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Сложный отчет"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "25000",
                      "priceCurrency": "RUB",
                      "valueAddedTaxIncluded": "False"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Крупный проект по кастомизации"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceMin": "20000",
                      "priceMax": "1000000",
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
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
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
              <BreadcrumbPage>Доработки и развитие 1С</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="relative bg-gradient-to-br from-background via-secondary/30 to-primary/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
              Доработки и развитие 1С: Адаптация системы под уникальные задачи вашего бизнеса
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Типовой функционал 1С не всегда полностью соответствует уникальным процессам вашего бизнеса? 
              Вы сталкиваетесь с ограничениями, которые замедляют работу и мешают развитию? 
              Доработки и развитие 1С — это возможность настроить программу под ваши специфические требования, 
              создав функционал, который нужен именно вам: от уникального отчета до интеграции со сложным оборудованием. 
              <span className="font-semibold text-foreground">Мы поможем вашей 1С работать по правилам вашего бизнеса, а не наоборот.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="group shadow-large hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://t.me/mgm5500', '_blank')}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Рассчитать стоимость доработки
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:bg-primary/5 hover:shadow-hover transition-all duration-300"
                onClick={() => window.open('https://t.me/mgm5500', '_blank')}
              >
                Получить консультацию
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Создадим функционал, который нужен именно вам</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Что такое доработки 1С и кому это подходит?</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Доработки и кастомизация 1С — это расширение стандартных возможностей программы под индивидуальные потребности вашей компании. 
              Это может быть создание новых отчетов, изменение печатных форм, автоматизация уникальных бизнес-процессов, интеграция с нестандартным оборудованием или другими информационными системами.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Для кого подходит:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Компаний с уникальными бизнес-процессами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Бизнеса с количеством сотрудников от 10 до 1000 человек</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Производственных, крупных торговых и сервисных предприятий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Зрелого бизнеса, который хочет автоматизировать конкурентные преимущества</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Мы помогаем тем, кто:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Устал от ручных операций</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Не может получить нужные отчеты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Сталкивается с высокими трудозатратами на рутину</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ищет способ повысить эффективность работы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Чем наше предложение по доработке 1С превосходит конкурентов?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Мы предлагаем не просто написание кода, а комплексное решение ваших бизнес-задач с гарантией качества и безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Как мы помогаем в развитии вашей 1С-системы?</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Мы понимаем, что типовой функционал не всегда достаточен для растущего бизнеса. Наши решения позволяют адаптировать 1С под самые специфические потребности
            </p>
            
            <div className="grid gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Задача: Типовая 1С не подходит для уникальных бизнес-процессов</h3>
                      <p className="text-muted-foreground">
                        <strong>Наше решение:</strong> Мы расширим возможности вашей 1С и создадим функционал, который нужен именно вам, автоматизируя уникальные процессы, что даст вам реальное конкурентное преимущество.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Задача: Нужен специфический отчет, которого нет в программе</h3>
                      <p className="text-muted-foreground">
                        <strong>Наше решение:</strong> Разрабатываем любой аналитический отчет с графиками и диаграммами, который формируется в 2 клика.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Задача: Ручные операции отнимают много времени и сил</h3>
                      <p className="text-muted-foreground">
                        <strong>Наше решение:</strong> Создаем обработки и механизмы, которые автоматизируют рутинные операции и сокращают трудозатраты.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Задача: Невозможно получить нужные данные или контролировать эффективность</h3>
                      <p className="text-muted-foreground">
                        <strong>Наше решение:</strong> Разрабатываем специализированные отчеты и инструменты анализа, которые дают вам полную картину бизнеса.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-2 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Задача: Программа работает медленно из-за старых доработок</h3>
                      <p className="text-muted-foreground">
                        <strong>Наше решение:</strong> Проводим аудит и рефакторинг существующего кода, оптимизируем работу системы и исправляем ошибки, сделанные прошлыми программистами.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Как происходит наша работа по доработке и развитию 1С?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Наша работа строится на четких этапах, обеспечивающих качество и предсказуемость результата
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary transform -translate-y-1/2 opacity-20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary border-4 border-primary/20 rounded-full text-2xl font-bold text-primary-foreground mx-auto mb-6 lg:mb-8 relative z-10">
                    {step.step}
                  </div>
                  
                  <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm h-80 flex flex-col">
                    <CardHeader className="pb-4 text-center">
                      <CardTitle className="text-lg font-semibold text-foreground leading-tight mb-3">
                        {step.title}
                      </CardTitle>
                      <Badge variant="outline">{step.duration}</Badge>
                    </CardHeader>
                    
                    <CardContent className="text-center flex-grow p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="group shadow-large hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://t.me/mgm5500', '_blank')}
            >
              Заказать консультацию
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Мы — аккредитованная IT-компания TEAM500 с многолетним опытом
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Сильная команда экспертов</h3>
                    <p className="text-sm text-muted-foreground">Бизнес-аналитики, архитекторы, проектные менеджеры, разработчики и специалисты по контролю качества</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Качество кода по стандартам 1С</h3>
                    <p className="text-sm text-muted-foreground">Сертифицированные специалисты "1С:Специалист" и "1С:Эксперт по технологическим вопросам"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Безопасные технологии</h3>
                    <p className="text-sm text-muted-foreground">Используем расширения, которые не ломают обновления типовой 1С</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Гарантия на выполненные работы</h3>
                    <p className="text-sm text-muted-foreground">Даем гарантию на свой код</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Прозрачность и контроль</h3>
                    <p className="text-sm text-muted-foreground">Регулярные отчеты и постоянная связь с персональным менеджером</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Прямая экономия</h3>
                    <p className="text-sm text-muted-foreground">Ставка от 1950 ₽ за час + налоговые льготы как у аккредитованной IT-компании</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">20+ лет опыта на рынке</h3>
                    <p className="text-sm text-muted-foreground">Реализовали более 500 проектов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Стоимость доработок и развития 1С
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Стоимость доработок зависит от их сложности и объема
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-1">
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Примеры успешных доработок 1С
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Наши кейсы демонстрируют широкий спектр возможностей по кастомизации 1С
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{caseStudy.industry}</Badge>
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Проблема:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Результат:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Отзывы наших клиентов о доработках 1С</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Мы гордимся тем, что наши доработки приносят реальную пользу бизнесу клиентов
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="italic mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Часто задаваемые вопросы о доработках 1С</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Мы собрали самые популярные вопросы, чтобы вы могли получить полную информацию
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Технические характеристики и описание наших доработок 1С</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Мы работаем на платформе 1С:Предприятие 8.3 и используем передовые технологии
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Технологии</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Расширения конфигураций</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Внешние отчеты и обработки (.erf, .epf)</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">СКД</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">HTTP-сервисы</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Поддержка и совместимость</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Работаем со всеми типовыми и нетиповыми конфигурациями 1С</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Гарантия совместимости с будущими обновлениями</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Не препятствуем переходу на новые версии 1С</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Мнение основателя компании – Валентина Бутюгина</h2>
            <blockquote className="text-xl italic text-muted-foreground mb-8">
              «Типовая 1С — это костюм из магазина. Наши доработки — это индивидуальный пошив у хорошего портного. 
              Мы "подгоняем" систему так, чтобы она сидела на вашем бизнесе идеально».
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Что говорят эксперты рынка?</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <p className="italic mb-4">
                    "Типовой софт — это хорошо, но конкурентное преимущество создают уникальные бизнес-процессы. 
                    Автоматизация этих процессов — ключ к отрыву от конкурентов."
                  </p>
                  <p className="font-semibold">— Евгений Щепин, "ВкусВилл"</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="italic mb-4">
                    "Главное правило доработок — не 'сломать' обновления. Использование современных технологий, 
                    таких как расширения в 1С, является обязательным требованием."
                  </p>
                  <p className="font-semibold">— Сергей Нуралиев, "1С"</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="italic mb-4">
                    "Ценность доработки определяется не сложностью кода, а тем, какую бизнес-проблему она решает 
                    и какой экономический эффект приносит."
                  </p>
                  <p className="font-semibold">— Портал "Инфостарт"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/20 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Развивайте вашу 1С и получайте конкурентные преимущества!
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Не ограничивайте свой бизнес стандартными возможностями. Мы готовы помочь вам реализовать любые идеи и автоматизировать самые сложные процессы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-primary/10 border-2 border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Download className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-4 leading-tight">
                  Гайд для вас
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg p-6 border border-primary/10">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Получите "Гайд: Как правильно написать ТЗ на доработку 1С, чтобы получить то, что вы хотите". 
                    Этот документ поможет вам четко сформулировать свои требования и избежать недопонимания с разработчиками.
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="group shadow-large hover:shadow-xl transition-all duration-300 w-full"
                  onClick={() => window.open('https://t.me/mgm5500', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Получить гайд бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-primary/10 border-2 border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-4 leading-tight">
                  Специальное предложение
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-6">
                <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg p-6 border border-primary/10">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Закажите "Аудит и рефакторинг одной вашей старой доработки за 14 900 руб.". 
                    Мы проанализируем существующий код, выявим узкие места, предложим решения по оптимизации и улучшению, 
                    сохранив возможность обновлений.
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="group shadow-large hover:shadow-xl transition-all duration-300 w-full"
                  onClick={() => window.open('https://t.me/mgm5500', '_blank')}
                >
                  <Code className="mr-2 h-5 w-5" />
                  Заказать аудит
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Начните сейчас:</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => window.open('https://t.me/mgm5500', '_blank')}
              >
                Рассчитать стоимость доработки
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://t.me/mgm5500', '_blank')}
              >
                Получить консультацию архитектора 1С-систем
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://t.me/mgm5500', '_blank')}
              >
                Закажить техническое задание
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Свяжитесь с нами напрямую через Telegram: @mgm5500
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dorabotka1S;