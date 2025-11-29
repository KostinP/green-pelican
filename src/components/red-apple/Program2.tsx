// src/components/sections/Program/Program.tsx
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function Program() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <ContentFetcher<{ program: { title: string; text: string; link: string } }>
          fallback={
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-8">Программа</h2>
              <p className="text-lg text-gray-600 mb-8">
                Фестиваль проходит в рамках Недели рекламы. Завершает программу торжественная церемония награждения.
              </p>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                <a href="https://example.com" target="_blank">Перейти к программе</a>
              </Button>
            </div>
          }
        >
          {({ program }) => (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-8">{program.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{program.text}</p>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                <a href={program.link} target="_blank" rel="noopener">Перейти к программе</a>
              </Button>
            </div>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}