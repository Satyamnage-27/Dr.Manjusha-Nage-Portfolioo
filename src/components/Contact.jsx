import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Contact Dr. Manjusha</h2>
                <p className="mb-4 text-lg">Feel free to get in touch to schedule an appointment or ask any questions.</p>

                {/* Display Email and Phone */}
                <div className="text-lg mb-6">
                    <p>Email: <a href="mailto:dr.manjusha@example.com" className="underline hover:text-blue-300">dr.manjusha@gmail.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="underline hover:text-blue-300">9021352917</a></p>
                </div>

                {/* Enhanced Buttons */}
                <div className="mt-8 flex justify-center space-x-4">
                    <a 
                        href="mailto:dr.manjusha@example.com" 
                        className="bg-white text-blue-600 py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
                    >
                        Send an Email
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/dr-manjusha-nage-8204811aa/' 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className="bg-white text-blue-600 py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
                    >
                        Connect on LinkedIn
                    </a>
                </div>

                {/* Optional: Additional CTA */}
                <div className="mt-6">
                    <p className="text-sm">Follow Dr. Manjusha for health tips on social media!</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
