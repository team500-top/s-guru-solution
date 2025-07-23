import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Award, 
  Target, 
  TrendingUp, 
  Shield, 
  Lightbulb, 
  Users 
} from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: "20+ лет опыта",
      description: "Реализовали более 500 проектов для российских и международных компаний. Мы знаем, как решить вашу задачу от начала до конца."
    },
    {
      icon: Target,
      title: "Технологическая глубина",
      description: "Сильная экспертиза в платформе 1С и интеграции с внешними системами любой сложности."
    },
    {
      icon: TrendingUp,
      title: "Ориентир на результат",
      description: "Проектируем решения под конкретные KPI и бизнес-цели, превращая 1С в инструмент для роста прибыли."
    },
    {
      icon: Shield,
      title: "Прозрачность и контроль",
      description: "Понятные процессы, открытая коммуникация, регулярная отчетность по этапам проекта."
    },
    {
      icon: Lightbulb,
      title: "Комплексные и нестандартные решения",
      description: "Мы берем на себя всю техническую сложность, предлагая оптимальные решения, а не просто кодирование."
    },
    {
      icon: Users,
      title: "Надежная команда экспертов",
      description: "За каждым проектом стоит команда из 25+ аттестованных специалистов, а не один 'универсальный солдат'."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Почему работать с нами — это прямо выгодно?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8 text-primary" />
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
  );
};

export default Advantages;