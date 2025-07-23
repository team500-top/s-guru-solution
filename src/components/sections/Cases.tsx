import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Factory, ShoppingCart, Globe, Building2 } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      icon: Factory,
      company: "ООО \"ПромДвигатель\"",
      representative: "Елена Тихонова, Начальник отдела кадров",
      title: "Производственная компания: Автоматизация расчета зарплаты и кадрового учета",
      problem: "Крупная производственная компания \"ПромДвигатель\" столкнулась со значительными трудностями в расчете сдельно-премиальной зарплаты, который велся вручную в Excel. Это приводило к постоянным ошибкам, задержкам и высокому уровню трудозатрат со стороны бухгалтерии и отдела кадров.",
      solution: "Мы внедрили 1С:Зарплата и управление персоналом (1С:ЗУП). Проведена детальная настройка системы под сложные схемы сдельной оплаты и премирования, а также под различные графики работы. Была автоматизирована подготовка отчетности в СФР (ПФР, ФСС). Также настроены личные кабинеты для рабочих.",
      result: "Расчет зарплаты был полностью автоматизирован, сократив время с недели до одного дня. Количество ошибок в расчетах и отчетности снизилось до минимума, что защитило компанию от возможных штрафов трудовой инспекции и СФР.",
      testimonial: "С нашими сложными графиками и сделкой оплатой труда только вы смогли разобраться. Зарплата теперь считается идеально! Мы забыли о стрессе в расчетный период. А личные кабинеты для рабочих – это просто находка, они реально повысили их удовлетворенность."
    },
    {
      icon: ShoppingCart,
      company: "ООО \"Авто-Лига\"",
      representative: "Сергей Никитин, Руководитель отдела продаж",
      title: "Дистрибьютор автозапчастей: Оптимизация продаж, цен и складского учета",
      problem: "Компания \"Авто-Лига\", занимающаяся дистрибуцией автозапчастей, страдала от хаоса в ценообразовании и скидках, что приводило к некорректным расчетам прибыли и недовольству клиентов. Менеджеры тратили много времени на ручное формирование заказов.",
      solution: "Мы внедрили 1С:Управление торговлей (1С:УТ). В рамках проекта была настроена комплексная система ценообразования, включая автоматический расчет скидок и условий продаж. Развернут блок CRM и воронка продаж для систематизации работы с клиентами.",
      result: "Ошибки в ценах были полностью исключены. Время от получения заявки до выставления счета сократилось с 30 до 5 минут, значительно ускорив обработку заказов и повысив удовлетворенность клиентов. Выручка увеличилась на 15%.",
      testimonial: "Наш склад перестал быть 'черной дырой' – теперь полный контроль и порядок! Но главное, что отдельное спасибо за настройку CRM – наш отдел продаж стал работать в разы эффективнее."
    },
    {
      icon: Globe,
      company: "\"Онлайн-Трейд\"",
      representative: "Анна Волкова, Владелец интернет-магазина",
      title: "Интернет-магазин: Бесшовная интеграция 1С с сайтом",
      problem: "Интернет-магазин \"Онлайн-Трейд\" сталкивался с серьезными проблемами из-за ручной обработки заказов и неактуальных остатков товаров на сайте. Менеджерам приходилось вручную переносить информацию о заказах с сайта в 1С.",
      solution: "Была проведена комплексная интеграция 1С:Управление торговлей (1С:УТ) с платформой Bitrix. Настроена автоматическая двусторонняя синхронизация данных: выгрузка актуальных остатков и цен из 1С на сайт, а также загрузка заказов с сайта в 1С в режиме реального времени.",
      result: "Время на обработку одного заказа сократилось с 10 до 1 минуты, что значительно ускорило выполнение заказов и повысило общую эффективность работы. Актуальность остатков на сайте достигла 99.9%.",
      testimonial: "Интеграция с сайтом работает как часы! Заказы и остатки синхронизируются мгновенно, и это сняло огромную головную боль. Мы перестали терять клиентов из-за неактуальной информации."
    },
    {
      icon: Building2,
      company: "Холдинг Завод МашПром",
      representative: "Денис Семенов, Генеральный директор ООО \"ПП Холдинг\"",
      title: "Машиностроительный холдинг: Переход на 1С:ERP и повышение управляемости",
      problem: "Крупный машиностроительный холдинг Завод МашПром использовал устаревшую систему 1С:УПП, которая не справлялась с растущими потребностями бизнеса в оперативном планировании, точном расчете себестоимости и подготовке отчетности по МСФО.",
      solution: "Мы осуществили комплексный проект перехода с 1С:УПП на 1С:ERP Управление предприятием 2. Проведены предпроектное обследование и концептуальное проектирование для определения оптимальной архитектуры системы. Внедрены ключевые подсистемы: управление производством (включая MES/APS), финансовое управление.",
      result: "Создана единая, интегрированная система планирования и управления всеми ресурсами предприятия. Точность планирования выросла на 40%, а сроки подготовки отчетности по МСФО сократились с 20 до 5 дней. Высвободили более 50 млн рублей оборотных средств.",
      testimonial: "Это был сложный, но очень важный для нас проект, и результат превзошел все ожидания! Управляемость бизнеса выросла на порядок. Теперь мы видим полную картину по всему холдингу в реальном времени."
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-primary/5 to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Наши успешные проекты: 500+ реализованных решений
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Посмотрите, как мы помогли компаниям из разных отраслей достичь своих целей с помощью 1С.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {cases.map((caseStudy, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <caseStudy.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">{caseStudy.company}</Badge>
                        <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                          {caseStudy.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Проблема клиента:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Наше решение:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Результат:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.result}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg p-4 border-l-4 border-primary">
                      <div className="flex items-start gap-2">
                        <Quote className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-foreground italic leading-relaxed mb-2">
                            "{caseStudy.testimonial}"
                          </p>
                          <p className="text-xs text-muted-foreground">
                            — {caseStudy.representative}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ваш успех — наш приоритет!
            </h3>
            <p className="text-lg text-muted-foreground">
              Мы превращаем вызовы в возможности, делая вашу 1С мощным инструментом для роста и процветания.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;