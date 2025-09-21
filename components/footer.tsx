"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Import react-icons
import { BsFacebook, BsInstagram, BsWhatsapp, BsEnvelope } from "react-icons/bs";

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
  {
    href: "https://www.facebook.com/p/My-enum-61572140267076/",
    label: "Facebook",
  },
  { href: "https://in.linkedin.com/company/myenum-am", label: "LinkedIn" },
];

const footerLinks = [
  { name: "Services", links: servicesLinks },
  { name: "Product", links: productLinks },
  { name: "Quick Links", links: quickLinks },
];

export default function Footer() {
  return (
    <footer className="m-1 rounded-3xl border">
      <div className="mx-auto max-w-5xl space-y-16 px-5 py-16">
        {/* Logo + Social Icons */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
          <Link
            href="/"
            aria-label="go home"
            className="flex items-center gap-2"
          >
            <Image
              src={`/iconc.webp`}
              alt="logo"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-2xl font-bold">MyEnum Agency</p>
          </Link>

          <div className="flex gap-3 text-2xl text-muted-foreground">
            {/* Social Icons with hover color */}
            <Link
              href="https://www.facebook.com/p/My-enum-61572140267076/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors duration-150"
            >
              <BsFacebook />
            </Link>

            <Link
              href="https://www.instagram.com/myenum.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors duration-150"
            >
              <BsInstagram />
            </Link>

            <Link
              href="https://wa.me/919042376479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-primary transition-colors duration-150"
            >
              <BsWhatsapp />
            </Link>

            <Link
              href="mailto:myenumam@gmail.com"
              aria-label="Mail"
              className="hover:text-primary transition-colors duration-150"
            >
              <BsEnvelope />
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {footerLinks.map((linksGroup, index) => (
            <div key={index}>
              <span className="font-medium">{linksGroup.name}</span>
              <ul className="mt-4 list-inside space-y-4">
                {linksGroup.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-primary hover:underline duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span className="text-sm font-medium">Socials</span>
            <ul className="mt-4 list-inside space-y-4">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary hover:underline duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <form className="mt-12 w-full max-w-xs">
              <div className="space-y-2.5">
                <Label htmlFor="email" className="block text-sm font-medium">
                  Subscribe to our newsletter
                </Label>
                <Input
                  className="input variant-mixed sz-md"
                  placeholder="Your email"
                  type="email"
                  id="email"
                  required
                  name="email"
                />
              </div>

              <Button type="submit" className="mt-3">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
          <span>&copy; {new Date().getFullYear()} MyEnum</span>
          <Link
            href="https://www.myenum.in"
            className="text-muted-foreground text-sm hover:text-primary hover:underline duration-150"
          >
            All Rights Reserved
          </Link>
        </div>
      </div>
    </footer>
  );
}
