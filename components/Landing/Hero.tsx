import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';
import { Button } from '../Button';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 bg-primary-500 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-green-400"></div>
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="absolute bottom-20 left-1/4 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-purple-400 border-r-[10px] border-r-transparent rotate-45"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                
                {/* Left Text */}
                <div className="flex-1 text-center lg:text-left z-10">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Grow your skills to advance your career path
                    </h1>
                    <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <Button variant="outline" size="lg" onClick={onCtaClick} className="border-white text-white hover:bg-white hover:text-primary-500 flex items-center gap-2">
                            Get Started Now <ArrowUpRight className="w-5 h-5" />
                        </Button>
                        <Button variant="white" size="lg" onClick={onCtaClick}>
                            Enroll Now
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-primary-500" />
                            ))}
                        </div>
                        <div className="text-white text-left">
                            <p className="font-bold text-lg leading-none">255k+</p>
                            <p className="text-xs text-gray-300">Previews</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative w-full flex justify-center lg:justify-end">
                    <div className="relative z-10 w-[80%] max-w-[500px]">
                        {/* Main Image Mask/Shape */}
                        <div className="relative">
                           <img 
                             src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                             alt="Student" 
                             className="w-full h-auto rounded-b-[100px] rounded-tl-[50px] rounded-tr-[50px] border-4 border-white/10 shadow-2xl"
                           />
                           
                           {/* Floating Icons */}
                           <div className="absolute -top-10 -left-10 bg-white p-3 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" className="w-8 h-8" />
                           </div>
                           <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-xl shadow-lg animate-pulse">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-8 h-8" />
                           </div>
                           <div className="absolute bottom-10 -left-5 bg-white p-3 rounded-xl shadow-lg">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" alt="WordPress" className="w-8 h-8" />
                           </div>
                           
                           {/* Decorative Icon */}
                           <div className="absolute -top-16 right-0 text-yellow-400">
                                <Zap className="w-12 h-12 fill-current" />
                           </div>
                        </div>
                    </div>
                    
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-0"></div>
                </div>
            </div>
        </div>
    </section>
  );
};