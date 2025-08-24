"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";

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
  { href: "/undermaintenance", label: "Doctor Pro" },
  { href: "/undermaintenance", label: "AI Chatbot" },
  { href: "/undermaintenance", label: "Billing" },
  { href: "/undermaintenance", label: "SEO Platform" },
];

const quickLinks = [
  { href: "/undermaintenance", label: "About" },
  { href: "/undermaintenance", label: "Services" },
  { href: "/undermaintenance", label: "Contact" },
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
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/myenum.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5Z" />
              </svg>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/919042376479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 3.5A10.5 10.5 0 0 0 3.5 20L2 22l2.5-.7A10.5 10.5 0 0 0 20 3.5m-7.4 15.7c-1.8 0-3.5-.5-5-1.5l-.4-.2-3 .8.8-2.9l-.2-.5c-1-1.6-1.5-3.4-1.5-5.3c0-5 4-9 9-9c2.4 0 4.6.9 6.3 2.6c1.7 1.7 2.7 3.9 2.7 6.3c0 5-4.1 9.1-9.2 9.1m5-6.7c-.3-.2-1.8-.9-2.1-1c-.3-.1-.5-.2-.7.2c-.2.3-.8 1-.9 1.1c-.2.2-.3.2-.6 0c-.3-.2-1.2-.5-2.3-1.6c-.8-.8-1.3-1.7-1.5-2c-.2-.3 0-.5.1-.7c.1-.1.3-.3.4-.5c.1-.2.2-.3.3-.5c.1-.2 0-.4 0-.5c0-.2-.7-1.7-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.7.3c-.2.2-.9.9-.9 2.2c0 1.3.9 2.5 1 2.6c.1.2 1.7 2.6 4.2 3.6c.6.3 1.1.5 1.5.6c.6.2 1.1.2 1.5.1c.5-.1 1.8-.7 2.1-1.4c.3-.7.3-1.3.2-1.4Z" />
              </svg>
            </Link>

            {/* Mail */}
            <Link
              href="mailto:work@myenum,in"
              aria-label="Mail"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.11.89 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M20 8l-8 5l-8-5V6l8 5l8-5Z" />
              </svg>
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
                      className="hover:text-primary text-muted-foreground text-sm duration-150"
                    >
                      {link.label}
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
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-muted-foreground text-sm duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
              <Button type="submit" className="mt-3">
                <span>Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
          <span>&copy; {new Date().getFullYear()} MyEnum</span>
          <Link
            href="www.myenum.in"
            className="text-muted-foreground hover:text-primary text-sm"
          >
            All Rights Reserved
          </Link>
        </div>
      </div>
    </footer>
  );
}
