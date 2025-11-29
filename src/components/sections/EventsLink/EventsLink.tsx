import { ContentFetcher } from "@/components/common/ContentFetcher";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export default function EventsLink() {
  return (
    <Section className="bg-gray-50 py-20">
      <Container className="text-center">
        <ContentFetcher<{
          eventsLink: {
            title: string;
            buttonText: string;
            url: string;
          };
        }>
          fallback={
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
              Перейти к мероприятиям
            </Button>
          }
        >
          {({ eventsLink }) => (
            <>
              <h2 className="text-3xl font-normal text-gray-800 mb-8">{eventsLink.title}</h2>
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                <a href={eventsLink.url} target="_blank" rel="noopener noreferrer">
                  {eventsLink.buttonText}
                </a>
              </Button>
            </>
          )}
        </ContentFetcher>
      </Container>
    </Section>
  );
}