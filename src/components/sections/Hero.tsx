import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/30 to-primary/5 py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
            Ваша 1С должна приносить деньги, а не проблемы
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            С 2001 года мы превращаем 1С из сложной учетной программы в простой и надежный инструмент для вашего бизнеса, 
            <span className="font-semibold text-foreground"> гарантируя рост прибыли и сокращение издержек</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group shadow-large hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://t.me/mgm5500', '_blank')}
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Получить бесплатную консультацию и аудит 1С
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover:bg-primary/5 hover:shadow-hover transition-all duration-300"
              onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши кейсы
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Узнайте, как ваша 1С может работать эффективнее</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;