import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-['Inter',_system-ui,_sans-serif] min-h-screen bg-[#F7F9FC] text-[#2D3748]">
      <Header />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Contact />
      </main>

      <footer className="bg-[#1A202C] py-8 text-center text-white/50 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Capano Andrés. Transformando datos en decisiones.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
