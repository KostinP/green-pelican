import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Separator } from "@/components/ui/separator";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export default function Partners() {
  // Динамически импортируем все изображения из папки
  const mainPartnersImages = import.meta.glob(
    '/public/images/main-partners/*.{jpg,jpeg,png,gif,webp,svg}', 
    { eager: true, query: '?url' }
  );

  // Преобразуем в массив URL
  const mainPartners = Object.values(mainPartnersImages).map((module: any) => 
    module.default.replace('/public', '')
  );

  // Если есть другие папки
  const otherPartnersImages = import.meta.glob(
    '/public/images/other-partners/*.{jpg,jpeg,png,gif,webp,svg}', 
    { eager: true, query: '?url' }
  );

  const otherPartners = Object.values(otherPartnersImages).map((module: any) => 
    module.default.replace('/public', '')
  );

  // Функция для разбивки массива на группы по 4
  const chunkArray = (arr: string[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Группируем по 4
  const mainRows = chunkArray(mainPartners, 4);
  const otherRows = chunkArray(otherPartners, 4);

  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle>Партнеры</SectionTitle>

        {/* Основные партнеры */}
        <div className="mb-16">
          {mainRows.map((row, rowIndex) => (
            <div 
              key={`main-row-${rowIndex}`} 
              className="flex justify-center items-center gap-8 lg:gap-12 mb-8 last:mb-0"
            >
              {row.map((src, i) => (
                <div 
                  key={`main-${rowIndex}-${i}`} 
                  className="flex justify-center items-center"
                  style={{ width: '220px' }} // Фиксированная ширина для каждого элемента
                >
                  <ImageWithFallback 
                    src={src} 
                    alt={`Основной партнер ${rowIndex * 4 + i + 1}`} 
                    className="h-28 object-contain" 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <Separator className="bg-yellow-400 max-w-md mx-auto mb-16" />

        {/* Другие партнеры */}
        <div>
          {otherRows.map((row, rowIndex) => (
            <div 
              key={`other-row-${rowIndex}`} 
              className="flex justify-center items-center gap-6 lg:gap-10 mb-6 last:mb-0"
            >
              {row.map((src, i) => (
                <div 
                  key={`other-${rowIndex}-${i}`} 
                  className="flex justify-center items-center"
                  style={{ width: '180px' }} // Фиксированная ширина для каждого элемента
                >
                  <ImageWithFallback 
                    src={src} 
                    alt={`Партнер ${rowIndex * 4 + i + 1}`} 
                    className="h-20 object-contain" 
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}