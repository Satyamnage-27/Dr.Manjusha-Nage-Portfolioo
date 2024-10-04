import React from 'react';
import profileImage from '../assets/WhatsApp Image 2024-10-04 at 12.24.41 PM.jpeg'; // Update this path based on your folder structure

const About = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-blue-200 to-blue-400">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-8">About</h2>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Image Section */}
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src={profileImage} 
                            alt="Dr. Manjusha Chate Nage" 
                            className="rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                        <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                            <p className="text-lg text-gray-700">
                                "I am a dedicated physiotherapist with years of experience in helping patients regain their health and mobility. My approach to physiotherapy is tailored to each individual's needs, ensuring that every patient receives the best possible care."
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a href="#services" className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow-lg transition duration-300 hover:scale-105">
                        Explore My Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
