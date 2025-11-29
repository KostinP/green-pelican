import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
}

interface Event {
  title: string;
  description: string;
  date: string;
  image: string;
  participants?: string;
  topics?: string;
  detailsLink?: string;
}

interface PastEventsData {
  pastEvents: {
    title: string;
    events: Event[];
  };
}

const Arrow = ({ direction, onClick }: ArrowProps) => (
  <Button
    variant="outline"
    size="icon"
    className="absolute top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
    style={{ [direction === "left" ? "left" : "right"]: 16 }}
    onClick={onClick}
  >
    {direction === "left" ? (
      <ChevronLeft className="w-4 h-4 text-yellow-400" />
    ) : (
      <ChevronRight className="w-4 h-4 text-yellow-400" />
    )}
  </Button>
);

export default function PastEvents() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <Section id="past-events" className="bg-white">
      <Container>
        <ContentFetcher<PastEventsData>
          fallback={<SectionTitle>Прошедшие мероприятия</SectionTitle>}
        >
          {({ pastEvents }) => (
            <>
              <SectionTitle>{pastEvents.title}</SectionTitle>

              <div className="second-slider-container">
                <Slider {...settings}>
                  {pastEvents.events.map((event, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 h-96 rounded-2xl overflow-hidden shadow-lg border">
                      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }} />
                      <CardContent className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-medium text-gray-800 mb-4">{event.title}</h3>
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Дата:</strong> {event.date}</p>
                          {event.participants && <p><strong>Участники:</strong> {event.participants}</p>}
                          {event.topics && <p><strong>Темы:</strong> {event.topics}</p>}
                        </div>
                        {event.detailsLink && (
                          <Button asChild className="mt-6 w-fit">
                            <a href={event.detailsLink} target="_blank" rel="noopener noreferrer">Подробнее</a>
                          </Button>
                        )}
                      </CardContent>
                    </div>
                  ))}
                </Slider>
              </div>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}