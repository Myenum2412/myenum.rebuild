"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

const servicesLinks = [
  { href: "/undermaintenance", label: "Digital Marketing" },
  { href: "/undermaintenance", label: "Web Development" },
  { href: "/undermaintenance", label: "Graphic Design" },
  { href: "/undermaintenance", label: "SEO" },
  { href: "/undermaintenance", label: "Social Media Management" },
  { href: "/undermaintenance", label: "Content Creation" },
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
  { href: "/undermaintenance", label: "Contact" },
  { href: "/undermaintenance", label: "Blog" },
  { href: "/undermaintenance", label: "Careers" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const communityLinks = [
  { href: "https://www.instagram.com/myenum.in/", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/p/My-enum-61572140267076/", label: "Facebook", icon: Facebook },
  { href: "https://in.linkedin.com/company/myenum-am", label: "LinkedIn" },
];

const footerLinks = [
  {
    name: "Services",
    links: servicesLinks,
  },
  {
    name: "Product",
    links: productLinks,
  },
  {
    name: "Quick Links",
    links: quickLinks,
  },
];

export default function Footer() {
  return (
    <footer className="m-1 rounded-3xl border">
      <div className="mx-auto max-w-5xl space-y-16 px-5 py-16">
        {/* Logo + Social Icons */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
          <Link href="/" aria-label="go home">
            <Image
              src={`/iconc.webp`}
              alt="logo"
              width={30}
              height={30}
              className={`rounded-full`}
            />
          </Link>

          <div className="flex gap-3">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/p/My-enum-61572140267076/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary block p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Facebook className="size-5" />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/myenum.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Instagram className="size-5" />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/919042376479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-primary block p-2 rounded-full hover:bg-muted transition-colors"
            >
              <MessageCircle className="size-5" />
            </Link>

            {/* Mail */}
            <Link
              href="mailto:work@myenum,in"
              aria-label="Mail"
              className="text-muted-foreground hover:text-primary block p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Mail className="size-5" />
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {footerLinks.map((linksGroup, index) => (
            <div key={index}>
              <span className="font-medium">{linksGroup.name}</span>
              <ul className="mt-4 list-inside space-y-4">
                {linksGroup.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary text-muted-foreground text-sm duration-150 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials + Newsletter */}
          <div>
            <span className="text-sm font-medium">Socials</span>
            <ul className="mt-4 list-inside space-y-4">
              {communityLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary text-muted-foreground text-sm duration-150 flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {IconComponent && <IconComponent className="size-4" />}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <form className="mt-12 w-full max-w-xs">
              <div className="space-y-2.5">
                <Label className="block text-sm font-medium" htmlFor="email">
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
              <Button type="submit" className="mt-3 gap-1">
                <span>Subscribe</span>
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
          <span>&copy; {new Date().getFullYear()} MyEnum</span>
          <Link
            href="https://www.myenum.in"
            className="text-muted-foreground hover:text-primary text-sm"
          >
            All Rights Reserved
          </Link>
        </div>
      </div>
    </footer>
  );
}
