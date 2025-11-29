// src/components/sections/Jury/Jury.tsx
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

interface JuryMember {
  name: string;
  position: string;
  country: string;
  photo: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function Jury() {
  return (
    <Section className="bg-gray-50 py-24">
      <Container>
        <h2 className="text-4xl font-light text-center mb-12">Жюри</h2>
        <ContentFetcher<{ jury: JuryMember[] }>
          fallback={null}
        >
          {({ jury }) => (
            <Slider {...settings}>
              {jury.map((member, i) => (
                <div key={i} className="px-4">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <ImageWithFallback
                        src={member.photo}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.position}</p>
                      <p className="text-xs text-gray-500 mt-1">{member.country}</p>
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