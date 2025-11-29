// src/components/sections/RunningLine/RunningLine.tsx
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function RunningLine() {
  return (
    <div className="bg-[#646363] py-3 overflow-hidden">
      <ContentFetcher<{ runningLine: string }>
        fallback={
          <div className="animate-marquee whitespace-nowrap text-white font-medium text-sm md:text-base">
            {Array(6)
              .fill("Публикация шорт-листа — 23 октября")
              .join(" • ")}{" "}
            •{" "}
          </div>
        }
      >
        {({ runningLine }) => (
          <div className="animate-marquee whitespace-nowrap text-white font-medium text-sm md:text-base">
            {Array(10).fill(runningLine).join(" • ")} •
          </div>
        )}
      </ContentFetcher>
    </div>
  );
}