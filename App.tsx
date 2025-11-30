import React, { useState } from 'react';
import { Navbar } from './components/Landing/Navbar';
import { Hero } from './components/Landing/Hero';
import { Features } from './components/Landing/Features';
import { Courses } from './components/Landing/Courses';
import { Testimonials } from './components/Landing/Testimonials';
import { Community } from './components/Landing/Community';
import { FAQ } from './components/Landing/FAQ';
import { Footer } from './components/Landing/Footer';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);

  if (currentView === AppView.DASHBOARD) {
    return <Dashboard onLogout={() => setCurrentView(AppView.LANDING)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLogin={() => setCurrentView(AppView.DASHBOARD)} />
      
      <main>
        <Hero onCtaClick={() => setCurrentView(AppView.DASHBOARD)} />
        <Features />
        <Courses />
        <Testimonials />
        <Community />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;