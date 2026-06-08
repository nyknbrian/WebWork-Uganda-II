/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Code, Server, Cloud, ChevronRight, CheckCircle2, Cpu, Wrench } from 'lucide-react';

interface ServicesSectionProps {
  onLearnMore: (viewId: string) => void;
}

export default function ServicesSection({ onLearnMore }: ServicesSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  // Dynamic Lucide selection mapper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="h-7 w-7 text-[#0b1a30]" />;
      case 'Server':
        return <Server className="h-7 w-7 text-[#0b1a30]" />;
      case 'Cloud':
        return <Cloud className="h-7 w-7 text-[#0b1a30]" />;
      default:
        return <Cpu className="h-7 w-7 text-[#0b1a30]" />;
    }
  };

  return (
    <section id="services-grid-section" className="py-20 bg-[#0b1a30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs uppercase font-mono tracking-[0.25em] text-[#f4eedb] font-semibold">
            WHAT WE BUILD
          </div>
          <h2 id="services-main-heading" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Dual-Core Engineering: Physical Backbone & Modern Software Systems
          </h2>
          <div className="h-[2px] w-20 bg-[#f4eedb]/45 mx-auto"></div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            By merging heavy enterprise networking infrastructure with high-end custom software pipelines, we provide an all-inclusive technical integration loop that traditional software agencies or physical contractors cannot match.
          </p>
        </div>

        {/* Services Showcase Cards */}
        <div id="services-cards-grid" className="grid grid-cols-1 gap-12">
          {SERVICES.map((srv) => {
            const isHovered = hoveredIndex === srv.id;
            return (
              <div
                key={srv.id}
                id={`service-card-${srv.id}`}
                onMouseEnter={() => setHoveredIndex(srv.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-[#112543] border border-[#f4eedb]/10 rounded-lg p-6 sm:p-10 transition-all duration-300 hover:border-[#f4eedb]/30 shadow-xl relative overflow-hidden"
              >
                {/* Visual Accent from Logo color */}
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#f4eedb]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: General Overview */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="inline-flex items-center justify-center p-4 bg-[#f4eedb] rounded-sm shadow-md">
                      {renderIcon(srv.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#f4eedb]/70 bg-[#1d3354] px-2 py-0.5 rounded border border-[#f4eedb]/10">
                        {srv.category}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-2">
                        {srv.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {srv.description}
                    </p>
                    
                    <button
                      id={`service-inquire-${srv.id}`}
                      onClick={() => onLearnMore('contact')}
                      className="inline-flex items-center gap-1 text-[#f4eedb] hover:text-white text-xs uppercase font-extrabold tracking-wider transition-all"
                    >
                      <span>Inquire about this scope</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Right: Detailed Specifications Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#0b1a30]/60 p-6 rounded border border-gray-800">
                    
                    {/* Deliverables checklist */}
                    <div className="space-y-4">
                      <h4 className="text-xs uppercase font-mono tracking-wider text-[#f4eedb] flex items-center gap-1.5 border-b border-gray-800 pb-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        Key Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {srv.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-snug">
                            <span className="w-1.5 h-1.5 bg-[#f4eedb] rounded-full mt-1.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical standards layout (Mono/Spec panel) */}
                    <div className="space-y-4">
                      <h4 className="text-xs uppercase font-mono tracking-wider text-[#f4eedb] flex items-center gap-1.5 border-b border-gray-800 pb-2">
                        <Wrench className="h-4 w-4 text-yellow-400" />
                        Technical Parameters
                      </h4>
                      <div className="space-y-3">
                        {srv.specs.map((spc, sidx) => (
                          <div key={sidx} className="bg-[#112543] p-2.5 rounded border border-gray-800/80">
                            <div className="font-mono text-[10px] text-[#f4eedb] select-all leading-relaxed whitespace-pre-wrap">
                              {spc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic bottom callout */}
        <div id="service-quote-prompt" className="mt-16 bg-[#112543]/40 border border-[#f4eedb]/10 rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-white">Need a customized hybrid ICT specification?</h4>
            <p className="text-xs text-gray-400 max-w-xl">We provide comprehensive hardware auditing and software blueprint reports for corporate buildings, warehouses, and municipal operations across East Africa.</p>
          </div>
          <button
            id="services-estimate-cta"
            onClick={() => onLearnMore('contact')}
            className="w-full md:w-auto px-6 py-3 bg-[#f4eedb] hover:bg-[#eae0c5] text-[#0b1a30] text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer"
          >
            Inquire For Free Technical Proposal
          </button>
        </div>

      </div>
    </section>
  );
}
