"use client";

import { useState } from "react";
import { X, Send, User, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { WhatsAppIcon } from "@/components/logos";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919042376479";

const quickMessages = [
  "I need a quote for web development",
  "Tell me about your digital marketing services",
  "I want to discuss a project",
  "Other inquiry",
];

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSendMessage = async () => {
    if (!message) return;

    const text = `Hello MyEnum,\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    if (email) {
      try {
        await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name,
            source: "whatsapp_widget",
            message,
          }),
        });
      } catch (e) {
        // Silently continue
      }
    }

    toast.success("Opening WhatsApp...");
    setIsOpen(false);
    setShowForm(false);
    setMessage("");
    setName("");
    setEmail("");
  };

  const handleQuickMessage = (msg: string) => {
    setMessage(msg);
    setShowForm(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 antialiased">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-80 sm:w-[400px] bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Premium Header */}
            <div className="relative p-6 pb-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 animate-gradient-x" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-[2px]">
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                        <WhatsAppIcon className="w-7 h-7 text-emerald-500" />
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-slate-950 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg flex items-center gap-2">
                      MyEnum Support
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </h4>
                    <p className="text-emerald-500/80 text-xs font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      Online • Typically replies in 1hr
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-6 pt-2 space-y-6">
              <AnimatePresence mode="wait">
                {!showForm ? (
                  <motion.div
                    key="quick-view"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4">
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Welcome to <span className="text-emerald-400 font-semibold">MyEnum Agency</span>. 👋 How can we transform your digital vision today?
                        </p>
                        <span className="text-[10px] text-slate-500 mt-2 block">10:30 AM</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] px-1">
                        Select an Inquiry
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {quickMessages.map((msg, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleQuickMessage(msg)}
                            className="group relative w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
                          >
                            <span className="text-slate-300 text-sm group-hover:text-emerald-300 transition-colors">
                              {msg}
                            </span>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                              <Send className="w-3 h-3 text-emerald-500" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setShowForm(true)}
                      className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98]"
                    >
                      Start Custom Chat
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-white/5 border-white/10 pl-10 h-12 rounded-xl text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                          type="email"
                          placeholder="Email Address (Optional)"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-white/5 border-white/10 pl-10 h-12 rounded-xl text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all"
                        />
                      </div>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-slate-500" />
                        <textarea
                          placeholder="How can we help?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-3 pl-10 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all resize-none min-h-[120px]"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowForm(false)}
                        className="flex-1 py-3 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSendMessage}
                        disabled={!message}
                        className="flex-[2] py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2"
                      >
                        Connect Now <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Tag */}
            <div className="p-4 bg-white/5 border-t border-white/5 text-center">
              <p className="text-[10px] text-slate-600 font-medium tracking-widest uppercase">
                Secure & Encrypted • Powered by MyEnum
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-[22px] shadow-2xl flex items-center justify-center transition-all duration-500 overflow-hidden ${isOpen
              ? "bg-slate-900 border border-white/10 rotate-90"
              : "bg-emerald-500 border border-emerald-400/50"
            }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
              >
                <X className="w-8 h-8 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative"
              >
                <WhatsAppIcon className="w-9 h-9 text-slate-950" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
