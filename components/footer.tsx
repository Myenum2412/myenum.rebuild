"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Correct lucide-react imports
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

const servicesLinks = [
  { href: "/undermaintenance", label: "Web Development" },
  { href: "/undermaintenance", label: "Software Developer" },
  { href: "/undermaintenance", label: "Digital Marketing" },
  { href: "/undermaintenance", label: "SEO" },
  { href: "/undermaintenance", label: "Social Media Management" },
  { href: "/undermaintenance", label: "Video Editing" },
];

const productLinks = [
  { href: "https://www.thedoctorpro.com/", label: "The Doctor Pro" },
  { href: "/undermaintenance", label: "AI Chatbot" },
  { href: "/undermaintenance", label: "Billing" },
];

const quickLinks = [
  { href: "/undermaintenance", label: "About" },
  { href: "/undermaintenance", label: "Services" },
  { href: "/product", label: "Our Product" },
  { href: "/undermaintenance", label: "Blog" },
  { href: "/undermaintenance", label: "Privacy Policy" },
  { href: "/undermaintenance", label: "Terms of Service" },
];

const communityLinks = [
  { href: "https://www.instagram.com/myenum.in/", label: "Instagram" },
  { href: "https://www.facebook.com/p/My-enum-61572140267076/", label: "Facebook" },
  { href: "https://in.linkedin.com/company/myenum-am", label: "LinkedIn" },
];

const footerLinks = [
  { name: "Services", links: servicesLinks },
  { name: "Quick Links", links: quickLinks },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-3xl border border-gray-800">
      <div className="mx-auto max-w-5xl px-5 py-16 space-y-16">
        {/* Logo + Social Icons */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link href="/" aria-label="go home" className="flex items-center gap-2">
              <Image
                src="/iconc.webp"
                alt="logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-2xl font-bold">MyEnum Agency</p>
            </Link>
          </div>

          <div className="flex gap-4 text-2xl">
            <Link
              href="https://www.facebook.com/p/My-enum-61572140267076/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors duration-150"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/myenum.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors duration-150"
            >
              <Instagram />
            </Link>
            <Link
              href="https://wa.me/919042376479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-500 transition-colors duration-150"
            >
              <MessageCircle />
            </Link>
            <Link
              href="mailto:developer@myenum.in"
              aria-label="Mail"
              className="hover:text-yellow-400 transition-colors duration-150"
            >
              <Mail />
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4">{group.name}</h3>
              <ul className="space-y-3">
                {group.links.map((link, id) => (
                  <li key={id}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white hover:underline transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-lg mb-4">Socials</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-white hover:underline transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Partnership</h3>
            <Link href="/partnership" className="flex flex-col gap-3 group transition-opacity">
              <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors uppercase tracking-wider">Official Partner</span>
              <div className="bg-white/5 p-4 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all group-hover:border-primary/30 w-fit backdrop-blur-sm">
                <Image
                  src="/image/freshworkslogo.svg"
                  alt="Freshworks Partner"
                  width={80}
                  height={80}
                  className="object-contain opacity-90 group-hover:opacity-100 transition-all shadow-sm"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8 text-gray-500 text-xs tracking-wide">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mb-4 sm:mb-0">
            <span>&copy; {new Date().getFullYear()} MyEnum Agency</span>
            <span className="hidden sm:block">|</span>
            <span>All Rights Reserved</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
