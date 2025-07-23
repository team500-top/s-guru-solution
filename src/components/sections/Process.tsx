import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Users, 
  ClipboardList, 
  Shield, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Вы ставите бизнес-задачу — мы предлагаем решение",
      description: "Наш бизнес-аналитик вникает в ваши процессы и переводит цели на язык технического задания. Мы говорим на языке бизнеса."
    },
    {
      number: "02",
      icon: Users,
      title: "Над задачей работает команда экспертов",
      description: "Вместо одного специалиста — слаженная команда: аналитики, архитекторы, менеджеры, разработчики, тестировщики."
    },
    {
      number: "03",
      icon: ClipboardList,
      title: "Процесс работы — прозрачный и управляемый",
      description: "Регулярные отчеты, четкие планы, постоянная связь с персональным менеджером. Вы всегда в курсе."
    },
    {
      number: "04",
      icon: Shield,
      title: "Качество и безопасность — наш стандарт",
      description: "Тщательная проверка, современные технологии разработки, соглашение о конфиденциальности."
    },
    {
      number: "05",
      icon: CheckCircle,
      title: "Готовое решение с поддержкой",
      description: "Подробная документация, обучение сотрудников, гарантия и сопровождение после запуска."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Понятный процесс,
            </span>
            <br />
            <span className="text-foreground">предсказуемый результат</span>
          </h2>
        </div>

        <div className="relative">
          {/* Process line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary transform -translate-y-1/2 opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full text-2xl font-bold text-primary-foreground mx-auto mb-6 lg:mb-8 relative z-10">
                  {step.number}
                </div>
                
                <Card className="hover:shadow-large transition-all duration-300 hover:scale-105 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
                  <CardHeader className="pb-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="group shadow-large hover:shadow-xl transition-all duration-300">
            Заказать консультацию
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;