import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { emailConfig } from '../config/emailsjs.config';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      to_email: emailConfig.toEmail,
      from_name: formRef.current.name.value,
      from_email: formRef.current.email.value,
      message: formRef.current.message.value,
    };

    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-primary-light dark:bg-primary-dark text-white py-2 px-4 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;