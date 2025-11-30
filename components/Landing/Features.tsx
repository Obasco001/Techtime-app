import React from 'react';
import { Volume2, Radio, Video, FileText, Users, Clock, DollarSign, Layout } from 'lucide-react';

export const Features = () => {
  return (
    <>
        {/* Brand Strip */}
        <div className="bg-[#CCDBF0]/30 py-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-70">
                <span className="text-2xl font-bold font-sans text-gray-500">zoom</span>
                <span className="text-2xl font-bold font-sans text-gray-500">stripe</span>
                <span className="text-2xl font-bold font-sans text-gray-500">monday.com</span>
                <span className="text-2xl font-bold font-sans text-gray-500">slack</span>
                <span className="text-2xl font-bold font-sans text-gray-500">Dropbox</span>
            </div>
        </div>

        {/* High Quality Section */}
        <section className="py-24 bg-[#F8F9FC]" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="relative">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight relative z-10">
                                High quality video, audio <br /> & live classes
                            </h2>
                            <div className="absolute -top-6 -left-6 text-primary-500 transform -rotate-12">
                                <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                                    <path d="M10 25C10 25 15 10 25 10C35 10 40 25 40 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </div>
                        <p className="text-gray-500 mb-10 leading-relaxed">
                            High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image
                        </p>
                        
                        <button className="bg-primary-500 text-white px-6 py-3 rounded mb-10 font-bold hover:bg-primary-600 transition-colors">
                            View Courses
                        </button>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <Volume2 className="w-5 h-5 text-green-500" />, label: 'Audio Classes', bg: 'bg-green-50' },
                                { icon: <Radio className="w-5 h-5 text-red-500" />, label: 'Live Classes', bg: 'bg-red-50' },
                                { icon: <Video className="w-5 h-5 text-purple-500" />, label: 'Recorded Classes', bg: 'bg-purple-50' },
                                { icon: <FileText className="w-5 h-5 text-blue-500" />, label: '50+ Notes', bg: 'bg-blue-50' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`p-2 rounded ${item.bg}`}>
                                        {item.icon}
                                    </div>
                                    <span className="font-bold text-gray-700">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 order-1 lg:order-2 relative">
                         <div className="relative z-10">
                             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="Learning" className="rounded-3xl shadow-2xl z-10 relative" />
                             
                             {/* Floating Card */}
                             <div className="absolute top-10 -left-10 bg-white p-2 rounded-lg shadow-lg z-20 flex -space-x-2">
                                {[1,2,3,4].map(n => (
                                    <img key={n} src={`https://i.pravatar.cc/100?img=${n+20}`} className="w-8 h-8 rounded-full border border-white" />
                                ))}
                                <div className="pl-4 flex items-center">
                                    <span className="text-xs font-bold text-gray-700">255k+ Enrolled</span>
                                </div>
                             </div>

                             <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-dashed border-gray-300 rounded-3xl -z-10"></div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Best Section */}
        <section className="py-24 bg-white" id="about">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col lg:flex-row items-center gap-16">
                     <div className="flex-1">
                        <div className="relative">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                This is why we are best from others
                            </h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition.
                            </p>
                            <img 
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                                alt="Student Studying" 
                                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                            />
                        </div>
                     </div>
                     <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                         {[
                             { 
                                 icon: <Layout className="w-6 h-6 text-white" />, 
                                 title: 'Experienced Mentors', 
                                 color: 'bg-primary-500',
                                 desc: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.' 
                             },
                             { 
                                 icon: <Clock className="w-6 h-6 text-white" />, 
                                 title: 'One-On-One Meetings', 
                                 color: 'bg-yellow-400',
                                 desc: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.' 
                             },
                             { 
                                 icon: <Users className="w-6 h-6 text-white" />, 
                                 title: 'One-on-One Meetings', 
                                 color: 'bg-pink-500',
                                 desc: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.' 
                             },
                             { 
                                 icon: <DollarSign className="w-6 h-6 text-white" />, 
                                 title: 'Affordable Prices', 
                                 color: 'bg-orange-500',
                                 desc: 'High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition.' 
                             },
                         ].map((card, i) => (
                             <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-50 hover:border-primary-100 transition-colors">
                                 <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                                     {card.icon}
                                 </div>
                                 <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                                 <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
        </section>
    </>
  );
}