import { Helmet } from "react-helmet-async";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Users, Headphones, TrendingUp } from "lucide-react";

const AbonentskoeSoprovozhdenie1S = () => {
  return (
    <>
      <Helmet>
        <title>Абонентское сопровождение 1С в Москве: стабильность и поддержка 24/7</title>
        <meta name="description" content="Полное абонентское сопровождение 1С: обновление, консультации, решение проблем. Ваша 1С будет работать стабильно, а вы сосредоточитесь на бизнесе. Закажите бесплатный аудит 1С!" />
        <meta name="keywords" content="абонентское сопровождение 1с, обслуживание 1с по договору, поддержка 1с ежемесячно, сколько стоит сопровождение 1с, итс сопровождение 1с, договор на 1с обслуживание, постоянная поддержка 1с, регулярное обслуживание 1с, сопровождение 1с цена" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Валентин Бутюгин, Эксперт и Партнер компании 1S-GURU.RU" />
        <meta name="mailru-domain" content="TIcBPRrUMEwywRfN" />
        <meta property="og:title" content="Абонентское сопровождение 1С – 1S-GURU.RU" />
        <meta property="og:description" content="Обеспечьте стабильную работу вашей 1С с экспертной поддержкой от 1S-GURU.RU. Проактивный мониторинг, оперативное решение проблем, гарантия SLA." />
        <meta name="twitter:title" content="Абонентское сопровождение 1С – 1S-GURU.RU" />
        <meta name="twitter:description" content="Обеспечьте стабильную работу вашей 1С с экспертной поддержкой от 1S-GURU.RU. Проактивный мониторинг, оперативное решение проблем, гарантия SLA." />
        
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
                "name": "Абонентское сопровождение 1С",
                "item": "https://1s-guru.ru/uslugi/abonentskoe-soprovozhdenie-1s/"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify([
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
          ])}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
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
              <BreadcrumbPage>Абонентское сопровождение 1С</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Абонентское сопровождение 1С: Ваша система работает стабильно, вы — сфокусированы на бизнесе
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Вы устали от того, что 1С «ломается в самый неподходящий момент», а решение проблем отнимает время и нервы? 
              Хотите быть уверены в актуальности отчетности и доступности специалистов? Абонентское сопровождение 1С — 
              это не просто реагирование на сбои, это проактивный подход, который обеспечит стабильность вашей системы 
              и позволит вам сосредоточиться на главном: развитии вашего бизнеса.
            </p>
          </div>
        </section>

        {/* What is Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Что такое абонентское сопровождение 1С и для кого это?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg mb-6">
                Абонентское сопровождение 1С — это комплексная услуга, при которой за вашей компанией закрепляется команда экспертов, 
                готовая решать любые вопросы по 1С, обновлять систему и консультировать пользователей на регулярной основе. 
                Мы обеспечиваем стабильную и бесперебойную работу вашей 1С, предотвращая проблемы до их возникновения.
              </p>
              <p className="text-lg">
                Мы помогаем тем, кто страдает от неактуальных данных, ошибок в учете, сбоев системы, незапланированных расходов 
                на поддержку и рисков штрафов из-за старых версий.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Любой компании, использующей 1С, со штатом от 5 до 500 сотрудников</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Бизнеса с годовой выручкой от 10 млн до 1 млрд руб</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Компаний, для которых стабильная работа 1С критически важна</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Всех отраслей, где используется 1С</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Better */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Почему наше абонентское сопровождение 1С лучше офферов конкурентов?</h2>
          <p className="text-xl mb-8">Мы предлагаем больше, чем просто "ремонт по вызову". Мы ваш личный IT-отдел по 1С.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Проактивный мониторинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">За вашей компанией закрепляется команда экспертов, которая знает вашу систему изнутри</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Гарантированный SLA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Мы закрепляем за вашей компанией команду экспертов с гарантированным временем реагирования</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Команда экспертов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Доступ к компетенциям 5-10 экспертов дешевле штатного специалиста</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Стабильность 90%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Предотвращаем до 90% сбоев благодаря регулярному техобслуживанию</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ваши задачи — наши решения: как мы обеспечиваем стабильность 1С</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Задача: "1С ломается в самый неподходящий момент"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  <strong>Наше решение:</strong> Проводим регулярное техобслуживание и проактивный мониторинг, предотвращая 90% сбоев. 
                  Ваша система будет работать стабильно, а вы сможете сосредоточиться на бизнесе.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Задача: "Неактуальные данные, ошибки в учете"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  <strong>Наше решение:</strong> Обеспечиваем своевременные обновления системы, консультации и исправление ошибок, 
                  гарантируя актуальность и точность ваших данных.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Задача: "Отсутствие ответов на вопросы, сбои системы"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  <strong>Наше решение:</strong> Закрепляем за вами персонального консультанта и команду экспертов, 
                  которые оперативно ответят на любые вопросы и решат возникающие проблемы.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Задача: "Незапланированные расходы на поддержку"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  <strong>Наше решение:</strong> Предлагаем предсказуемые тарифы и регулярные обновления, 
                  чтобы избежать дорогостоящих аварий и штрафов.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Задача: "Отсутствие собственного айтишника"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  <strong>Наше решение:</strong> Наша команда заменяет собой целый IT-отдел по 1С, 
                  предоставляя квалифицированную помощь и поддержку.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Как происходит абонентское сопровождение 1С?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">1-3 дня</Badge>
                <CardTitle>Бесплатный аудит</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Экспресс-оценка вашей системы 1С, выявление потенциальных проблем и точек роста</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">1 день</Badge>
                <CardTitle>Подбор тарифа и SLA</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Предложим оптимальный тариф и зафиксируем гарантированные сроки реакции</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">1-2 дня</Badge>
                <CardTitle>Настройка взаимодействия</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Организуем удобные каналы связи и удаленный доступ для оперативного решения задач</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Ежедневная работа:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <strong>Проактивный мониторинг:</strong> С помощью специализированных систем (Zabbix) 
                  мы круглосуточно отслеживаем состояние вашей 1С, предотвращая сбои до их возникновения
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <strong>Решение текущих вопросов:</strong> Консультации пользователей, исправление ошибок, настройка отчетов
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <strong>Регулярные обновления:</strong> Своевременно устанавливаем актуальные версии 
                  конфигураций 1С в соответствии с изменениями законодательства
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <strong>Развитие системы:</strong> По запросу проводим доработки и развитие функционала 
                  в рамках оговоренного бюджета
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Стоимость абонентского сопровождения 1С</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Тариф "Старт"</CardTitle>
                <CardDescription>Для малого бизнеса и стабильных систем</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">от 15 000 ₽<span className="text-lg font-normal">/мес</span></div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Консультации</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Обновления</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Решение небольших проблем</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Популярный</Badge>
                <CardTitle>Тариф "Развитие"</CardTitle>
                <CardDescription>Несгораемый аванс</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">Гибкая оплата</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Деньги не сгорают</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Расходуются по потребности</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">От доработок до консультаций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Индивидуальный</CardTitle>
                <CardDescription>Для крупных компаний</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">По запросу</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Сложные конфигурации</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Индивидуальный расчет</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">После аудита</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Часто задаваемые вопросы об абонентском сопровождении 1С</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что входит в абонентскую плату?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>В абонентскую плату входит проактивный мониторинг, консультации пользователей, оперативное решение текущих проблем, 
                регулярные обновления типовых и нетиповых конфигураций, а также поддержка сервисов 1С (1С-Отчетность, 1С:Контрагент, 1С-ЭДО).</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как быстро вы реагируете на заявку?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Мы гарантируем реакцию согласно SLA (Service Level Agreement), прописанному в вашем договоре. 
                Как правило, инциденты решаются в течение 1-2 часов.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что если мне не хватит часов в тарифе?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Если у вас тариф с фиксированным объемом часов, мы заранее предупредим о приближении лимита. 
                В рамках тарифа "Развитие" часы не сгорают, и вы всегда можете пополнить аванс.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Вы обновляете нетиповые конфигурации?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Да, мы специализируемся на обновлении доработанных конфигураций, используя безопасные технологии (расширения), 
                которые не ломают обновления.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Чем вы лучше штатного специалиста?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Наша команда обходится дешевле, при этом вы получаете доступ к компетенциям 5-10 экспертов. 
                Мы не болеем, не уходим в отпуск и гарантируем результат по договору.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Готовы забыть о проблемах с 1С?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Обеспечьте стабильную и бесперебойную работу вашей 1С уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Подобрать тариф на сопровождение
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Заказать бесплатный аудит 1С
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">
                Вы можете связаться с нами напрямую через Telegram:
              </p>
              <a href="https://t.me/mgm5500" className="text-primary hover:underline font-semibold">
                @mgm5500
              </a>
            </div>
          </div>
        </section>

        {/* Expert Opinion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Мнение основателя компании – Валентина Бутюгина</h2>
          <Card>
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-center">
                "1С — это живой организм, требующий заботы. Наше сопровождение — это как сервисное обслуживание для хорошего автомобиля. 
                Мы проводим диагностику, чтобы вы могли уверенно ехать к своим целям."
              </blockquote>
              <p className="text-center mt-4 font-semibold">— Валентин Бутюгин, основатель 1S-GURU.RU</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default AbonentskoeSoprovozhdenie1S;