import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContentFetcher } from "@/components/common/ContentFetcher";
import { Separator } from "@/components/ui/separator";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export default function Partners() {
  return (
    <Section className="bg-white">
      <Container>
        <ContentFetcher<{ partners: { title: string; mainPartners: string[]; otherPartners: string[] } }>
          fallback={<SectionTitle>Партнеры</SectionTitle>}
        >
          {({ partners }) => (
            <>
              <SectionTitle>{partners.title}</SectionTitle>

              <div className="flex flex-wrap justify-center gap-12 mb-16">
                {partners.mainPartners.map((src, i) => (
                  <ImageWithFallback key={i} src={src} alt="" className="h-28 object-contain" />
                ))}
              </div>

              <Separator className="bg-yellow-400 h-0.5 max-w-md mx-auto mb-16" />

              <div className="flex flex-wrap justify-center gap-10">
                {partners.otherPartners.map((src, i) => (
                  <ImageWithFallback key={i} src={src} alt="" className="h-20 object-contain" />
                ))}
              </div>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}