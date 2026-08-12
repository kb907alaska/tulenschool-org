import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, Home, Info, GraduationCap, Users, ShieldCheck, BookOpen, Calendar, Sparkles, Newspaper, FileText, Mail } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when full-screen menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const mainLinks = [
    { name: 'Home', href: '/', icon: Home, badge: 'Main' },
    { name: 'About Tułen', href: '/about', icon: Info, badge: 'Kenaitze' },
    { name: 'Enrollment & Lottery', href: '/enrollment', icon: GraduationCap, badge: 'K-4 Free' },
    { name: 'Staff Directory', href: '/staff', icon: Users, badge: 'KPBSD' },
    { name: 'APC Governance Board', href: '/academic-policy-committee', icon: ShieldCheck, badge: 'Board' },
    { name: 'Parent Portal & Resources', href: '/parent-portal', icon: BookOpen, badge: 'Family' },
    { name: 'Academic & Culture Calendar', href: '/calendar', icon: Calendar, badge: 'Events' },
    { name: 'Campus Events', href: '/events', icon: Sparkles, badge: 'Harvest' },
    { name: 'Monthly Newsletters', href: '/newsletter', icon: Newspaper, badge: 'Flow' },
    { name: 'School Profile & Data', href: '/school-profile', icon: FileText, badge: 'AK STAR' },
    { name: 'Contact Campus', href: '/contact', icon: Mail, badge: 'Kenai' }
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 rounded-xl bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100 focus:outline-none transition-colors"
        aria-label="Open Navigation Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-200">
          
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/90 shrink-0">
            <div className="flex items-center gap-3">
              <img
                src="/images/tulen-logo.png"
                alt="Tułen Qunshi Logo"
                className="w-12 h-12 object-contain drop-shadow-md"
              />
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-sky-400 block">
                  Qunshi Beluga &bull; Public K-4
                </span>
                <h3 className="font-serif font-extrabold text-white text-lg leading-tight">
                  Tułen Charter School
                </h3>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-sky-600 transition-all border border-slate-700"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links Scroll Area */}
          <div className="flex-grow overflow-y-auto px-6 py-6 space-y-2">
            <div className="pb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-sky-400 block mb-3 px-2">
                Navigation & Campus Hub
              </span>
              <div className="space-y-1.5">
                {mainLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 hover:bg-sky-600 border border-slate-800 hover:border-sky-400 text-white font-bold transition-all group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-sky-950 group-hover:bg-white/20 text-sky-400 group-hover:text-white flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold">{link.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-800 text-sky-300 group-hover:bg-white group-hover:text-sky-950">
                          {link.badge}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-6 bg-slate-900 border-t border-slate-800/80 space-y-3 shrink-0">
            <a
              href="/enrollment"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-extrabold rounded-2xl shadow-lg transition-all text-sm uppercase tracking-wider"
            >
              Enroll Now for 2026-2027 (K-4)
            </a>
            <a
              href="tel:9073352829"
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl text-sm transition-colors border border-slate-700"
            >
              <Phone className="w-4 h-4 text-sky-400" /> Call Main Office: (907) 335-2829
            </a>
          </div>

        </div>
      )}
    </div>
  );
};
