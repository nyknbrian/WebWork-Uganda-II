/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, MapPin, Radio, Cpu, Network } from 'lucide-react';

interface HeroProps {
  onLearnMore: (viewId: string) => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  return (
    <div id="hero-banner-container" className="relative bg-[#0b1a30] pt-8 pb-16 lg:py-24 overflow-hidden border-b border-[#f4eedb]/10">
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f4eedb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d3354] border border-[#f4eedb]/20 rounded-full text-xs font-semibold tracking-wider text-[#f4eedb] uppercase">
              <Sparkles className="h-3 w-3 text-yellow-300 animate-pulse" />
              <span>Uganda's Leading ICT Infrastructure & Dev House</span>
            </div>

            <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Laying down the <span className="text-[#f4eedb] underline decoration-[#f4eedb]/30">infrastructure</span> & <span className="text-[#f4eedb] underline decoration-[#f4eedb]/30">custom software</span> for Ugandan enterprises.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              WebWork Uganda integrates single-mode optic fiber circuits, climate-isolated servers, and robust offline-first software designed specifically for commercial centers across Gulu, Kampala, Mbarara, and Jinja.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#f4eedb]/10">
              <div className="flex items-start gap-2.5">
                <Network className="h-5 w-5 text-[#f4eedb] mt-0.5" />
                <div>
                  <div className="font-serif font-semibold text-lg text-white">99.9% Uptime</div>
                  <div className="text-xs text-gray-400">Structured Campus LANs</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Cpu className="h-5 w-5 text-[#f4eedb] mt-0.5" />
                <div>
                  <div className="font-serif font-semibold text-lg text-white">Offline-Sync</div>
                  <div className="text-xs text-gray-400">High-Resilience Software</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero-cta-contact"
                onClick={() => onLearnMore('contact')}
                className="px-6 py-3.5 bg-[#f4eedb] hover:bg-[#eae0c5] text-[#0b1a30] text-sm uppercase tracking-wider font-bold rounded-sm text-center shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Inquire For Consultation
              </button>
              <button
                id="hero-cta-portfolio"
                onClick={() => onLearnMore('portfolio')}
                className="px-6 py-3.5 bg-transparent hover:bg-[#112543] text-white border border-gray-600 hover:border-[#f4eedb] text-sm uppercase tracking-wider font-bold rounded-sm text-center transition-all duration-150 cursor-pointer"
              >
                Explore Active Deployments
              </button>
            </div>
            
            {/* Local Trust Tags */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-red-400" /> Nakasero, Kampala (HQ)
              </span>
              <span className="flex items-center gap-1.5">
                <Radio className="h-3.5 w-3.5 text-green-400" /> Gulu, Mbarara Regional Hubs
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-blue-400" /> NITA-U Certified Standards
              </span>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Outer decorative borders */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#f4eedb]/30 to-transparent rounded-lg blur-sm opacity-65"></div>
              
              <div className="relative bg-[#112543] p-2.5 rounded-lg border border-[#f4eedb]/20 shadow-2xl overflow-hidden aspect-[16/9]">
                <img 
                  id="hero-banner-image"
                  src="/src/assets/images/hero_ict_uganda_1780917105831.png" 
                  alt="WebWork Uganda Kampala HQ operations showing digital server racks and software development" 
                  className="w-full h-full object-cover rounded-md transition-all duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech specifications overlay tag */}
                <div className="absolute bottom-5 right-5 bg-[#0b1a30]/90 backdrop-blur-md px-3.5 py-2 rounded border border-[#f4eedb]/10 text-[10px] sm:text-xs font-mono text-[#f4eedb] flex items-center gap-2 shadow-lg">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  <span>Active Deployment Team Link</span>
                </div>
              </div>

              {/* Floating Decorative Box */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-[#112543] p-4 rounded border border-[#f4eedb]/10 shadow-xl max-w-60 animate-bounce-slow">
                <div className="p-2.5 bg-[#f4eedb]/10 rounded-sm">
                  <Shield className="h-6 w-6 text-[#f4eedb]" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold leading-tight font-serif uppercase tracking-wider">Enterprise Security</div>
                  <div className="text-gray-400 text-[10px]">Fortinet & local VPN loops configured</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
