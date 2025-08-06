import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import { staticBlogPages } from "@/data/staticBlogData";

const StaticBlogPagesFinder = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategory = (url: string) => {
    if (url.includes('buh')) return '1С Бухгалтерия';
    if (url.includes('ip')) return '1С для ИП';
    if (url.includes('nalog')) return 'Налоги';
    return '1С Общее';
  };

  const getReadTime = (description: string) => {
    const words = description.split(' ').length;
    const readTime = Math.ceil(words / 200);
    return `${readTime} мин`;
  };

  return (
    <div className="grid gap-8">
      {staticBlogPages.map((page) => (
        <Card key={page.url} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{getCategory(page.url)}</Badge>
            </div>
            <CardTitle className="text-2xl hover:text-primary transition-colors">
              <Link to={page.url}>{page.title}</Link>
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {page.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <UserIcon className="h-4 w-4" />
                <span>{page.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{formatDate(page.created_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="h-4 w-4" />
                <span>{getReadTime(page.description)}</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to={page.url}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Читать далее →
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StaticBlogPagesFinder;