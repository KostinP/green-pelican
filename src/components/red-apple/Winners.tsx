// src/components/sections/Winners/Winners.tsx
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function Winners() {
  return (
    <Section className="bg-yellow-50 py-24">
      <Container className="text-center">
        <ContentFetcher<{ winners: { title: string; link: string } }>
          fallback={
            <>
              <h2 className="text-4xl font-light mb-6">Победители 2025</h2>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                <a href="/winners">Смотреть победителей</a>
              </Button>
            </>
          }
        >
          {({ winners }) => (
            <>
              <h2 className="text-4xl font-light mb-6">{winners.title}</h2>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                <a href={winners.link}>Смотреть победителей</a>
              </Button>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}