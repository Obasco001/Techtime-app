import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd definition."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings."
  },
  {
    question: "Are the courses lifetime?",
    answer: "Once purchased, you have lifetime access to the course materials and any future updates."
  },
  {
    question: "Do I get certified after taking courses?",
    answer: "Yes, you receive a verified certificate of completion for every course you finish."
  },
  {
    question: "How do I reach out to mentors?",
    answer: "You can message mentors directly through our platform or schedule one-on-one sessions."
  },
  {
    question: "Do we get job ready after taking courses?",
    answer: "Our career tracks are designed to build job-ready skills with real-world projects and portfolio reviews."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">
            High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold ${openIndex === idx ? 'text-primary-500' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-gray-900" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-900" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 leading-relaxed pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};