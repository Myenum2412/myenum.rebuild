"use client";

import { useState } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919042376479"; // Replace with actual number

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
    const text = `Hello MyEnum,\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Also save lead to backend
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
        // Continue even if API fails
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
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-green-500 rounded-full"></span>
              </div>
              <div>
                <h4 className="text-white font-semibold">MyEnum Agency</h4>
                <p className="text-green-100 text-xs">Typically replies within an hour</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {!showForm ? (
              <>
                <div className="bg-white/10 rounded-2xl rounded-tl-md p-3">
                  <p className="text-white text-sm">
                    Hi there! 👋 How can we help you today?
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Quick Messages</p>
                  {quickMessages.map((msg, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickMessage(msg)}
                      className="w-full text-left p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-200 text-sm transition-all hover:border-green-500/50"
                    >
                      {msg}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white font-medium transition-all"
                >
                  Send a custom message
                </button>
              </>
            ) : (
              <div className="space-y-3">
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <textarea
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  rows={3}
                />
                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowForm(false)}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" /> Send
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
}