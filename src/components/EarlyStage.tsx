import React from 'react';
import { Sparkles, Rocket, PiggyBank } from 'lucide-react';

export function EarlyStage() {
  return (
    <section className="py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
              <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-400 font-medium">Specialerbjudande</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Var med från början
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-neutral-400 mb-6">
                Som nyetablerad webbbyrå erbjuder vi just nu väldigt låga priser för att bygga upp vår portfolio. Passa på att få en professionell webbplats till ett konkurrenskraftigt pris.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Rocket className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-300">
                      Samma höga kvalitet och professionella service som alltid
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <PiggyBank className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-300">
                      Upp till 80% lägre priser under vår uppbyggnadsfas
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-indigo-600 transition-all text-white"
                >
                  Ta del av erbjudandet
                </a>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl transform rotate-6" />
                <div className="card p-8 relative">
                  <div className="text-6xl font-bold text-blue-400 mb-4">80%</div>
                  <div className="text-2xl font-semibold mb-2">Rabatt</div>
                  <p className="text-neutral-400">
                    på våra ordinarie priser under uppbyggnadsfasen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}