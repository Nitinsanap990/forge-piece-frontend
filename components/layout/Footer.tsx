'use client'

import Link from 'next/link'
import { Instagram, Mail, MapPin } from 'lucide-react'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-black/5 mt-48 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <Logo variant="full" />
            <div className="space-y-4">
              <p className="text-[10px] font-black tracking-[0.5em] text-forge-accent uppercase">
                Forging a Mindset.
              </p>
              <p className="text-sm text-forge-grey leading-relaxed max-w-xs font-light">
                200 GSM PREMIUM COTTON.<br />
                HEAVYWEIGHT ENGINEERING.<br />
                MASTERED STREETWEAR.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-black text-black uppercase tracking-[0.4em] mb-10 border-b border-black/10 pb-4">Navigation</h3>
            <ul className="space-y-5">
              {['Shop', 'About', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-xs font-bold text-forge-grey hover:text-forge-accent tracking-widest transition-luxury uppercase">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-[11px] font-black text-black uppercase tracking-[0.4em] mb-10 border-b border-black/10 pb-4">Engineering</h3>
            <ul className="space-y-5">
              {['Shipping Policy', 'Returns & Exchange', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-xs font-bold text-forge-grey hover:text-black tracking-widest transition-luxury uppercase">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-[11px] font-black text-black uppercase tracking-[0.4em] mb-10 border-b border-black/10 pb-4">Connect</h3>
            <ul className="space-y-8">
              <li>
                <a
                  href="https://instagram.com/forgepiece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-xs font-bold text-forge-grey hover:text-forge-accent transition-luxury uppercase tracking-widest"
                >
                  <Instagram size={20} className="text-forge-accent" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@forgepiece.com"
                  className="flex items-center gap-4 text-xs font-bold text-forge-grey hover:text-black transition-luxury uppercase tracking-widest"
                >
                  <Mail size={20} />
                  <span>Direct Mail</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 text-xs font-bold text-forge-grey uppercase tracking-widest">
                  <MapPin size={20} className="flex-shrink-0" />
                  <span>Mumbai • India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-16 border-t border-black/5 bg-forge-surface -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-black tracking-[0.3em] text-black uppercase">
                © {currentYear} FORGE PIECE APPAREL. ALL RIGHTS RESERVED.
              </p>
              <p className="text-[9px] text-forge-grey font-bold uppercase tracking-widest">Engineering urban resilience through high-density textiles.</p>
            </div>

            {/* Legal Metrology Compliance */}
            <div className="text-[9px] text-black/30 text-center md:text-right space-y-2 font-black tracking-[0.2em] uppercase">
              <p>Mfr: FORGE PIECE APPAREL LIMITED</p>
              <p>MAHARASHTRA, INDIA 400001</p>
              <p>1 UNIT BATCH | COTTON SERIES | ORIGIN: IN</p>
            </div>
          </div>

          {/* Peace Symbol Footer Decoration */}
          <div className="mt-20 flex justify-center opacity-10">
            <Logo variant="icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}
