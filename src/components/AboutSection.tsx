/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CEO_MESSAGE } from '../data';
import { Quote, Landmark, Sparkles, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: (viewId: string) => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  const companyCoreValues = [
    {
      title: 'Local Context Mastery',
      description: 'Understanding actual local needs—like creating software with offlineIndex DB schemas that persist customer balance books during blackouts, or routing optical networks using sturdy armored fiber jacket casings.',
      icon: <Sparkles className="h-5 w-5 text-[#f4eedb]" />
    },
    {
      title: 'Precision Physical Work',
      description: 'Standard optical fiber fusion splicing requires extreme care. We perform fiber testing, Cat6A SFTP testing, and ensure our systems comply with international NITA-U certification requirements.',
      icon: <ShieldCheck className="h-5 w-5 text-[#f4eedb]" />
    },
    {
      title: 'Reliable After-Sales Care',
      description: 'An installation is only as resilient as its technical team. We operate an active local hotline support system and dispatch local technicians on motorcycles within Kampala and Gulu bounds.',
      icon: <HeartHandshake className="h-5 w-5 text-[#f4eedb]" />
    }
  ];

  return (
    <section id="story-ceo-section" className="py-20 bg-[#0b1a30] border-t border-[#f4eedb]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="text-xs uppercase font-mono tracking-[0.25em] text-[#f4eedb]">About WebWork Uganda</div>
          <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            A Word from Our Leadership
          </h2>
          <div className="h-[2px] w-20 bg-[#f4eedb]/45 mx-auto"></div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Founded with primary missions in physical networking and modern enterprise system builds, WebWork Uganda bridges local gaps to provide long-lasting tech sovereignty.
          </p>
        </div>

        {/* CEO Personal Statement Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: CEO Photo & Callout Frame */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative borders representing design precision */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#f4eedb]/30 to-slate-900 rounded border border-[#f4eedb]/10 blur-sm opacity-50"></div>
              
              <div className="relative bg-[#112543] p-3 rounded border border-[#f4eedb]/10 shadow-2xl">
                <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4 bg-slate-900 border border-gray-800">
                  <img 
                    id="ceo-avatar-image"
                    src={CEO_MESSAGE.avatar} 
                    alt="Eng. Brian Mukasa, WebWork Uganda CEO" 
                    className="w-full h-full object-cover transition-all duration-300 filter saturate-[0.95] hover:saturate-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Author Title panel */}
                <div className="text-center space-y-1">
                  <div className="font-serif text-lg font-bold text-[#f4eedb]">{CEO_MESSAGE.name}</div>
                  <div className="text-xs font-mono text-gray-400">{CEO_MESSAGE.title}</div>
                  <div className="h-[1px] w-12 bg-[#f4eedb]/20 mx-auto my-2"></div>
                  
                  {/* Local credential metrics */}
                  <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-amber-200">
                    <Award className="h-3 w-3" />
                    <span>NITA-U CERTIFIED SOLUTIONS</span>
                  </div>
                </div>
              </div>

              {/* CEO Signature Card overlay if needed */}
              <div className="text-center mt-4">
                <span className="font-serif italic text-lg text-[#f4eedb]/60 tracking-wider">
                  &ldquo; {CEO_MESSAGE.signature} &rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: CEO Personal Message Letters */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Bold quotes visual callout */}
            <div className="bg-[#112543]/60 border border-[#f4eedb]/15 p-6 rounded relative overflow-hidden">
              <Quote className="absolute top-2 right-4 h-16 w-16 text-[#f4eedb]/5 stroke-[0.5] fill-[#f4eedb]/5" />
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#f4eedb] text-[#0b1a30] rounded-sm mt-1">
                  <Quote className="h-4 w-4" />
                </div>
                <p className="font-serif italic text-lg text-[#f4eedb]/90 leading-relaxed font-semibold">
                  &ldquo;{CEO_MESSAGE.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Paragraph bodies */}
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-sans">
              {CEO_MESSAGE.paragraphs.map((p, idx) => (
                <p key={idx} className="indent-4">
                  {p}
                </p>
              ))}
            </div>

            {/* Call to technical assessment */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-gray-800">
              <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Active engineering booking available this week</span>
              </div>
              <button
                id="ceo-section-contact-cta"
                onClick={() => onLearnMore('contact')}
                className="w-full sm:w-auto ml-auto px-5 py-2.5 bg-[#f4eedb] hover:bg-[#eae0c5] text-[#0b1a30] font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow"
              >
                Schedule consultation &gt;
              </button>
            </div>

          </div>

        </div>

        {/* Company Core Values below leadership */}
        <div className="mt-24 pt-12 border-t border-[#f4eedb]/10">
          <div className="text-center mb-12">
            <h4 className="font-serif text-xl font-bold text-white tracking-tight">Our Core Operational Principles</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyCoreValues.map((val, idx) => (
              <div key={idx} className="bg-[#112543]/40 border border-gray-800 p-6 rounded hover:border-[#f4eedb]/20 transition-all flex flex-col gap-3">
                <div className="inline-flex w-10 h-10 items-center justify-center p-2.5 bg-[#1d3354] border border-[#f4eedb]/10 rounded-sm">
                  {val.icon}
                </div>
                <h5 className="font-serif text-lg text-white font-semibold">{val.title}</h5>
                <p className="text-xs text-gray-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
