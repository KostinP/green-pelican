import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import Slider from "react-slick";

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Section className="bg-gray-50">
      <Container>
        <ContentFetcher<{ reviews: { title: string; items: { img: string; name: string; position: string; text: string }[] } }>
          fallback={<SectionTitle>О нас говорят</SectionTitle>}
        >
          {({ reviews }) => (
            <>
              <SectionTitle>{reviews.title}</SectionTitle>
              <div className="last-slider-container">
                <Slider {...settings}>
                  {reviews.items.map((r, i) => (
                    <div key={i} className="px-4">
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <ImageWithFallback src={r.img} alt={r.name} className="w-16 h-16 rounded-full object-cover" />
                            <div>
                              <p className="font-medium text-gray-800">{r.name}</p>
                              <p className="text-sm text-gray-600">{r.position}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed italic">"{r.text}"</p>
                        </CardContent>
                      </Card>
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