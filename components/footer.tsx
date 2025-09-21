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
  { href: "https://doctorpro.myenum.in/", label: "Doctor Pro" },
  { href: "/undermaintenance", label: "AI Chatbot" },
  { href: "/undermaintenance", label: "Billing" },
];

const quickLinks = [
  { href: "/undermaintenance", label: "About" },
  { href: "/undermaintenance", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/undermaintenance", label: "Blog" },
  { href: "/undermaintenance", label: "Careers" },
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
  { name: "Product", links: productLinks },
  { name: "Quick Links", links: quickLinks },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-3xl border border-gray-800">
      <div className="mx-auto max-w-5xl px-5 py-16 space-y-16">
        {/* Logo + Social Icons */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-8">
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
              href="mailto:myenumam@gmail.com"
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

            <form className="mt-6 w-full max-w-xs">
              <Label htmlFor="email" className="block text-sm font-medium mb-2">
                Subscribe to our newsletter
              </Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-4 text-gray-400 text-sm">
          <span>&copy; {new Date().getFullYear()} MyEnum</span>
          <Link
            href="https://www.myenum.in"
            className="hover:text-white underline transition-colors duration-150 mt-2 sm:mt-0"
          >
            All Rights Reserved
          </Link>
        </div>
      </div>
    </footer>
  );
}
