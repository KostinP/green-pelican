export type HistoryYear = {
  year: string;
  title: string;
  date?: string;
  description: string;
  detailsUrl: string;
  image: string;
  image2x?: string;
};

export const historyData: HistoryYear[] = [
  {
    year: "1992",
    title: "1-й и 2-й конкурс рекламных видеороликов",
    description: "29 апреля — 1-й конкурс в рамках I съезда фирм-производителей\n28 ноября — 2-й конкурс в рамках II съезда",
    detailsUrl: "/history/1992",
    image: "/upload/festivals/1992.jpg",
    image2x: "/upload/festivals/1992@2x.jpg",
  },
  {
    year: "1993",
    title: "3-й конкурс рекламных видеороликов",
    date: "19–20 ноября",
    description: "",
    detailsUrl: "/history/1993",
    image: "/upload/festivals/1993.jpg",
  },
  // ... остальные годы аналогично
  {
    year: "2024",
    title: "34-й Международный фестиваль рекламы Red Apple",
    description: "",
    detailsUrl: "/history/2024",
    image: "/upload/festivals/2024_3.jpg",
  },
];