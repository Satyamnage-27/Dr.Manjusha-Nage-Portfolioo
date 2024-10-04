import React from 'react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white h-screen flex items-center justify-center relative"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage:
                        'url("https://www.example.com/your-physiotherapy-image.jpg")', // Replace with an actual image URL
                }}
            ></div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-extrabold drop-shadow-md">
                    Your Journey to Wellness Begins Here
                </h1>
                <p className="mt-4 text-lg font-medium drop-shadow-md">
                    Physiotherapy solutions designed for you
                </p>
                <a
                    href="#contact"
                    className="mt-6 inline-block bg-white text-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors"
                >
                    Book an Appointment
                </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"></div>
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </section>
    );
};

export default Hero;
