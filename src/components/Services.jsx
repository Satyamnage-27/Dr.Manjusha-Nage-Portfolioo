import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Services Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-blue-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-200">
                        <h3 className="text-xl font-semibold mb-4">Sports Injury Rehabilitation</h3>
                        <p>Expert care for athletes recovering from injuries.</p>
                    </div>
                    <div className="bg-blue-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-200">
                        <h3 className="text-xl font-semibold mb-4">Post-Operative Care</h3>
                        <p>Helping patients regain mobility after surgery.</p>
                    </div>
                    <div className="bg-blue-100 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-200">
                        <h3 className="text-xl font-semibold mb-4">Pain Management</h3>
                        <p>Comprehensive solutions for chronic pain relief.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
