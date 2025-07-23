import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, MessageCircle, Users, AlertTriangle, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const LeadMagnet = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const materials = [
    {
      icon: Users,
      title: "Гайд: \"10 признаков того, что вам пора переходить на единую систему управления\"",
      headline: "Ваш бизнес растет, а учет — нет? Узнайте 10 главных признаков, что вам пора переходить на единую систему управления (и почему это не ERP)",
      description: "Вы чувствуете, что ваш бизнес перерос Excel-таблицы и 'зоопарк' разрозненных программ? Постоянные сверки, двойной ввод данных и отсутствие единой картины отнимают время и прибыль? Наш гайд поможет вам определить, когда наступает критический момент для перехода на комплексную автоматизацию. Вы узнаете, как объединить торговлю, склад, производство, финансы и кадры в одной мощной системе, чтобы получить полный контроль, сократить издержки и обеспечить прозрачную управленческую отчетность для принятия верных решений."
    },
    {
      icon: AlertTriangle,
      title: "Чек-лист: \"10 признаков, что ваш бизнес теряет деньги из-за отсутствия интеграции\"",
      headline: "Невидимые утечки прибыли: Чек-лист '10 признаков, что ваш бизнес теряет деньги из-за отсутствия интеграции между системами'",
      description: "Ваши менеджеры вручную переносят заказы с сайта в 1С? Остатки на складе не совпадают с данными в CRM? Время — деньги, а ручной труд и информационные разрывы — это прямые потери. Этот чек-лист поможет вам выявить, где именно ваш бизнес теряет деньги из-за отсутствия автоматического обмена данными между 1С, сайтом, CRM и другими системами. Получите инструмент для самодиагностики, который укажет на 'узкие места' и покажет, как автоматическая интеграция может устранить ошибки, ускорить работу в 5 раз и значительно увеличить вашу прибыль."
    },
    {
      icon: Search,
      title: "Чек-лист: \"15 пунктов для аудита вашей системы 1С своими силами\"",
      headline: "Здоровье вашей 1С: Чек-лист '15 ключевых пунктов для самостоятельного аудита вашей системы 1С и выявления скрытых проблем'",
      description: "Ваша 1С работает медленно? Периодически 'виснет' или выдает странные ошибки? Вы не уверены в актуальности своих обновлений или безопасности данных? Этот практический чек-лист позволит вам провести экспресс-аудит вашей системы 1С собственными силами. Вы сможете выявить потенциальные проблемы с производительностью, безопасностью, корректностью настроек и целостностью данных, которые могут привести к серьезным сбоям и финансовым потерям."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % materials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + materials.length) % materials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Полезные материалы для вашего бизнеса
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Получите эксклюзивные чек-листы и гайды, которые помогут вам оптимизировать работу с 1С 
            и избежать распространенных ошибок.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {materials.map((material, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm mx-4">
                    <CardHeader className="text-center pb-6">
                      <div className="w-20 h-20 bg-primary/10 border-2 border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <material.icon className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground mb-4 leading-tight">
                        {material.headline}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center space-y-6">
                      <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg p-6 border border-primary/10">
                        <h3 className="font-semibold text-foreground mb-3">Ценность материала:</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {material.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 justify-center items-center">
                        <Button 
                          size="lg" 
                          className="group shadow-large hover:shadow-xl transition-all duration-300 w-full"
                          onClick={() => window.open('https://t.me/mgm5500', '_blank')}
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Получить материал бесплатно
                        </Button>
                        
                        <div className="flex items-center text-muted-foreground">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span className="text-sm">Переход в Telegram</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        Материал будет доступен сразу после перехода в наш Telegram-канал
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/90 hover:bg-background border border-primary/20 rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/90 hover:bg-background border border-primary/20 rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {materials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary shadow-large' 
                    : 'bg-primary/30 hover:bg-primary/50 hover:shadow-medium'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-8 border border-primary/20 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Скачайте материалы и постройте прочный фундамент для роста вашего бизнеса!
            </h3>
            <p className="text-lg text-muted-foreground">
              Возьмите контроль над вашей 1С и проверьте 'здоровье' вашей системы уже сегодня!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;