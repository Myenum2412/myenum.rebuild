"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Thanks for subscribing! Check your inbox for updates.");
        setIsVisible(false);
        localStorage.setItem("newsletter_subscribed", "true");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Don't show again in this session
    sessionStorage.setItem("exit_intent_shown", "true");
  }, []);

  useEffect(() => {
    // Check if already subscribed or shown
    const isSubscribed = localStorage.getItem("newsletter_subscribed");
    const alreadyShown = sessionStorage.getItem("exit_intent_shown");

    if (isSubscribed || alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exit_intent_shown", "true");
      }
    };

    // Also trigger after 30 seconds for scroll-based intent
    const scrollTimer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem("exit_intent_shown")) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exit_intent_shown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(scrollTimer);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative z-10 mx-4 w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Wait! Before You Go
          </h3>

          <p className="text-gray-300 mb-6">
            Get exclusive insights on software development and digital marketing delivered to your inbox. Join 10,000+ subscribers getting ahead of the curve.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
              required
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⟳</span> Subscribing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" /> Get Free Insights
                </span>
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}