import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StaticBlogPagesFinder from "@/components/StaticBlogPagesFinder";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Блог</h1>
          <p className="text-xl text-muted-foreground">
            Экспертные статьи о 1С, автоматизации бизнеса и ведении учёта
          </p>
        </div>

        {/* Blog Posts Grid - moved up */}
        <div className="mb-16">
          <StaticBlogPagesFinder />
        </div>

        {/* Authors Section - moved down */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Наши эксперты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Валентин Бутюгин</CardTitle>
                <CardDescription className="font-medium text-primary">
                  Партнер, эксперт IT/Digital, сооснователь TEAM500
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  За плечами Валентина более 20 лет опыта в IT, сотни реализованных проектов и глубокое понимание, как технологии могут влиять на бизнес. С 2003 года успешно развивает собственный бизнес в сфере IT, включая разработку ПО, системную интеграцию и автоматизацию бизнеса. Среди партнеров, с которыми работали компании Валентина, такие гиганты как Microsoft, Лаборатория Касперского, IBM, 1С-Битрикс, Яндекс, VK и другие.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Сергей Лещинский</CardTitle>
                <CardDescription className="font-medium text-primary">
                  Ведущий Бизнес-аналитик, руководитель направления "Внедрение 1С:Бухгалтерия и УНФ"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Сергей — наш главный 'переводчик' с языка бизнеса на язык IT. Он обладает сертификатами '1С:Профессионал' и '1С:Специалист-консультант по Бухгалтерии'. Благодаря его опыту (более 12 лет в консалтинге), мы точно понимаем ваши боли и задачи, предлагая не просто настройки, а решения, которые приносят реальную финансовую выгоду.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Игорь Кондратьев</CardTitle>
                <CardDescription className="font-medium text-primary">
                  Главный Архитектор решений 1С, руководитель направления "ERP и Комплексная автоматизация"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Игорь — мозг наших самых сложных и масштабных проектов. Имея статус '1С:Эксперт по технологическим вопросам' и '1С:Центр ERP', он проектирует архитектуру систем, которая выдерживает колоссальные нагрузки, легко масштабируется и позволяет интегрировать 1С с любыми внешними сервисами.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Марина Родионова</CardTitle>
                <CardDescription className="font-medium text-primary">
                  Руководитель проектов, эксперт по "Интеграциям и Доработкам 1С"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Марина — ваш проводник от идеи до работающего решения. Сертифицированный руководитель проектов с опытом ведения более 50 внедрений и интеграций. Она не только координирует команду, но и глубоко погружается в технические детали, обеспечивая прозрачность каждого этапа и строгое соблюдение сроков и бюджета.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;