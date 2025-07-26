import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPage {
  url: string;
  title: string;
  description: string;
  author: string;
  created_at: string;
}

const BlogPagesFinder = () => {
  const [blogPages, setBlogPages] = useState<BlogPage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPages = async () => {
      try {
        const { data, error } = await supabase
          .from('site_pages')
          .select('url, title, description, author, created_at')
          .like('url', '/blog/%')
          .neq('url', '/blog')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching blog pages:', error);
          return;
        }

        setBlogPages(data || []);
      } catch (error) {
        console.error('Error fetching blog pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPages();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">Загрузка статей...</p>
      </div>
    );
  }

  if (blogPages.length === 0) {
    return (
      <div className="text-center mt-12 p-8 bg-muted/50 rounded-lg">
        <p className="text-muted-foreground">
          Скоро здесь появятся новые статьи о 1С и автоматизации бизнеса
        </p>
      </div>
    );
  }

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
    const readTime = Math.ceil(words / 200); // Примерно 200 слов в минуту
    return `${readTime} мин`;
  };

  return (
    <div className="grid gap-8">
      {blogPages.map((page) => (
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

export default BlogPagesFinder;