'use client'

import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  // { name: 'Our Product', href: '/product' },
  // { name: 'Testimonials', href: '/testimonials' },
  { name: 'Careers', href: '/careers' },
  {
    name: 'Locations',
    href: '#',
    children: [
      { name: 'Tamil Nadu', href: '/tamil-nadu' },
      { name: 'Kerala', href: '/kerala' },
      { name: 'Karnataka', href: '/karnataka' },
      { name: 'UK', href: '/uk' },
      { name: 'Germany', href: '/germany' },
    ]
  },
  { name: 'Partnership', href: '/partnership' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed z-50 w-full px-2">
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled &&
            'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex items-center justify-between gap-6 py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src={`/iconc.webp`}
                  alt="Myenum Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-semibold text-lg">MyEnum</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <ul className="flex gap-6 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    {item.children ? (
                      <>
                        <button
                          className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150"
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          onMouseEnter={() => setOpenDropdown(item.name)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {/* Dropdown Menu */}
                        <div
                          className="absolute top-full left-0 mt-2 min-w-[180px] bg-background border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <ul className="py-2">
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                <Link
                                  href={child.href}
                                  className="text-muted-foreground hover:text-accent-foreground block px-4 py-2 text-sm duration-150"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Button (Always Right Corner) */}
            <div className="hidden lg:block">
              <Button asChild size="sm">
                <Link href="/contact">
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
            >
              {menuState ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>

            {/* Mobile Menu */}
            {menuState && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-background block w-full flex-wrap items-center space-y-4 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 lg:hidden">
                {/* Mobile Menu Items */}
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                            className="text-muted-foreground hover:text-accent-foreground flex items-center justify-between w-full duration-150"
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === item.name && "rotate-180")} />
                          </button>
                          {openDropdown === item.name && (
                            <ul className="mt-2 ml-4 space-y-2">
                              {item.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link
                                    href={child.href}
                                    className="text-muted-foreground hover:text-accent-foreground block py-1 text-sm duration-150"
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Contact Us (Mobile) */}
                <div className="flex w-full pt-2">
                  <Button asChild size="sm" className="w-full">
                    <Link href="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
