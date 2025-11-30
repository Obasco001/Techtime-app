import React from 'react';
import { Button } from '../Button';

export const Community = () => {
  return (
    <section className="py-24 bg-primary-500 relative overflow-hidden text-center" id="community">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <p className="text-white/60 text-sm font-bold tracking-widest uppercase mb-4">Join Our Community</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Are you ready to connect with the future talent of the tech world
        </h2>
        <p className="text-white/80 mb-10">
          Meet Up With Other Techstars And Grow Together
        </p>
        
        <div className="mb-12 relative h-64 w-full max-w-2xl mx-auto">
            {/* Abstract World Map Dots Representation */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/World_map_polkadot.svg')] bg-contain bg-no-repeat bg-center filter invert"></div>
            
            {/* Avatars placed manually to simulate the design */}
            <img src="https://i.pravatar.cc/100?img=12" className="absolute top-10 left-10 w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/100?img=15" className="absolute top-20 right-20 w-12 h-12 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/100?img=22" className="absolute bottom-10 left-1/3 w-14 h-14 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/100?img=33" className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full border-2 border-white -translate-x-1/2 -translate-y-1/2" />
            <img src="https://i.pravatar.cc/100?img=44" className="absolute bottom-20 right-1/4 w-10 h-10 rounded-full border-2 border-white" />
        </div>

        <Button variant="white" size="lg">
          Join Our Community
        </Button>
      </div>
    </section>
  );
};