import React from 'react';
import { Code2, Rocket, Globe, Search } from 'lucide-react';

export function Services() {
  const features = [
    {
      icon: Globe,
      title: "Hemsida för ditt företag",
      description: "Vi skapar en professionell hemsida som presenterar ditt företag på bästa sätt."
    },
    {
      icon: Code2,
      title: "Anpassad för alla enheter",
      description: "Din hemsida fungerar perfekt på både mobil, surfplatta och dator."
    },
    {
      icon: Search,
      title: "SEO",
      description: "Vi bygger din hemsida med SEO i åtanke, så att den ger högt sökresultat och når fler potentiella kunder."
    }
  ];

  return (
    <section id="services" className="py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Skräddarsydda Webblösningar</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
          Oavsett om du behöver en ny webbplats, uppdatera din nuvarande eller implementera nya funktioner – vi har lösningarna för dig.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card p-8 hover:bg-gray-800/70 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}