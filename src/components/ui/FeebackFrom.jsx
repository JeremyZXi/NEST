import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
emailjs.init("FzfvItSTzWck2Mipl");

function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState(null);
    const [isTurnstileLoaded, setIsTurnstileLoaded] = useState(false);
    const turnstileRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);

        // Load Turnstile script
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.onload = () => setIsTurnstileLoaded(true);
        document.body.appendChild(script);

        return () => {
            clearTimeout(timer);
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (isTurnstileLoaded && turnstileRef.current) {
            window.turnstile.render(turnstileRef.current, {
                sitekey: '0x4AAAAAAAkVP6d12WMzfOMu', // Replace with your actual Turnstile site key
                callback: function(token) {
                    setTurnstileToken(token);
                },
                'error-callback': function() {
                    // Handle error, reset token
                    setTurnstileToken(null);
                }
            });
        }
    }, [isTurnstileLoaded]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!turnstileToken) {
            alert('Please complete the CAPTCHA');
            return;
        }

        try {
            const templateParams = {
                from_name: name || 'Anonymous',
                from_email: email || 'Not provided',
                to_email: 'keycas.executives@outlook.com',
                message: feedback
            };

            const response = await emailjs.send(
                'service_zmganv4',
                'template_rg2jspp',
                templateParams
            );

            console.log('SUCCESS!', response.status, response.text);
            setShowPopup(true);
            setName('');
            setEmail('');
            setFeedback('');
            setTurnstileToken(null);
            if (window.turnstile) {
                window.turnstile.reset();
            }
            setTimeout(() => setShowPopup(false), 3000);
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send feedback. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black p-4">
            <div
                className={`bg-[#4A249D] p-8 rounded-lg w-full max-w-2xl transition-all duration-500 ease-out ${
                    isVisible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-75'
                }`}
            >
                <h1 className="text-white text-3xl font-bold mb-4 text-center">
                    Email to NEST Your Feedback!
                </h1>
                <p className="text-white mb-6 text-lg text-center">
                    We value your input! Please share your thoughts with us.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name (optional)"
                            className="w-1/2 p-2 rounded-md text-black"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email (optional)"
                            className="w-1/2 p-2 rounded-md text-black"
                        />
                    </div>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Insert your feedback here..."
                        className="w-full h-40 p-2 rounded-md text-black"
                        required
                    />
                    <div className="flex justify-center items-center">
                        <div ref={turnstileRef}></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            type="submit"
                            className="bg-[#4A249D] text-white px-6 py-2 rounded-full hover:bg-[#3D1E80] transition duration-300 border border-white"
                            disabled={!turnstileToken}
                        >
                            {turnstileToken ? 'Send' : 'Verifying...'}
                        </button>
                    </div>
                </form>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-[#4A249D] text-white p-4 rounded-lg shadow-lg">
                        <p className="text-lg font-semibold">Thank you!</p>
                        <p>Your feedback has been received.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeedbackForm;