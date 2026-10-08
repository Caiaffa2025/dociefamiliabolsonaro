import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { DossierExplorer } from './components/DossierExplorer.tsx';
import { TimelineSection } from './components/TimelineSection.tsx';
import { CashPropertiesSection } from './components/CashPropertiesSection.tsx';
import { SovereigntyImpactSection } from './components/SovereigntyImpactSection.tsx';
import { ManifestoSignSection } from './components/ManifestoSignSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const scrollToDossier = () => {
    const el = document.getElementById('dossie');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToManifesto = () => {
    const el = document.getElementById('manifesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070d0a] text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      <Navbar onSignClick={scrollToManifesto} />
      
      <main className="flex-1">
        <HeroSection 
          onExploreClick={scrollToDossier} 
          onSignClick={scrollToManifesto} 
        />
        <DossierExplorer />
        <TimelineSection />
        <CashPropertiesSection />
        <SovereigntyImpactSection />
        <ManifestoSignSection />
      </main>

      <Footer />
    </div>
  );
}
