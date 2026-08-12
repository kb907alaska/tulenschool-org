import React, { useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Tułen', href: '/about' },
    { name: 'Enrollment & Lottery', href: '/enrollment' },
    { name: 'Staff & Teachers', href: '/staff' },
    { name: 'Academic Policy Committee', href: '/academic-policy-committee' },
    { name: 'Parent Portal', href: '/parent-portal' },
    { name: 'School Calendar', href: '/calendar' },
    { name: 'Events', href: '/events' },
    { name: 'Newsletters', href: '/newsletter' },
    { name: 'School Profile', href: '/school-profile' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl text-sky-900 hover:bg-sky-50 focus:outline-none transition-colors"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[100px] z-50 bg-slate-950/60 backdrop-blur-sm flex flex-col justify-start">
          <div className="bg-white border-b border-sky-100 shadow-2xl p-6 overflow-y-auto max-h-[calc(100vh-110px)] rounded-b-3xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <img src="/images/tulen-logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-sky-600">Qunshi Beluga</span>
                  <h3 className="font-serif font-bold text-sky-950 text-base">Tułen Charter School</h3>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-800 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-800 font-bold hover:bg-sky-500 hover:text-white transition-all group"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <a
                href="/enrollment"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-extrabold rounded-xl shadow-md transition-colors text-sm"
              >
                Enroll Now (K-4)
              </a>
              <a
                href="tel:9073352829"
                className="flex items-center justify-center gap-2 w-full py-3 bg-sky-950 text-white font-bold rounded-xl text-sm hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" /> (907) 335-2829
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
