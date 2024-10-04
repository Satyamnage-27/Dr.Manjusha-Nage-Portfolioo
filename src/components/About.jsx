import React from 'react';
import profileImage from '../assets/WhatsApp Image 2024-10-04 at 12.24.41 PM.jpeg'; // Update this path based on your folder structure

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About Dr. Manjusha Chate Nage</h2>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img 
                            src={profileImage} 
                            alt="Dr. Manjusha Chate Nage" 
                            className="rounded-lg shadow-lg" 
                        />
                    </div>
                    {/* Text Section */}
                    <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                        <p className="text-lg">
                            Dr. Manjusha Chate Nage is a dedicated physiotherapist with years of experience in helping patients regain their health and mobility. Her approach to physiotherapy is tailored to each individual's needs, ensuring that every patient receives the best possible care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
