import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Github, Twitter, Instagram } from 'lucide-react';

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { href: '/shop?category=skincare', label: 'Skincare' },
      { href: '/shop?category=haircare', label: 'Haircare' },
      { href: '/shop?category=fragrance', label: 'Fragrance' },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '/about', label: 'Our Story' },
      { href: '/contact', 'label': 'Contact Us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '#', label: 'FAQ' },
      { href: '#', label: 'Shipping & Returns' },
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Privacy Policy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Luxury, redefined. Discover your harmony.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Charmony. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
