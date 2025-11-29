// src/components/sections/Subscribe/Subscribe.tsx
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function Subscribe() {
  return (
    <Section className="bg-[#646363] text-white py-24">
      <Container className="text-center max-w-4xl mx-auto">
        <ContentFetcher<{ subscribe: { title: string; subtitle: string } }>
          fallback={
            <>
              <h2 className="text-4xl md:text-5xl font-light mb-6">ПОДПИШИСЬ НА НОВОСТИ</h2>
              <p className="text-lg mb-8">
                Самый свежий контент, календари мероприятий и главные материалы для специалистов
              </p>
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                Подписаться
              </Button>
            </>
          }
        >
          {({ subscribe }) => (
            <>
              <h2 className="text-4xl md:text-5xl font-light mb-6">{subscribe.title}</h2>
              <p className="text-lg mb-8">{subscribe.subtitle}</p>
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                Подписаться
              </Button>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}