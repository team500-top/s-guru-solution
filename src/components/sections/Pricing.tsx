import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Zap, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      icon: CheckCircle,
      name: "Поддержка",
      target: "Малый бизнес и стабильные системы",
      description: "Консультации, обновления, решение небольших технических проблем. Ваша 1С работает как часы.",
      price: "От 15 000 руб./мес.",
      badge: "Идеально для типовых решений",
      buttonText: "Подробнее о тарифе",
      link: "/uslugi/abonentskoe-soprovozhdenie"
    },
    {
      icon: TrendingUp,
      name: "Развитие",
      target: "Бизнес, который хочет постоянно развивать свою систему",
      description: "Аванс на личный счет, не сгорает в конце месяца. Расходуется на доработки, консультации, развитие функционала.",
      price: "От 1950 руб./час",
      badge: "Самый популярный",
      popular: true,
      buttonText: "Рассчитать стоимость доработок",
      link: "/uslugi/dorabotki-i-razvitie"
    },
    {
      icon: Building,
      name: "Проект",
      target: "Крупные внедрения и масштабные изменения",
      description: "Полноценный проект с фиксированными сроками и бюджетом: внедрение с нуля, переход на новую систему, сложная автоматизация 'под ключ'.",
      price: "От 150 000 руб.",
      badge: "Для комплексных решений",
      buttonText: "Обсудить проект",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Честное ценообразование: прозрачно и выгодно
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Мы предлагаем гибкие форматы сотрудничества, которые значительно выгоднее, чем у конкурентов, 
            и позволяют вам получить доступ к команде из 25+ специалистов вместо одного.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-large transition-all duration-300 hover:scale-105 border-0 shadow-medium bg-background/90 backdrop-blur-sm ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-1">
                    Популярный выбор
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4">
                  <plan.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <Badge variant="secondary" className="w-fit mb-4">
                  {plan.badge}
                </Badge>
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <CardDescription className="text-sm font-medium text-muted-foreground mb-4">
                  <strong>Для кого:</strong> {plan.target}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Что входит:</strong> {plan.description}
                </p>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                Экономия на налогах
              </h3>
              <p className="text-muted-foreground">
                Мы — аккредитованная IT-компания. Работая с нами, вы можете получить налоговые льготы и снизить свои издержки.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                Оптимизация каждого проекта
              </h3>
              <p className="text-muted-foreground">
                Используем ЭДО и другие инструменты для снижения наших издержек, а значит, и вашей итоговой стоимости.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;