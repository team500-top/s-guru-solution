import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, User } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Валентин Бутюгин",
      position: "Партнер, эксперт IT/Digital, сооснователь TEAM500",
      description: "За плечами Валентина более 20 лет опыта в IT, сотни реализованных проектов и глубокое понимание, как технологии могут влиять на бизнес. Он свободно владеет английским и немецким языками, успешно инвестировал более чем в 10 проектов в России и за рубежом. Именно его видение и фокус на бизнес-результат легли в основу нашего подхода к работе с 1С."
    },
    {
      name: "Сергей Лещинский",
      position: "Ведущий Бизнес-аналитик, руководитель направления \"Внедрение 1С:Бухгалтерия и УНФ\"",
      description: "Сергей — наш главный 'переводчик' с языка бизнеса на язык IT. Он обладает сертификатами '1С:Профессионал' и '1С:Специалист-консультант по Бухгалтерии'. Благодаря его опыту (более 12 лет в консалтинге), мы точно понимаем ваши боли и задачи, предлагая не просто настройки, а решения, которые приносят реальную финансовую выгоду."
    },
    {
      name: "Игорь Кондратьев",
      position: "Главный Архитектор решений 1С, руководитель направления \"ERP и Комплексная автоматизация\"",
      description: "Игорь — мозг наших самых сложных и масштабных проектов. Имея статус '1С:Эксперт по технологическим вопросам' и '1С:Центр ERP', он проектирует архитектуру систем, которая выдерживает колоссальные нагрузки, легко масштабируется и позволяет интегрировать 1С с любыми внешними сервисами."
    },
    {
      name: "Марина Родионова",
      position: "Руководитель проектов, эксперт по \"Интеграциям и Доработкам 1С\"",
      description: "Марина — ваш проводник от идеи до работающего решения. Сертифицированный руководитель проектов с опытом ведения более 50 внедрений и интеграций. Она не только координирует команду, но и глубоко погружается в технические детали, обеспечивая прозрачность каждого этапа и строгое соблюдение сроков и бюджета."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Наши эксперты —
            </span>
            <br />
            <span className="text-foreground">ваш успех</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Мы — это более 35 инженеров, дизайнеров и аналитиков, а также 12 ключевых специалистов, 
            которые гарантируют высокое качество каждого проекта. С 2001 года мы реализуем проекты 
            цифровой трансформации и автоматизации на базе 1С, и за каждым успехом наших клиентов 
            стоит слаженная работа профессионалов.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-large transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {member.position}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Опыт и экспертиза:</strong> {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-2" />
            <div>
              <p className="text-lg text-foreground leading-relaxed italic mb-4">
                "Знаете, за 20 лет работы я понял одну простую вещь: 1С — это не просто программа. 
                Это кровеносная система вашего бизнеса. Если она работает с перебоями, страдает все. 
                Мы здесь, чтобы убедиться, что ваша 1С не просто 'функционирует', а по-настоящему 
                приносит деньги, помогает расти и не создает лишних головных болей. Мы закладываем 
                прочный фундамент, на котором вы сможете строить и развивать свое дело, не отвлекаясь 
                на технические проблемы. Доверьте нам самое важное – и сосредоточьтесь на том, что вы 
                умеете лучше всего: на своем бизнесе!"
              </p>
              <p className="text-sm font-semibold text-primary">
                — Валентин Бутюгин, сооснователь TEAM500
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;