'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'BNI-Salem', href:'https://bni-salem.in/salem-bni-elite/en-IN/memberdetails?encryptedMemberId=VyR43%2BVKzpyWOMxTHyv88A%3D%3D&cmsv3=true&name=Amarnath+M+K'},
  { name: 'About Us', href: '/undermaintenance' },
  { name: 'Services', href: '/undermaintenance' },
  { name: 'Solutions', href: '/undermaintenance' },
  { name: 'Our Product', href: '/product' },
  { name: 'Blog', href: '/undermaintenance' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
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
                <span className="font-semibold text-lg">Myenum</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Button (Always Right Corner) */}
            <div className="hidden lg:block">
              <Button asChild size="sm">
                <Link href="#contact">
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
              <div className="absolute top-full left-0 right-0 mt-3 bg-background block w-full flex-wrap items-center space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 lg:hidden">
                {/* Mobile Menu Items */}
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Contact Us (Mobile) */}
                <div className="flex w-full">
                  <Button asChild size="sm" className="w-full">
                    <Link href="#contact">
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
