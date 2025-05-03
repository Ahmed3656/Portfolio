'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconCheck } from '@tabler/icons-react';

interface MessageFormProps {
  onClose: () => void
}

export const MessageForm = ({ onClose }: MessageFormProps) => {
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      setTimeout(() => {
        setIsSuccess(false)
        setMessage("")
        setName("")
        setEmail("")
        onClose()
      }, 2000)
    }, 1500)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full max-h-40 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
          placeholder="Tell me about your project..."
          required
        />
      </div>

      <motion.button
        type="submit"
        className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple/80 to-blue-100/80 px-4 py-2 font-medium text-white shadow-lg hover:from-purple hover:to-blue-100 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting || isSuccess}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />

        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : isSuccess ? (
          <span className="flex items-center justify-center">
            <IconCheck className="mr-2 h-4 w-4" />
            Sent Successfully!
          </span>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  )
}
