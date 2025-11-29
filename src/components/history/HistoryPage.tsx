import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Timeline } from "./Timeline";
import { ChevronDown } from "lucide-react";
import { historyData } from "./historyData";

export function HistoryPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img src="/logo.svg" alt="Red Apple" className="w-48 md:w-64" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-lg md:text-xl">
              <p>145-летие российской рекламы — повод вспомнить, каким был фестиваль &gt;30 лет назад, как менялся и развивался, каким его знает индустрия сегодня.</p>
              <p>Это большой медиа-проект от команды фестиваля, в котором описаны ключевые вехи Red Apple: с 1992 года до наших дней.</p>
              <p>Приятного погружения в историю!</p>
            </div>
          </div>
        </div>

        <Button
          asChild
          size="lg"
          variant="ghost"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <Link to="#timeline">
            <ChevronDown className="w-8 h-8" />
          </Link>
        </Button>
      </section>

      {/* Timeline */}
      <section id="timeline" className="bg-background">
        <Timeline />
      </section>

      {/* Боковое меню (опционально) */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 hidden 2xl:block">
        <nav className="space-y-2 bg-background/80 backdrop-blur rounded-lg p-4 border">
          {historyData.map((y) => (
            <a
              key={y.year}
              href={`#${y.year}`}
              className="block text-sm hover:text-primary transition-colors"
            >
              {y.year}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}