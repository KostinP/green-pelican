import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

interface Activity {
  image: string;
  title: string;
  description: string;
}

const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <Button
    variant="outline"
    size="icon"
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
    onClick={onClick}
  >
    <ChevronLeft className="w-4 h-4 text-yellow-400" />
  </Button>
);

const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <Button
    variant="outline"
    size="icon"
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
    onClick={onClick}
  >
    <ChevronRight className="w-4 h-4 text-yellow-400" />
  </Button>
);

export default function Activities() {
  const [selected, setSelected] = useState<Activity | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Section id="activities" className="bg-white">
      <Container>
        <ContentFetcher<{
          activities: {
            title: string;
            slides: Activity[][];
          };
        }>
          fallback={<SectionTitle>Активности фестиваля</SectionTitle>}
        >
          {({ activities }) => {
            const all = activities.slides.flat();
            return (
              <>
                <SectionTitle>{activities.title}</SectionTitle>
                <div className="relative pb-16 first-slider-container">
                  <Slider {...settings}>
                    {all.map((act, i) => (
                      <div key={i} className="px-2">
                        <Card
                          className="h-[350px] overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                          onClick={() => setSelected(act)}
                        >
                          <div className="h-32 bg-gray-50 border-b flex items-center justify-center p-4">
                            <ImageWithFallback src={act.image} alt={act.title} className="max-h-full max-w-full object-contain" />
                          </div>
                          <CardContent className="p-6 flex flex-col h-[218px]">
                            <h3 className="text-lg font-medium text-gray-800 mb-3 line-clamp-2">{act.title}</h3>
                            <p className="text-gray-600 text-sm line-clamp-5 flex-1">{act.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </Slider>
                </div>

                <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
                  <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
                    {selected && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
                          <ImageWithFallback
                            src={selected.image}
                            alt={selected.title}
                            className="rounded-lg object-cover w-full h-80"
                          />
                          <p className="text-gray-700 text-lg leading-relaxed">{selected.description}</p>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </>
            );
          }}
        </ContentFetcher>
      </Container>
    </Section>
  );
}