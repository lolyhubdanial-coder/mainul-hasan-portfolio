"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 text-primary text-sm font-medium mb-4">
          <Mail size={16} />
          Get In Touch
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
          Let&apos;s Build Something <span className="text-primary">Together</span>
        </h1>
        <p className="text-on-surface-variant text-lg">
          Currently open for new opportunities and interesting projects. Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-on-surface-variant">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-on-surface-variant">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-on-surface-variant">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-bold rounded-xl px-8 py-4 hover:bg-primary-container transition-colors emerald-glow"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8 flex flex-col"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant mb-1">Email</p>
                <p className="font-medium text-on-surface">hello@mainul.dev</p>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant mb-1">Phone</p>
                <p className="font-medium text-on-surface">+880 1234 567890</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex items-center gap-6">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-primary shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-on-surface-variant mb-1">Location</p>
              <p className="font-medium text-on-surface">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="relative w-full flex-1 min-h-[200px] rounded-3xl overflow-hidden glass-panel border-primary/20">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtRLDnUFYLTw233CXPBsyGwJxxOA2WJ0ZAzERHLdvCmbbMG58aGT2-03NDz9BxjjxNNR6ed49TtV-RLLLi4U8AuvhWP0u2B6L4cKUaOOXJUYjWPjAJpcqjTptTWCT-u1EF85NCEKVbtQLYoTkT-sGYR55TCGFAHbDA3_YzCLe3PYQuk-vtAnyNutgnaqN2NqnY8gEr_19d0psK6k_FVFLJhy3TNzJWM0HmMEBWaUd-BD662CAkUqLX4tGfNNfJbhqYO7Fb8btTd4A"
              alt="Map Location"
              fill
              className="object-cover opacity-60 mix-blend-overlay grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-color"></div>
            
            {/* Map Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-primary rounded-full relative border-2 border-surface"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
