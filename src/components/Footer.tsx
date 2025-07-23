import { Phone, Mail, MessageCircle, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-4">
              1S-GURU.RU
            </div>
            <p className="text-muted-foreground mb-4">
              Эксперты по 1С с 2001 года. Превращаем 1С из сложной учетной программы в простой и надежный инструмент для вашего бизнеса.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2"><strong>Главный офис:</strong></p>
              <p>Москва, ул. 1-я Фрезерная, д.2/1, с.1</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79778386097" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>8 (977) 838-60-97</span>
              </a>
              <a href="mailto:i@1s-guru.ru" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>i@1s-guru.ru</span>
              </a>
              <a href="https://wa.me/79778386097" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a href="https://t.me/mgm5500" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>Telegram</span>
              </a>
              <a href="https://youtube.com/@thedigitalviking" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-4 w-4" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Офисы разработки</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Ереван, Армения</p>
              <p>Алматы, Казахстан</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 1S-GURU.RU. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;