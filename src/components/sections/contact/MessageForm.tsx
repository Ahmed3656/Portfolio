'use client';

import React, { useState } from 'react';
import { FaPaperPlane, FaShieldAlt, FaSpinner } from 'react-icons/fa';
import { ContactFormData } from '@/types';
import { motion } from 'framer-motion';

import { useToastHelpers } from '@/components';
import { ContentFilter, EmailService } from '@/lib';

type MessageFormProps = {
  onClose: () => void;
};

export const MessageForm: React.FC<MessageFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, danger, info } = useToastHelpers();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      info('Verifying...', 'Checking email address and content');

      // Content filtering with email verification
      const filterResult = await ContentFilter.filterContent(formData);

      if (!filterResult.isValid) {
        danger('Message Blocked', filterResult.reason || 'Content validation failed');
        setIsSubmitting(false);
        return;
      }

      info('Sending...', 'Your message is being sent securely');
      await EmailService.sendEmail(formData);

      success('Message Sent!', "Thank you! I'll get back to you within 24 hours.");

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      danger('Failed to Send', 'Please try again later or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content Filter Notice */}
      <div className="flex items-center space-x-2 text-sm text-white-100">
        <FaShieldAlt className="w-4" />
        <span>Messages are filtered for spam and inappropriate content</span>
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-white/10 bg-black-300 px-4 py-3 text-white placeholder-white-100 focus:border-purple/50 focus:outline-none focus:ring-2 focus:ring-purple/20 transition-all backdrop-blur-sm"
          placeholder="Your full name"
          required
          maxLength={100}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-white/10 bg-black-300 px-4 py-3 text-white placeholder-white-100 focus:border-purple/50 focus:outline-none focus:ring-2 focus:ring-purple/20 transition-all backdrop-blur-sm"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message *
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full rounded-lg border border-white/10 bg-black-300 px-4 py-3 text-white placeholder-white-100 focus:border-purple/50 focus:outline-none focus:ring-2 focus:ring-purple/20 transition-all resize-none backdrop-blur-sm"
            placeholder="Tell me about your project, question, or how I can help you..."
            required
            minLength={10}
            maxLength={5000}
          />
          <div className="absolute bottom-2 right-2 text-xs text-white-100">{formData.message.length}/5000</div>
        </div>
      </div>

      <motion.button
        type="submit"
        className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple to-blue-100 px-6 py-3 font-semibold text-black shadow-lg hover:shadow-purple/25 focus:outline-none focus:ring-2 focus:ring-purple/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />

        <span className="relative flex items-center justify-center">
          {isSubmitting ? (
            <>
              <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </span>
      </motion.button>

      <p className="text-xs text-white-100 text-center">
        Your message will be sent securely. I typically respond within 24 hours.
      </p>
    </motion.form>
  );
};
