import { createBrowserRouter, RouterProvider } from "react-router-dom";

// src/App.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

// Секции
import About from "@/components/sections/About/About";
import Activities from "@/components/sections/Activities/Activities";
import PastEvents from "@/components/sections/PastEvents/PastEvents";
import Partners from "@/components/sections/Partners/Partners";
import EventsLink from "@/components/sections/EventsLink/EventsLink";
import Contacts from "@/components/sections/Contacts/Contacts";
import FAQ from "@/components/sections/FAQ/FAQ";
import Map from "@/components/sections/Map/Map";
import LocationHero from "@/components/sections/LocationHero/LocationHero";
import MapSection from "@/components/sections/MapSection/MapSection";
import ParkForum from "@/components/sections/ParkForum/ParkForum";
import ParkForum1 from "@/components/sections/ParkForum/ParkForum1";

// Старые секции
import Activities1 from './components/sections/Activities/ActivitiesOld';
import PastEvents1 from './components/sections/PastEvents/PastEventsOld';
import Contacts1 from './components/sections/Contacts/ContactsOld';
import FAQ1 from './components/sections/FAQ/FAQOld';

// ──────────────────────────────────────
// НОВЫЕ СЕКЦИИ В СТИЛЕ RED APPLE
// ──────────────────────────────────────
import Stats from "@/components/red-apple/Stats";                     // Статистика (40+ стран и т.д.)
import Timeline from "@/components/red-apple/Timeline";             // Таймлайн подачи работ
import Reviews from "@/components/red-apple/Reviews";                 // Отзывы жюри и победителей
import VideoHero from "@/components/red-apple/VideoHero";           // Видео-фон как в Red Apple
import RunningLine from "@/components/red-apple/RunningLine";     // Бегущая строка
import Jury from "@/components/red-apple/Jury";     // Бегущая строка


import Timeline2 from "@/components/red-apple/Timeline2";
import History from "@/components/red-apple/History";
import Subscribe from "@/components/red-apple/Subscribe";
import Program2 from "@/components/red-apple/Program2";
import SpecialAwards from "@/components/red-apple/SpecialAwards";
import Subscribe2 from "@/components/red-apple/Subscribe2";
import Winners from "./components/red-apple/Winners";

import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Hero5 from "@/components/Hero5";
import { HistoryPage } from "./components/history/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "*",
    element: <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <About />
        <LocationHero />
        <Activities />
        <Activities1 />
        <MapSection />
        <PastEvents />
        <PastEvents1 />
        <ParkForum />
        <ParkForum1 />
        <Partners />
        <EventsLink />
        <Contacts />
        <Contacts1 />
        <FAQ />
        <FAQ1 />
        <Reviews />
        <RunningLine />
        <Jury />
        <History />
        <Winners />
        <SpecialAwards/>
        <Stats />
        <Timeline />
        <Timeline2 />
        <VideoHero />
        <Program2 />
        <Subscribe />
        <Subscribe2 />
        <Map />
      </main>

      <Footer />
      <BackToTop />
    </div>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}