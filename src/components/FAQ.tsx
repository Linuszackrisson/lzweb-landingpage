import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Vilka tjänster erbjuder ni?',
    answer: 'Vi är specialiserade på utveckling av nya eller befintliga webbplatser. Vi har bred kompetens inom området, så behöver du hjälp med annat så går även det.'
  },
  {
    question: 'Hur lång tid tar det att utveckla en webbplats?',
    answer: 'Utvecklingsperioden varier beroende på storlek och komplexictet, vi skriver all kod från grunden för att säkerställa just du får det du önskar. En sida likt denna tar 1-2 veckor medans en större med fler sidor kan ta mellan 4-8 veckor.'
  },
  {
    question: 'Erbjuder ni support efter lansering?',
    answer: 'Ja, vi erbjuder kostnadsfri support efter lansering. Mindre ändringar ingår utan extra kostnad, medan en avgift kan tillkomma för större ändringar.upport och mindre ändringar ingår utan extra kostnad. Vid behov av större ändringar kan dock en tilläggskostnad tillkomma.'
  },
  {
    question: 'Hur ser er prisstruktur ut?',
    answer: 'Vi erbjuder skräddarsydda lösningar och våra priser baseras på projektets omfattning och komplexitet. Kontakta oss för en kostnadsfri konsultation där vi kan diskutera ditt projekt och ge en detaljerad prisuppskattning.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => { 
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Vanliga Frågor</h2>
          <p className="text-xl text-neutral-400">Svar på några av de vanligaste frågorna vi får</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:text-blue-400 transition-colors"
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-neutral-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}