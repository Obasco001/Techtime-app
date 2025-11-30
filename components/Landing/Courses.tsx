import React, { useState } from 'react';
import { Star, Clock, BookOpen, User } from 'lucide-react';

const courses = [
    {
        category: 'Design',
        title: 'Introduction to user research in UX Design',
        rating: 4.7,
        reviews: 32.7,
        duration: '23hrs 50mins',
        lessons: 15,
        author: 'Leonard Victor',
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?q=80&w=600&auto=format&fit=crop',
        avatar: 'https://i.pravatar.cc/100?img=1'
    },
    {
        category: 'Marketing',
        title: 'Introduction to new marketing audience',
        rating: 4.7,
        reviews: 8.7,
        duration: '22hrs 30mins',
        lessons: 22,
        author: 'Jeffrey Williams',
        price: 32.00,
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop',
        avatar: 'https://i.pravatar.cc/100?img=2'
    },
    {
        category: 'Development',
        title: 'Introduction to HTML, CSS & Bootstrap',
        rating: 4.7,
        reviews: 12.7,
        duration: '45hrs 50mins',
        lessons: 55,
        author: 'Claretta Mason',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
        avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
        category: 'Development',
        title: 'Introduction to javascript, Git & Github',
        rating: 4.7,
        reviews: 32.7,
        duration: '30hrs 50mins',
        lessons: 22,
        author: 'Jessica Duke',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=600&auto=format&fit=crop',
        avatar: 'https://i.pravatar.cc/100?img=4'
    },
    {
        category: 'Marketing',
        title: 'Introduction to outroom marketing analysis',
        rating: 4.7,
        reviews: 4.7,
        duration: '33hrs 50mins',
        lessons: 26,
        author: 'Samuel Jacobs',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
        avatar: 'https://i.pravatar.cc/100?img=5'
    },
    {
        category: 'Marketing',
        title: 'Introduction to live marketing analysis',
        rating: 4.7,
        reviews: 15.7,
        duration: '10hrs 50mins',
        lessons: 32,
        author: 'Adam Smith',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
        avatar: 'https://i.pravatar.cc/100?img=6'
    }
];

export const Courses = () => {
  const [activeTab, setActiveTab] = useState('All Categories');
  const tabs = ['All Categories', 'Design', 'Development', 'Marketing'];

  const filteredCourses = activeTab === 'All Categories' 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  return (
    <section className="py-24 bg-[#F8F9FC]" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse Our Popular Courses</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded font-medium transition-colors ${
                            activeTab === tab 
                            ? 'bg-primary-500 text-white' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        
                        <div className="flex justify-between items-center mb-3">
                            <span className={`text-xs px-3 py-1 rounded-full font-medium 
                                ${course.category === 'Design' ? 'bg-blue-100 text-blue-600' : 
                                  course.category === 'Marketing' ? 'bg-purple-100 text-purple-600' : 
                                  'bg-pink-100 text-pink-600'}`}>
                                {course.category}
                            </span>
                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                                <span className="text-gray-900 font-bold">{course.rating}</span>
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span>({course.reviews}k+)</span>
                            </div>
                        </div>

                        <h3 className="font-bold text-lg text-gray-900 mb-4 line-clamp-2 h-14">
                            {course.title}
                        </h3>

                        <div className="flex justify-between items-center text-gray-500 text-xs mb-6">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                            </div>
                            <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {course.lessons} Lessons
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <img src={course.avatar} alt={course.author} className="w-8 h-8 rounded-full" />
                                <span className="text-sm font-bold text-gray-900">{course.author}</span>
                            </div>
                            <span className="text-primary-500 font-bold text-lg">${course.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="bg-primary-500 text-white px-8 py-3 rounded font-bold hover:bg-primary-600 transition-colors">
                    Explore All Courses
                </button>
            </div>
        </div>
    </section>
  );
};