import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} LZ WEB. Alla rättigheter förbehållna</p>
        </div>
      </div>
    </footer>
  );
}