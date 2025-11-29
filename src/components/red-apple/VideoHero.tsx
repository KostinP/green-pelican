// src/components/sections/VideoHero/VideoHero.tsx
import { motion } from "framer-motion";
import { ContentFetcher } from "@/components/common/ContentFetcher";

export default function VideoHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/pelican-hero.mp4"
        poster="/images/video-poster.jpg"
      />
      <div className="absolute inset-0 bg-black/40" />
      <ContentFetcher<{
        videoHero: { title: string; subtitle: string }
      }>
        fallback={
          <div className="relative text-white text-center max-w-5xl px-8 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light leading-tight"
            >
              ЗЕЛЁНЫЙ ПЕЛИКАН 2026
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl mt-6"
            >
              Формируем особую городскую среду через экологию, науку и искусство
            </motion.p>
          </div>
        }
      >
        {({ videoHero }) => (
          <div className="relative text-white text-center max-w-5xl px-8 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-light leading-tight"
            >
              {videoHero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl mt-6"
            >
              {videoHero.subtitle}
            </motion.p>
          </div>
        )}
      </ContentFetcher>
    </section>
  );
}