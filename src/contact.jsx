import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://contact-api-6140554430.europe-west1.run.app/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });

            const data = await response.json();

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert(error.message || 'An error occurred while sending your message');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div className="flex flex-col items-center  text-center h-[92vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="relative">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8">We'd love to hear from you!</p>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-2 mb-4 rounded bg-gray-800 text-white sm:max-sm:w-10/12"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-2 mb-4 rounded bg-gray-800 text-white sm:max-sm:w-10/12"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full p-2 mb-4 rounded bg-gray-800 text-white sm:max-sm:w-10/12"
                    rows="4"
                ></textarea>
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white sm:max-sm:w-10/12"
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    </div>
    )
}

export default Contact;