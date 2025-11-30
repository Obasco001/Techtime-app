import React from 'react';

const testimonials = [
  {
    content: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education.",
    author: "Bella Moon",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=9"
  },
  {
    content: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education.",
    author: "Samuel Fortune",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=8"
  },
  {
    content: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition. hbuild Your Future With Our Quality Education.",
    author: "Bryce Jason",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=11"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F8F9FC]" id="testimonial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What our clients are saying</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};