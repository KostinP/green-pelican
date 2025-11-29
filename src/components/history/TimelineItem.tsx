import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { type HistoryYear } from "./historyData";

interface TimelineItemProps {
  year: HistoryYear;
  index: number;
  total: number;
}

export function TimelineItem({ year, index, total }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between">
      {/* Левая сторона (текст) - для четных слева, для нечетных справа */}
      <div
        className={`w-full md:w-5/12 ${
          isEven ? "md:pr-20 lg:pr-32 order-1" : "md:order-3 md:pl-20 lg:pl-32 order-3"
        }`}
      >
        <div className="space-y-6">
          <time className="block">
            <span className="text-6xl md:text-8xl font-bold text-primary">{year.year}</span>
          </time>

          <div className="space-y-4 text-lg leading-relaxed">
            {year.date && <p className="text-muted-foreground">{year.date}</p>}
            <h3 className="text-2xl md:text-3xl font-semibold">{year.title}</h3>
            {year.description && (
              <div className="prose prose-lg dark:prose-invert whitespace-pre-line">
                {year.description}
              </div>
            )}
            <Button asChild variant="outline">
              <Link to={year.detailsUrl}>Подробнее →</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Центральный кружок - абсолютное позиционирование */}
      <div className="absolute invisible md:visible left-1/2 transform -translate-x-1/2 z-10 order-2 md:order-none">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full border-4 md:border-8 border-background shadow-lg" />
      </div>

      {/* Правая сторона (картинка) - для четных справа, для нечетных слева */}
      <div
        className={`w-full md:w-5/12 ${
          isEven ? "md:pl-20 lg:pl-32 order-3" : "md:pr-20 lg:pr-32 order-1"
        } mt-8 md:mt-0`}
      >
        <picture>
          {year.image2x && (
            <source srcSet={`${year.image} 1x, ${year.image2x} 2x`} />
          )}
          <img
            src={year.image}
            alt={`Фестиваль Red Apple ${year.year}`}
            className="rounded-lg shadow-2xl object-cover w-full h-64 md:h-80"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Линия между элементами (кроме последнего) */}
      {index < total - 1 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-32 hidden md:block" />
      )}
    </div>
  );
}