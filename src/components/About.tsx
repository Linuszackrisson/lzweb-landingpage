import React from 'react';
import { Users, Rocket, Clock, Shield } from 'lucide-react';
import devImage from '../assets/pexels-goumbik-574073.jpg';
const benefits = [
  {
    icon: Users,
    text: 'Direkt kommunikation med utvecklaren för bästa resultat',
  },
  {
    icon: Rocket,
    text: '100% nöjd kundgaranti',
  },
];


export function About() {
  return (
    <section id="about" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
                src={devImage}
                alt="Team working"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-2xl" />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Om LZ WEB</h2>
            <p className="text-xl text-neutral-400 mb-8">
            En webbyrå med hjärtat i Arvika, som fokuserar på att leverera konkreta resultat. Med passion för webbutveckling och ett engagemang för att skapa effektiva lösningar, byggs webbplatser som hjälper företag att växa och synas online.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-neutral-300">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}