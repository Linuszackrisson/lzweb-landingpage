import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Vilka tjänster erbjuder ni?',
    answer: 'Vi är specialiserade på utveckling av nya och befintliga webbplatser, och kan hjälpa till med andra digitala behov också.'
  },
  {
    question: 'Hur lång tid tar det att utveckla en webbplats?',
    answer: 'Utvecklingstiden varierar beroende på projektets storlek och komplexitet. Vi skriver all kod från grunden för att säkerställa att du får exakt det du önskar. En enkel sida tar 1-2 veckor, medan en större sida kan ta 4-8 veckor.'
  },
  {
    question: 'Erbjuder ni support efter lansering?',
    answer: 'Support och mindre ändringar ingår kostnadsfritt. Vid större ändringar kan en extra kostnad tillkomma.'
  },
  {
    question: 'Hur ser er prisstruktur ut?',
    answer: 'Vi erbjuder skräddarsydda lösningar, och priserna baseras på projektets omfattning och komplexitet. Kontakta oss för en kostnadsfri konsultation och en prisuppskattning.'
  },
  {
    question: 'Vilka tekniker använder ni?',
    answer: 'Vid byggnation från grunden använder vi oftast React, TypeScript och Tailwind CSS. Vi använder inga site builders utan skriver all kod rad för rad, vilket kan ta längre tid men påverkar inte priset. Önskas andra tekniker kan vi alltid anpassa oss efter dina behov.'
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