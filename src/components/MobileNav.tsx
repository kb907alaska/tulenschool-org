import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, BookOpen, Users, HelpCircle, FileText, ChevronRight } from 'lucide-react';

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
    <div class="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-teal-900 hover:bg-teal-50 focus:outline-none transition-colors"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[110px] z-50 bg-slate-900/50 backdrop-blur-sm flex flex-col justify-start">
          <div className="bg-sand-bg border-b border-teal-800/10 shadow-2xl p-6 overflow-y-auto max-h-[calc(100vh-120px)] rounded-b-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-700">Navigation</span>
                <h3 className="font-serif font-bold text-teal-900 text-lg">Tułen Charter School</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-800 p-1"
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
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-slate-800 font-medium hover:bg-teal-900 hover:text-white transition-all group"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
              <a
                href="/enrollment"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors"
              >
                Enroll Now (K-4)
              </a>
              <a
                href="tel:9073352829"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-teal-900 text-white font-semibold rounded-xl text-sm hover:bg-teal-800 transition-colors"
              >
                <Phone className="w-4 h-4" /> (907) 335-2829
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
