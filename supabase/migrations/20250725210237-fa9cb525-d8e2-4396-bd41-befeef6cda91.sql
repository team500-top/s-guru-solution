-- Create table for article reviews
CREATE TABLE public.article_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_url TEXT NOT NULL,
  author_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.article_reviews ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert reviews (for public articles)
CREATE POLICY "Anyone can submit article reviews" 
ON public.article_reviews 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all reviews
CREATE POLICY "Admins can view all reviews" 
ON public.article_reviews 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_article_reviews_updated_at
BEFORE UPDATE ON public.article_reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();