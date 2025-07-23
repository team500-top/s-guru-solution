import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MessageCircle } from "lucide-react";

const LeadMagnet = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Полезные материалы
            </span>
            <br />
            <span className="text-foreground">для вашего бизнеса</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Получите эксклюзивные чек-листы и гайды, которые помогут вам оптимизировать работу с 1С 
            и избежать распространенных ошибок.
          </p>
        </div>

        <Card className="hover:shadow-large transition-all duration-300 border-0 shadow-medium bg-background/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground mb-4">
              Гайд: "Как правильно написать ТЗ на доработку 1С, чтобы получить то, что вы хотите"
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg p-6 border border-primary/10">
              <h3 className="font-semibold text-foreground mb-3">Ценность гайда:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Избегите недопониманий и получите именно тот функционал, который вам нужен. 
                Пошаговая инструкция для эффективной работы с подрядчиком.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group shadow-large hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Получить гайд бесплатно
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
    </section>
  );
};

export default LeadMagnet;