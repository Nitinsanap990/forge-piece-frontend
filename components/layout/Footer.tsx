'use client'

import Link from 'next/link'
import { Instagram, Mail, MapPin } from 'lucide-react'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forge-darker border-t border-forge-teal/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo variant="full" animated={false} />
            <p className="text-sm font-display tracking-widest text-forge-teal uppercase">
              We are forging a mindset, not just a fit.
            </p>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              Urban streetwear with motivational ink and anime glitches. For anyone who&apos;s still forging their story. Not a drop, a mindset.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/60 hover:text-forge-teal transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/forgepiece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-forge-magenta transition-colors"
                >
                  <Instagram size={18} />
                  @forgepiece
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@forgepiece.com"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-forge-teal transition-colors"
                >
                  <Mail size={18} />
                  hello@forgepiece.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Mumbai, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-forge-teal/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} Forge Piece. All rights reserved.
            </p>

            {/* Legal Metrology Compliance */}
            <div className="text-[10px] text-white/30 text-center md:text-right space-y-0.5">
              <p>Manufacturer: FORGE PIECE APPAREL</p>
              <p>Address: 402, Urban Forge Hub, Mumbai, Maharashtra 400001</p>
              <p>Net Quantity: 1 Unit | Net Weight: 250g</p>
              <p>Country of Origin: India</p>
              <p>Standard: IS 15848 (Cotton Textiles)</p>
            </div>
          </div>

          {/* Peace Symbol Footer Decoration */}
          <div className="mt-6 flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
