/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Filter, Database, Radio, Shield, Landmark, X, Pin, CheckCircle2, Cpu } from 'lucide-react';

export default function PortfolioSection() {
  const [filter, setFilter] = useState<'All' | 'Software' | 'Infrastructure' | 'Defense'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'All') return true;
    return proj.category === filter;
  });

  return (
    <section id="portfolio-case-studies" className="py-20 bg-[#0b1a30] min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-xs uppercase font-mono tracking-[0.25em] text-[#f4eedb] font-semibold">
            ENGINEERING EXCELLENCE
          </div>
          <h2 id="portfolio-heading" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Active Deployments & Corporate Case Studies
          </h2>
          <div className="h-[2px] w-20 bg-[#f4eedb]/45 mx-auto"></div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            From the bustling warehouses of Kikuubo to high-reliability corporate offices in Nakasero, exploration of our local engineering deliverables proves we align technology with real environmental criteria.
          </p>
        </div>

        {/* Dynamic Nav Filters */}
        <div id="portfolio-filters-bar" className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button
            id="filter-btn-all"
            onClick={() => setFilter('All')}
            className={`cursor-pointer px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-xs transition-all ${
              filter === 'All'
                ? 'bg-[#f4eedb] text-[#0b1a30] shadow'
                : 'bg-[#112543] text-[#f4eedb]/80 hover:bg-[#112543]/85 hover:text-white'
            }`}
          >
            All Deployments
          </button>
          <button
            id="filter-btn-software"
            onClick={() => setFilter('Software')}
            className={`cursor-pointer px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-xs transition-all flex items-center gap-1.5 ${
              filter === 'Software'
                ? 'bg-[#f4eedb] text-[#0b1a30] shadow'
                : 'bg-[#112543] text-[#f4eedb]/80 hover:bg-[#112543]/85 hover:text-white'
            }`}
          >
            <Database className="h-3.5 w-3.5" />
            Software Engineering
          </button>
          <button
            id="filter-btn-infrastructure"
            onClick={() => setFilter('Infrastructure')}
            className={`cursor-pointer px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-xs transition-all flex items-center gap-1.5 ${
              filter === 'Infrastructure'
                ? 'bg-[#f4eedb] text-[#0b1a30] shadow'
                : 'bg-[#112543] text-[#f4eedb]/80 hover:bg-[#112543]/85 hover:text-white'
            }`}
          >
            <Radio className="h-3.5 w-3.5" />
            Physical Infrastructure
          </button>
          <button
            id="filter-btn-defense"
            onClick={() => setFilter('Defense')}
            className={`cursor-pointer px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-xs transition-all flex items-center gap-1.5 ${
              filter === 'Defense'
                ? 'bg-[#f4eedb] text-[#0b1a30] shadow'
                : 'bg-[#112543] text-[#f4eedb]/80 hover:bg-[#112543]/85 hover:text-white'
            }`}
          >
            <Shield className="h-3.5 w-3.5" />
            Defense Technologies
          </button>
        </div>

        {/* Portfolio Showcase Grid */}
        <div id="portfolio-showcase-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`portfolio-card-${proj.id}`}
              onClick={() => setSelectedProject(proj)}
              className="bg-[#112543] border border-[#f4eedb]/10 rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[#f4eedb]/30 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Product Thumbnail representation */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-900 border-b border-gray-800">
                  <img
                    id={`portfolio-img-${proj.id}`}
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#0b1a30]/85 backdrop-blur-md px-3 py-1 rounded-xs text-[10px] uppercase font-mono tracking-wider font-semibold text-[#f4eedb] border border-[#f4eedb]/10">
                    {proj.category}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 flex items-center gap-1">
                    <Pin className="h-3 w-3 text-red-400" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#f4eedb] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Action Stats bar */}
              <div className="px-6 py-4 border-t border-gray-800 bg-[#0b1a30]/40 flex items-center justify-between">
                <div className="text-[11px] font-mono text-emerald-400 font-semibold truncate max-w-[70%]">
                  {proj.metrics}
                </div>
                <button
                  id={`portfolio-btn-view-${proj.id}`}
                  className="text-xs uppercase font-extrabold tracking-wider text-[#f4eedb] group-hover:underline flex items-center gap-1 flex-shrink-0"
                >
                  Read Story &gt;
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Case Study Popup Modal */}
        {selectedProject && (
          <div id="case-study-modal-overlay" className="fixed inset-0 z-50 overflow-y-auto bg-[#0b1a30]/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div 
              id="case-study-modal-container"
              className="bg-[#112543] border border-[#f4eedb]/20 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative block"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Banner */}
              <div className="relative aspect-[16/7] w-full bg-slate-900 overflow-hidden">
                <img
                  id="case-study-banner-img"
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  id="modal-close-btn-top"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-[#0b1a30]/80 rounded-full border border-white/10 text-white hover:bg-[#0b1a30] hover:text-[#f4eedb] transition-all cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-[#112543] via-[#112543]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#f4eedb] text-[#0b1a30] rounded-xs font-bold">
                    {selectedProject.category} CASE STUDY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Main Contents Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: General Project Details, Year, Story */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Executive Metric highlight statement */}
                  <div className="p-4 bg-[#0b1a30]/70 rounded border border-[#f4eedb]/15">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#f4eedb] font-medium">Project Impact Scorecard</div>
                    <div className="text-sm font-serif font-semibold text-white pt-1">
                      {selectedProject.metrics}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#f4eedb]">Executive Narrative</h4>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                      {selectedProject.story}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#f4eedb]">Solution Deliverables</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                          <CheckCircle2 className="h-4.5 w-4.5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Right: Technical Sidebar parameters */}
                <div className="lg:col-span-4 bg-[#0b1a30]/50 p-6 rounded border border-gray-800 space-y-6">
                  
                  {/* Meta data list */}
                  <div className="space-y-4 border-b border-gray-800 pb-5">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#f4eedb]">Client Dossier</h4>
                    <div className="space-y-3 font-sans text-xs">
                      <div>
                        <div className="text-gray-400 text-[10px] font-mono uppercase">Deliverable Partner</div>
                        <div className="text-white font-semibold">{selectedProject.client}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-[10px] font-mono uppercase">Deploy Location</div>
                        <div className="text-white">{selectedProject.location}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-[10px] font-mono uppercase">Installation Year</div>
                        <div className="text-white">{selectedProject.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Technology parameters */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#f4eedb] flex items-center gap-1.5 pb-1">
                      <Cpu className="h-4.5 w-4.5 text-[#f4eedb]" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#112543] border border-[#f4eedb]/10 text-gray-300 text-[10px] font-mono rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      id="modal-close-btn-bottom"
                      onClick={() => setSelectedProject(null)}
                      className="w-full text-center py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                    >
                      Close Report
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
