import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Внедрение 1С:Бухгалтерия",
      description: "Настроим учет, сдадим отчетность без ошибок"
    },
    {
      icon: HeadphonesIcon,
      title: "Абонентское сопровождение 1С",
      description: "Ваша 1С стабильна 24/7, без сбоев и головной боли"
    },
    {
      icon: ShoppingCart,
      title: "Внедрение 1С:Управление торговлей",
      description: "Полный контроль продаж, склада и закупок"
    },
    {
      icon: Users,
      title: "Внедрение 1С:Зарплата и управление персоналом",
      description: "Точный расчет зарплаты и кадровый учет без штрафов"
    },
    {
      icon: Settings,
      title: "Доработки и развитие 1С (Кастомизация)",
      description: "Адаптируем 1С под уникальные процессы вашего бизнеса"
    },
    {
      icon: Building2,
      title: "Внедрение 1С:ERP Управление предприятием",
      description: "Масштабная автоматизация для крупных компаний"
    },
    {
      icon: Zap,
      title: "Интеграция 1С с внешними системами",
      description: "Объединим 1С с сайтом, CRM и другими сервисами"
    },
    {
      icon: Briefcase,
      title: "Внедрение 1С:УНФ (Управление нашей фирмой)",
      description: "Вся компания в одной программе для малого бизнеса"
    },
    {
      icon: Store,
      title: "Внедрение 1С:Розница",
      description: "Эффективная автоматизация вашего магазина 'под ключ'"
    },
    {
      icon: Layers,
      title: "Внедрение 1С:Комплексная автоматизация",
      description: "Заменим 'зоопарк' программ на единую систему"
    },
    {
      icon: FileText,
      title: "Внедрение 1С:Документооборот",
      description: "Цифровой порядок и быстрое согласование документов"
    },
    {
      icon: RefreshCw,
      title: "Переход с 1С 7.7 на 1С 8.3",
      description: "Безболезненная миграция на новую, более мощную платформу"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Комплексные решения для вашего бизнеса на 1С
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Мы предлагаем полный спектр услуг по 1С, от внедрения до индивидуальных доработок и интеграций, 
            чтобы ваша система работала как единый механизм, а вы могли сосредоточиться на развитии.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-0 shadow-soft bg-background/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group hover:bg-primary/5 transition-all duration-300">
            Все услуги
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;