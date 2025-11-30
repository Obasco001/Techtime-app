import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Gamepad2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#000f24] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
               <span className="text-2xl font-bold italic" style={{ fontFamily: 'cursive' }}>TechTime</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Reach out to us on any of our social media networks
            </p>
            <div className="flex gap-4">
               <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
               <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
               <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
               <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
               <Gamepad2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Useful Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Courses</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">Our Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Community</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Centers</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">Suggestion</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe Us</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="nft123@gmail.com" 
                className="bg-[#2C3444] text-white px-4 py-2 rounded-l w-full focus:outline-none border border-transparent focus:border-primary-500"
              />
              <button className="bg-primary-500 px-4 py-2 rounded-r font-bold hover:bg-primary-600">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};