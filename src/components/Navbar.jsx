import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Dr. Manjusha Chate Nage</h1>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="text-white hover:underline">About</a></li>
                    <li><a href="#services" className="text-white hover:underline">Services</a></li>
                    <li><a href="#patient-experience" className="text-white hover:underline">Patient Experience</a></li>
                    <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
