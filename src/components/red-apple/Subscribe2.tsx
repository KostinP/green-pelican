import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export default function Subscribe() {
  return (
    <Section className="bg-[#646363] text-white py-20">
      <Container className="text-center max-w-4xl">
        <h2 className="text-4xl font-light mb-6">ПОДПИШИСЬ<br/>НА НОВОСТИ ФЕСТИВАЛЯ</h2>
        <p className="text-lg mb-10 leading-relaxed">
          Самый свежий контент, анонсы мероприятий и главные новости фестиваля в одном месте.
        </p>
        <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-lg px-12">
          Подписаться
        </Button>
      </Container>
    </Section>
  );
}