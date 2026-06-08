/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import { Landmark, ArrowUpRight, Cpu, Shield, Send, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setView] = useState<string>('home');
  const [inquiryCount, setInquiryCount] = useState<number>(0);

  // Read local inquiries length to provide active alert badges
  const refetchInquiryCount = () => {
    try {
      const saved = localStorage.getItem('WW_UG_INQUIRIES');
      if (saved) {
        const parsed = JSON.parse(saved);
        setInquiryCount(Array.isArray(parsed) ? parsed.length : 0);
      } else {
        setInquiryCount(0);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    refetchInquiryCount();
  }, []);

  const handleActionNavigation = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="webwork-uganda-application" className="min-h-screen bg-[#0b1a30] text-gray-100 flex flex-col justify-between">
      
      {/* Prime Header Navigation HUD */}
      <Header 
        currentView={currentView} 
        setView={setView} 
        inquiryCount={inquiryCount} 
      />

      {/* Main Corporate Workspace */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <div id="home-view" className="animate-fade-in">
            <Hero onLearnMore={handleActionNavigation} />
            <ServicesSection onLearnMore={handleActionNavigation} />
          </div>
        )}

        {currentView === 'portfolio' && (
          <div id="portfolio-view" className="animate-fade-in">
            <PortfolioSection />
          </div>
        )}

        {currentView === 'about' && (
          <div id="about-view" className="animate-fade-in">
            <AboutSection onLearnMore={handleActionNavigation} />
          </div>
        )}

        {currentView === 'contact' && (
          <div id="contact-view" className="animate-fade-in">
            <ContactSection onInquirySubmitted={refetchInquiryCount} />
          </div>
        )}
      </main>

      {/* Corporate Professional Footer */}
      <footer id="app-footer" className="bg-[#071325] border-t border-[#f4eedb]/10 py-12 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-800/80 pb-10">
            
            {/* Logo and company summary */}
            <div className="md:col-span-4 space-y-4">
              <div 
                onClick={() => handleActionNavigation('home')}
                className="flex items-center gap-3 cursor-pointer group w-fit"
              >
                <div className="font-serif text-xl font-bold tracking-tight text-[#0b1a30] bg-[#f4eedb] px-2.5 py-0.5 border border-[#f4eedb]/10 rounded-xs transition-transform duration-300 group-hover:scale-105">
                  WW
                </div>
                <div className="h-7 w-[1.5px] bg-[#f4eedb]/40"></div>
                <div className="flex flex-col text-[10px] leading-none font-serif tracking-[0.25em] uppercase font-bold text-[#f4eedb]">
                  <span>WEB</span>
                  <span className="mt-[2.5px]">WORK</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                WebWork Uganda is a certified ICT integration hub. We merge heavy enterprise physical networking, structured copper backbone installations, and custom offline-first accounting and business logistics portals.
              </p>
              
              <div className="text-[10px] font-mono text-amber-200 uppercase flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-amber-300" />
                <span>NITA-U National Standards Compliant</span>
              </div>
            </div>

            {/* Quick map links */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#f4eedb] tracking-wider font-semibold">Portals Map</h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <button 
                      onClick={() => handleActionNavigation('home')} 
                      className="hover:text-white hover:underline uppercase tracking-wide cursor-pointer text-left block"
                    >
                      Our Services
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleActionNavigation('portfolio')} 
                      className="hover:text-white hover:underline uppercase tracking-wide cursor-pointer text-left block"
                    >
                      Case Studies
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleActionNavigation('about')} 
                      className="hover:text-white hover:underline uppercase tracking-wide cursor-pointer text-left block"
                    >
                      CEO Message
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleActionNavigation('contact')} 
                      className="hover:text-white hover:underline uppercase tracking-wide cursor-pointer text-left block"
                    >
                      Request Proposal
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#f4eedb] tracking-wider font-semibold">Active Prefixes</h4>
                <div className="space-y-1 font-mono text-[10px]">
                  <div className="text-gray-300"># SLA: +256-777-920188</div>
                  <div className="text-gray-400"># Gulu Regional Hub</div>
                  <div className="text-gray-400"># Mbarara Logistics</div>
                  <div className="text-green-400"># Server Live (UTC)</div>
                </div>
              </div>
            </div>

            {/* Localized physical reference columns */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-mono uppercase text-[#f4eedb] tracking-wider font-semibold">Contact Registry</h4>
              <div className="space-y-2.5 text-xs text-gray-300">
                <p className="leading-snug">
                  Pearl Towers, Level 3, Suite A<br />
                  Nakasero Hill Road, Kampala Road, Uganda
                </p>
                <div className="text-[11px] font-mono whitespace-nowrap text-[#f4eedb]">
                  E: <a href="mailto:info@webwork.co.ug" className="hover:underline">info@webwork.co.ug</a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom credentials bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-4">
            <div>
              &copy; {new Date().getFullYear()} WebWork Uganda Ltd. All technical specifications and client materials reserved under Ugandan Commercial Code directives.
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-[#f4eedb] cursor-pointer">Security Safeguard</span>
              <span>&middot;</span>
              <span className="hover:text-[#f4eedb] cursor-pointer">Local IP Rules</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
