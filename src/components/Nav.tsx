import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, ShieldCheckIcon } from 'lucide-react';
import { navItems, profile } from '../data/profile';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
      scrolled ? 'border-b border-ink-500 bg-ink-900' : 'border-b border-transparent'}`
      }>
      
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-slateish-100">
          <ShieldCheckIcon className="h-5 w-5 text-accent-400" aria-hidden="true" />
          <span className="font-semibold">odawa</span>
          <span className="text-accent-400">.ngala</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) =>
          <li key={item.href}>
              <a
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-slateish-400 transition-colors hover:text-accent-400">
              
                {item.label}
              </a>
            </li>
          )}
          <li>
            <a
              href={profile.cvUrl}
              download
              className="rounded border border-accent-400 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-accent-400 transition-colors hover:bg-accent-400 hover:text-ink-900">
              
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded border border-ink-500 p-2 text-slateish-200 transition-colors hover:text-accent-400 md:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open ?
      <div id="mobile-menu" className="border-t border-ink-500 bg-ink-900 md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
            {navItems.map((item) =>
          <li key={item.href}>
                <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-600 py-3 font-mono text-sm uppercase tracking-widest text-slateish-200 transition-colors hover:text-accent-400">
              
                  {item.label}
                </a>
              </li>
          )}
            <li>
              <a
              href={profile.cvUrl}
              download
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-sm uppercase tracking-widest text-accent-400">
              
                Download CV
              </a>
            </li>
          </ul>
        </div> :
      null}
    </header>);

}