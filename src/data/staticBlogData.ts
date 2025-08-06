// Статичные данные для блога
export interface StaticBlogPage {
  url: string;
  title: string;
  description: string;
  author: string;
  created_at: string;
}

export const staticBlogPages: StaticBlogPage[] = [
  {
    url: "/blog/1s-dlya-ip",
    title: "1С для ИП: полное руководство по выбору и настройке",
    description: "Подробное руководство по выбору программы 1С для индивидуальных предпринимателей. Рассматриваем все варианты, от простых решений до комплексных систем учета.",
    author: "Александр Петров",
    created_at: "2024-01-15T10:00:00Z"
  },
  {
    url: "/blog/avtomatizaciya-nalogov-v-buh",
    title: "Автоматизация налогового учета в 1С Бухгалтерия",
    description: "Как настроить автоматическое формирование налоговых деклараций и отчетов в 1С Бухгалтерия. Экономим время на рутинных операциях.",
    author: "Мария Сидорова",
    created_at: "2024-01-10T14:30:00Z"
  },
  {
    url: "/blog/nastrojka-uchetnoj-politiki-v-buh",
    title: "Настройка учетной политики в 1С Бухгалтерия 8.3",
    description: "Пошаговая инструкция по правильной настройке учетной политики организации в программе 1С Бухгалтерия. Избегаем типичных ошибок.",
    author: "Иван Козлов",
    created_at: "2024-01-05T09:15:00Z"
  }
];