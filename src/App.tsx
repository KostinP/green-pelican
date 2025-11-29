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

// Старые секции
import Activities1 from './components/sections/Activities/ActivitiesOld';
import PastEvents1 from './components/sections/PastEvents/PastEventsOld';
import Contacts1 from './components/sections/Contacts/ContactsOld';
import FAQ1 from './components/sections/FAQ/FAQOld';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <About />
        <LocationHero />
        <Activities />
        <Activities1 />
        <MapSection />
        <PastEvents />
        <PastEvents1 />
        <Partners />
        <EventsLink />
        <Contacts />
        <Contacts1 />
        <FAQ />
        <FAQ1 />
        <Map />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}