import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import PastEvents from './components/PastEvents';
import Partners from './components/Partners';
import Contacts from './components/Contacts';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <PastEvents />
        <Partners />
        <Contacts />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;