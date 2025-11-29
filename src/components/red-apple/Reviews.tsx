// src/components/sections/Reviews/Reviews.tsx
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

interface Review {
  name: string;
  position: string;
  photo: string;
  text: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function Reviews() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <h2 className="text-4xl font-light text-center mb-12">О нас говорят</h2>
        <ContentFetcher<{ reviews: Review[] }>
          fallback={null}
        >
          {({ reviews }) => (
            <Slider {...settings}>
              {reviews.map((r, i) => (
                <div key={i} className="px-4">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex gap-4 mb-6">
                        <ImageWithFallback
                          src={r.photo}
                          alt={r.name}
                          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold">{r.name}</p>
                          <p className="text-sm text-gray-600">{r.position}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic leading-relaxed">"{r.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}