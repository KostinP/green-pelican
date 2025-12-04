// Новый файл: src/components/sections/Stages/Stages3.tsx
// Вариант 3: Горизонтальный слайдер с карточками (вдохновлено Activities.tsx)
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stages = [
  { number: "1", title: "Подготовительный этап", description: "Формирование программы, привлечение партнеров и участников, разработка концепции мероприятий." },
  { number: "2", title: "Проектная школа", description: "Проведение интенсивной проектной школы для школьников и студентов с разработкой эко-проектов." },
  { number: "3", title: "Основные мероприятия", description: "Проведение лекций, мастер-классов, экскурсий и интерактивных выставок в течение фестиваля." },
  { number: "4", title: "Заключительный этап", description: "Подведение итогов, награждение победителей, презентация результатов проектов." },
  { number: "5", title: "Экспертная оценка", description: "Оценка проектов участников жюри из ведущих экспертов в области экологии и устойчивого развития." },
  { number: "6", title: "Публикация результатов", description: "Размещение лучших проектов на платформе фестиваля и в специализированных изданиях." },
];

const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <Button variant="outline" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg" onClick={onClick}>
    <ChevronLeft className="w-4 h-4 text-yellow-400" />
  </Button>
);

const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <Button variant="outline" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg" onClick={onClick}>
    <ChevronRight className="w-4 h-4 text-yellow-400" />
  </Button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function Stages3() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle>Этапы фестиваля (Вариант 3)</SectionTitle>
        <div className="relative pb-16">
          <Slider {...settings}>
            {stages.map((stage, i) => (
              <div key={i} className="px-2">
                <Card className="h-[300px] overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="text-5xl font-bold text-yellow-400 mb-4">{stage.number}</div>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">{stage.title}</h3>
                    <p className="text-gray-600 text-sm">{stage.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
}