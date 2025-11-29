// src/components/sections/Map/Map.tsx
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function Map() {
  return (
    <Section className="bg-white">
      <Container>
        <ContentFetcher<{ map: { title: string } }>
          fallback={<SectionTitle>Место проведения</SectionTitle>}
        >
          {({ map }) => (
            <>
              <SectionTitle>{map.title}</SectionTitle>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://yandex.ru/map-widget/v1/-/CLWpvPYh"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Карта фестиваля Зеленый пеликан"
                  loading="lazy"
                />
              </div>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}