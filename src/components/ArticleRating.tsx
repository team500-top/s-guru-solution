import { useState } from "react";
import { Star, MessageCircle, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  author: string;
  role?: string;
  text: string;
  rating: number;
}

interface ArticleRatingProps {
  reviews: Review[];
  currentRating: number;
  totalReviews: number;
}

export const ArticleRating = ({ reviews, currentRating, totalReviews }: ArticleRatingProps) => {
  const [showComments, setShowComments] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating || !comment.trim() || !name.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля и поставьте оценку",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Сохраняем отзыв в базу данных
      const { error } = await supabase
        .from('article_reviews')
        .insert({
          article_url: window.location.pathname,
          author_name: name.trim(),
          rating: rating,
          comment: comment.trim()
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Спасибо за вашу оценку!",
        description: "Ваш комментарий и оценка будут опубликованы после модерации.",
      });
      
      // Сбрасываем форму
      setRating(0);
      setComment("");
      setName("");
    } catch (error) {
      console.error('Error saving review:', error);
      toast({
        title: "Ошибка отправки",
        description: "Не удалось сохранить вашу оценку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (count: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < count;
      return (
        <Star
          key={i}
          className={`w-5 h-5 ${
            interactive ? 'cursor-pointer' : ''
          } ${
            filled 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'text-muted-foreground'
          }`}
          onClick={interactive ? () => setRating(i + 1) : undefined}
          onMouseEnter={interactive ? () => setHoverRating(i + 1) : undefined}
          onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
        />
      );
    });
  };

  return (
    <div className="space-y-6">
      {/* Current Rating Display */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Оценка статьи
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex">
              {renderStars(Math.round(currentRating))}
            </div>
            <span className="text-sm text-muted-foreground">
              {currentRating}/5 ({totalReviews} {totalReviews === 1 ? 'оценка' : totalReviews < 5 ? 'оценки' : 'оценок'})
            </span>
          </div>

          {/* Rating Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Ваша оценка</Label>
              <div className="flex gap-1 mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 cursor-pointer transition-colors ${
                      i < (hoverRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground hover:text-yellow-300'
                    }`}
                    onClick={() => setRating(i + 1)}
                    onMouseEnter={() => setHoverRating(i + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите ваше имя"
                required
              />
            </div>

            <div>
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Поделитесь своим мнением о статье..."
                rows={4}
                required
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Отправляем...' : 'Отправить оценку'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments Section */}
      {reviews.length > 0 && (
        <Card>
          <CardHeader>
            <Button
              variant="ghost"
              onClick={() => setShowComments(!showComments)}
              className="w-full justify-between p-0 h-auto"
            >
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Комментарии пользователей ({reviews.length})
              </CardTitle>
              {showComments ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </Button>
          </CardHeader>

          {showComments && (
            <CardContent className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/20 pl-4 py-2"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">{review.author}</span>
                    {review.role && (
                      <span className="text-sm text-muted-foreground">
                        ({review.role})
                      </span>
                    )}
                    <div className="flex ml-auto">
                      {renderStars(Math.round(review.rating))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      )}
    </div>
  );
};