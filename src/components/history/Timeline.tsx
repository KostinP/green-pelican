import { TimelineItem } from "./TimelineItem";
import { historyData } from "./historyData";

export function Timeline() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="relative">
        {/* Вертикальная линия по центру */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full hidden md:block" />

        <div className="space-y-32 md:space-y-48">
          {historyData.map((year, index) => (
            <TimelineItem
              key={year.year}
              year={year}
              index={index}
              total={historyData.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}