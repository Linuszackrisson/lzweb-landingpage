import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { EarlyStage } from './components/EarlyStage';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <EarlyStage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}