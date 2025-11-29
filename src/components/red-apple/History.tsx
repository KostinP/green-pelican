// src/components/sections/History/History.tsx
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function History() {
  return (
    <Section className="bg-white py-24">
      <Container className="text-center">
        <ContentFetcher<{ history: { title: string; link: string } }>
          fallback={
            <>
              <h2 className="text-4xl font-light mb-6">История фестиваля</h2>
              <Button asChild variant="outline" size="lg">
                <a href="/history" target="_blank">Перейти</a>
              </Button>
            </>
          }
        >
          {({ history }) => (
            <>
              <h2 className="text-4xl font-light mb-6">{history.title}</h2>
              <Button asChild variant="outline" size="lg">
                <a href={history.link} target="_blank">Перейти</a>
              </Button>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}