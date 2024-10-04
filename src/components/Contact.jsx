import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Contact Dr. Manjusha</h2>
                <p className="mb-4">Feel free to get in touch to schedule an appointment or ask any questions.</p>

                {/* Display Email and Phone */}
                <div className="text-lg">
                    <p>Email: <a href="mailto:dr.manjusha@example.com" className="underline">dr.manjusha@gmail.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="underline">9021352917</a></p>
                </div>

                {/* Optional: A button to mail */}
                <div className="mt-8">
                    <a href="mailto:dr.manjusha@example.com" className="bg-white text-blue-600 py-2 px-4 rounded-lg">
                        Send an Email
                    </a>
                    <a href='https://www.linkedin.com/in/dr-manjusha-nage-8204811aa/' target='_blank' className="bg-white text-blue-600 py-2 px-4 rounded-lg">Connect on Linkedin</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
