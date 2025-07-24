import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  HeadphonesIcon, 
  ShoppingCart, 
  Users, 
  Settings, 
  Building2, 
  Zap, 
  Briefcase, 
  Store, 
  Layers, 
  FileText, 
  RefreshCw,
  Target,
  Globe,
  Shield,
  Cloud,
  Server,
  BarChart3,
  MessageCircle
} from "lucide-react";

const Uslugi = () => {
  const mainServices = [
    {
      icon: Calculator,
      title: "Внедрение 1С:Бухгалтерия",
      description: "Полное внедрение и настройка 1С:Бухгалтерия под ваши потребности. Автоматизация бухгалтерского учета, налогового планирования и формирования отчетности.",
      features: [
        "Настройка учетной политики",
        "Перенос данных из других систем", 
        "Обучение сотрудников",
        "Настройка отчетности"
      ],
      popular: true
    },
    {
      icon: HeadphonesIcon,
      title: "Абонентское сопровождение 1С",
      description: "Постоянная техническая поддержка ваших 1С-систем. Консультации, обновления, решение проблем и оптимизация работы.",
      features: [
        "Круглосуточная поддержка",
        "Регулярные обновления",
        "Консультации специалистов", 
        "Резервное копирование"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Внедрение 1С:Управление торговлей",
      description: "Автоматизация торговых процессов, учета товаров, управления складом и взаимоотношений с клиентами и поставщиками.",
      features: [
        "Учет товарных операций",
        "Управление складом",
        "Работа с поставщиками",
        "Анализ продаж"
      ]
    },
    {
      icon: Users,
      title: "Внедрение 1С:Зарплата и управление персоналом",
      description: "Автоматизация кадрового учета и расчета заработной платы. Ведение кадровых документов и планирование персонала.",
      features: [
        "Расчет заработной платы",
        "Кадровый документооборот",
        "Табельный учет",
        "Отчетность в ПФР и ФСС"
      ]
    },
    {
      icon: Settings,
      title: "Доработки и развитие 1С",
      description: "Индивидуальные доработки конфигураций 1С под специфические потребности вашего бизнеса. Программирование и кастомизация.",
      features: [
        "Создание новых отчетов",
        "Разработка обработок",
        "Модификация документов", 
        "Интеграция с оборудованием"
      ],
      popular: true
    },
    {
      icon: Building2,
      title: "Внедрение 1С:ERP Управление предприятием",
      description: "Комплексная автоматизация крупных предприятий. Управление всеми бизнес-процессами в единой информационной системе.",
      features: [
        "Управление производством",
        "Бюджетирование",
        "Консолидированная отчетность",
        "Многовалютный учет"
      ]
    },
    {
      icon: Zap,
      title: "Интеграция 1С с внешними системами",
      description: "Подключение 1С к сайтам, CRM-системам, банкам, маркетплейсам и другим внешним сервисам для автоматизации обмена данными.",
      features: [
        "Интеграция с сайтом",
        "Подключение к банкам",
        "Обмен с маркетплейсами",
        "Синхронизация с CRM"
      ],
      popular: true
    },
    {
      icon: Briefcase,
      title: "Внедрение 1С:УНФ",
      description: "Простое и эффективное решение для малого бизнеса. Автоматизация базовых процессов учета и управления небольшой компанией.",
      features: [
        "Простой интерфейс",
        "Базовый функционал",
        "Быстрое внедрение",
        "Доступная цена"
      ]
    }
  ];

  const additionalServices = [
    { icon: Store, title: "Внедрение 1С:Розница", description: "Автоматизация розничной торговли" },
    { icon: Layers, title: "Внедрение 1С:Комплексная автоматизация", description: "Единая система учета для среднего бизнеса" },
    { icon: FileText, title: "Внедрение 1С:Документооборот", description: "Электронный документооборот" },
    { icon: RefreshCw, title: "Переход с 1С 7.7 на 1С 8.3", description: "Миграция и обновление систем" },
    { icon: Target, title: "Отраслевые решения 1С", description: "Специализированные решения для различных отраслей" },
    { icon: Globe, title: "Удаленное сопровождение 1С", description: "Техподдержка и обслуживание онлайн" },
    { icon: BarChart3, title: "Аудит и оптимизация 1С", description: "Диагностика и ускорение работы системы" },
    { icon: Shield, title: "Настройка ЭДО в 1С", description: "Электронный документооборот с контрагентами" },
    { icon: Settings, title: "Настройка маркировки и ЕГАИС", description: "Работа с маркированными товарами и алкоголем" },
    { icon: Cloud, title: "1С в облаке", description: "Аренда и размещение 1С на удаленных серверах" },
    { icon: Server, title: "Администрирование серверов 1С", description: "Настройка и обслуживание серверной инфраструктуры" },
    { icon: RefreshCw, title: "Обновление нетиповых конфигураций", description: "Обновление доработанных систем 1С" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Услуги
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Полный спектр услуг по внедрению, настройке и сопровождению систем 1С для вашего бизнеса
          </p>
        </div>

        {/* Основные услуги */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-foreground">
            Основные услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm relative">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground z-10">
                    Популярная
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Подробнее об услуге
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-foreground">
            Дополнительные услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Консультация */}
        <div className="text-center bg-secondary/30 rounded-2xl p-8 border border-border/50">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-foreground">Нужна консультация?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Напишите нам в удобном мессенджере, и мы быстро ответим на ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-w-[200px]">
              <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                Написать в Telegram
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px]">
              <a href="https://wa.me/your_whatsapp" target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uslugi;