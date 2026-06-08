/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Landmark, Cpu, Layers } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  inquiryCount: number;
}

export default function Header({ currentView, setView, inquiryCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Services' },
    { id: 'portfolio', label: 'Case Studies' },
    { id: 'about', label: 'Our Story & CEO' },
    { id: 'contact', label: 'Consultation Form' }
  ];

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-[#0b1a30]/95 backdrop-blur-md border-b border-[#f4eedb]/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* WebWork Uganda Logo (Inspired directly by the high-quality logo upload) */}
          <div 
            id="nav-logo"
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="font-serif text-2xl font-bold tracking-tight text-[#0b1a30] bg-[#f4eedb] px-3 py-1 border border-[#f4eedb]/20 rounded-xs transition-all duration-300 group-hover:scale-105 shadow-md">
              WW
            </div>
            <div className="h-9 w-[1.5px] bg-[#f4eedb]/40"></div>
            <div className="flex flex-col text-xs leading-none font-serif tracking-[0.25em] uppercase font-bold text-[#f4eedb] transition-all duration-300 group-hover:text-white">
              <span>WEB</span>
              <span className="mt-[2px]">WORK</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-[#f4eedb] font-semibold' 
                      : 'text-gray-400 hover:text-[#f4eedb]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f4eedb] animate-fade-in"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Button & Inquiry Count */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="cta-contact-header"
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#f4eedb] hover:bg-[#eae0c5] text-[#0b1a30] rounded-sm font-semibold text-xs uppercase tracking-wider transition-all duration-150 transform hover:-translate-y-0.5"
            >
              Get Free Estimate
              {inquiryCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold text-[#f4eedb] bg-[#0b1a30] rounded-full scale-95 border border-[#f4eedb]/20">
                  {inquiryCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-[#112543]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden bg-[#0b1a30] border-b border-[#f4eedb]/10 px-4 pt-2 pb-6 space-y-3 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium tracking-wide transition-all ${
                currentView === item.id
                  ? 'bg-[#112543] text-[#f4eedb] border-l-4 border-[#f4eedb]'
                  : 'text-gray-400 hover:text-white hover:bg-[#112543]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#f4eedb]/10 px-4">
            <button
              id="mobile-cta-contact-header"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#f4eedb] text-[#0b1a30] font-bold rounded-sm text-sm uppercase tracking-wider hover:bg-[#eae0c5]"
            >
              Request ICT Audit
              {inquiryCount > 0 && (
                <span className="px-2 py-0.5 text-xs text-white bg-[#0b1a30] rounded-full">
                  {inquiryCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
