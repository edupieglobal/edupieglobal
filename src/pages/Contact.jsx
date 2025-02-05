import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import sendEmail from '../services/emailService'; // Import the sendEmail function

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      await sendEmail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Contact Form Section */}
      <section className="mb-8">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full p-3 border border-gray-300"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 ${isLoading ? 'bg-gray-400' : 'bg-blue-500'} text-white hover:bg-blue-600`}
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? 'Sending...' : 'Send Message'} {/* Show loading text */}
          </button>
        </form>
      </section>

      {/* Get In Touch via Social Media */}
      <section className="mb-8 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-700 mb-4">Follow us on social media or get in touch directly via email.</p>

        <div className="flex justify-center space-x-6">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/company/edu-pie-global-llp/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-800">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/edupieglobal?igsh=MTNqeTg1OGRqdmV5cg==" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600">
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Email Section */}
        <div className="mt-6 text-lg text-gray-700">
          <p className="mb-2">Or reach out to us via email:</p>
          <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">
            <FaEnvelope size={20} className="inline mr-2" />
            bhimsen@edupieglobal.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
