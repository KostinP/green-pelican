// src/components/sections/SpecialAwards/SpecialAwards.tsx
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function SpecialAwards() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <ContentFetcher<{ specialAwards: { title: string; items: string[] } }>
          fallback={
            <>
              <h2 className="text-4xl font-light text-center mb-12">Специальные награды</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Гран-при", "Агентство года", "Молодой креатор"].map((award, i) => (
                  <div key={i} className="text-center p-8 border-2 border-yellow-400 rounded-xl">
                    <p className="text-2xl font-medium">{award}</p>
                  </div>
                ))}
              </div>
            </>
          }
        >
          {({ specialAwards }) => (
            <>
              <h2 className="text-4xl font-light text-center mb-12">{specialAwards.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {specialAwards.items.map((award, i) => (
                  <div key={i} className="text-center p-8 border-2 border-yellow-400 rounded-xl">
                    <p className="text-2xl font-medium">{award}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}