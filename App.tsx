
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PainPoints from './components/PainPoints';
import SimpleWay from './components/SimpleWay';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Alert Bar */}
      <div className="bg-gradient-to-r from-[#b539e6] to-[#6200ee] text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span>Redi helps you grow in 2026. 20% OFF for the first year. Plans starting at $29/month</span>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <Stats />
        <SimpleWay />
        <PainPoints />

      </main>
      <Footer />
    </div>
  );
};

export default App;
