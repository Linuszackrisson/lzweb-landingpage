import browserImage from '../assets/browser-98386_1280.png';
import React from 'react';
import { ArrowRight, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-6">
              <MousePointerClick className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-400 font-medium">Modern Webbdesign</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6 text-white">
              Vi utvecklar 
              <span className="block mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              din webbplats
              </span>
            </h1>
            
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
            Din vision, vår kod. Vi skapar webbplatser ser bra ut och ökar din försäljning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-indigo-600 transition-all text-white"
              >
                Starta ett projekt
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border border-blue-500/20 hover:bg-blue-500/10 transition-colors text-blue-400"
              >
                Våra tjänster
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl transform rotate-6 blur-2xl opacity-30" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-2xl transform -rotate-6 blur-2xl opacity-30" />
            
            {/* Main image with animation */}
            <motion.div 
              className="image hidden lg:block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src={browserImage}
                alt="Modern webbdesign exempel"
                className="w-full aspect-[6/6] object-cover"
              />
              
              {/* Glassmorphism overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2">
                  </div>
                </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}