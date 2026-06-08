/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ContactFormInput, ClientInquiry } from '../types';
import { Mail, Phone, MapPin, CheckCircle, Clock, ShieldCheck, Database, CalendarDays, ListFilter, Trash2 } from 'lucide-react';

interface ContactSectionProps {
  onInquirySubmitted: () => void;
}

export default function ContactSection({ onInquirySubmitted }: ContactSectionProps) {
  const [formInput, setFormInput] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'Physical Network & Fiber Cabling',
    message: ''
  });

  const [submittedInquiry, setSubmittedInquiry] = useState<ClientInquiry | null>(null);
  const [previousInquiries, setPreviousInquiries] = useState<ClientInquiry[]>([]);
  const [showInquiryHistory, setShowInquiryHistory] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hydrate submitted items from standard local persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem('WW_UG_INQUIRIES');
      if (saved) {
        setPreviousInquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load local inquiries tracker', e);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Primary Validation checks
    if (!formInput.name.trim()) return setErrorMessage('Full Name is required.');
    if (!formInput.email.trim()) return setErrorMessage('Email address is required.');
    if (!formInput.phone.trim()) return setErrorMessage('Primary Phone number is required.');
    if (!formInput.message.trim()) return setErrorMessage('Please share a brief explanation of your needs.');

    // Custom unique Ticket generator based on local Kampala timezone metrics
    const timestampId = Math.floor(Date.now() / 1000).toString().slice(-5);
    const newId = `WW-UG-${timestampId}`;

    const newInquiry: ClientInquiry = {
      ...formInput,
      id: newId,
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Received'
    };

    try {
      const updatedList = [newInquiry, ...previousInquiries];
      localStorage.setItem('WW_UG_INQUIRIES', JSON.stringify(updatedList));
      setPreviousInquiries(updatedList);
      setSubmittedInquiry(newInquiry);
      onInquirySubmitted(); // Notify parent of submission

      // Clear input fields for next use
      setFormInput({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: 'Physical Network & Fiber Cabling',
        message: ''
      });
    } catch (err) {
      setErrorMessage('Could not securely process transaction. Please retry.');
    }
  };

  const handleDeleteInquiry = (idToDelete: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const filtered = previousInquiries.filter((inq) => inq.id !== idToDelete);
      localStorage.setItem('WW_UG_INQUIRIES', JSON.stringify(filtered));
      setPreviousInquiries(filtered);
      onInquirySubmitted(); // Re-trigger count updates in header
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact-consultation" className="py-20 bg-[#0b1a30] border-t border-[#f4eedb]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs uppercase font-mono tracking-[0.25em] text-[#f4eedb] font-semibold">
            SECURE CONSULTATION
          </div>
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Initiate a Technical Project Consultation
          </h2>
          <div className="h-[2px] w-20 bg-[#f4eedb]/45 mx-auto"></div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Ready to design modern software portals or wire reliable optical-fiber loops across your building campus? File your custom project parameters below and our Kampala engineering team will deliver a structured quote report.
          </p>
        </div>

        {/* Main interactive grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Communication Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#112543] p-8 rounded-lg border border-[#f4eedb]/10 space-y-6">
              <h3 className="font-serif text-xl font-bold text-white mb-4 border-b border-gray-800 pb-3">
                WebWork Kampala HQ
              </h3>
              
              <div className="space-y-6">
                
                {/* Physical Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0b1a30] text-[#f4eedb] rounded-sm mt-0.5 border border-[#f4eedb]/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Headquarters</div>
                    <div className="text-sm font-semibold text-white">Pearl Towers, Level 3, Suite A</div>
                    <div className="text-xs text-gray-300">Nakasero Hill Road, Kampala Road, Uganda</div>
                  </div>
                </div>

                {/* Phoning */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0b1a30] text-[#f4eedb] rounded-sm mt-0.5 border border-[#f4eedb]/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Hotlines & Splicing Dispatch</div>
                    <div className="text-sm font-semibold text-white">+256 777 920 188</div>
                    <div className="text-sm font-semibold text-white">+256 702 449 301</div>
                    <div className="text-[10px] text-green-300 font-mono mt-1">24/7 Redundant SLA Customer Dispatch</div>
                  </div>
                </div>

                {/* Email addresses */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0b1a30] text-[#f4eedb] rounded-sm mt-0.5 border border-[#f4eedb]/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Electronic Correspondence</div>
                    <div className="text-sm font-semibold text-[#f4eedb] hover:underline">
                      <a href="mailto:info@webwork.co.ug">info@webwork.co.ug</a>
                    </div>
                    <div className="text-xs text-gray-300">projects@webwork.co.ug</div>
                  </div>
                </div>

              </div>

              {/* Kampala Clock Assurance parameters */}
              <div className="bg-[#0b1a30]/50 p-4 rounded border border-gray-800 flex items-start gap-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-gray-300 leading-snug">
                  <span className="font-bold text-[#f4eedb]">2-Hour SLA Pledge:</span> Inquiries logged before 4:00 PM (EAT) are reviewed and assigned to a certified systems engineer on the same working day.
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Dynamic Action Form / Success Receipt Card */}
          <div className="lg:col-span-7">
            <div id="contact-action-wrapper" className="bg-[#112543] p-8 rounded-lg border border-[#f4eedb]/10 shadow-xl">
              
              {!submittedInquiry ? (
                // Form Interface
                <form id="consultation-form" onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="border-b border-gray-800 pb-2">
                    <h3 className="font-serif text-lg font-bold text-white">Project Specs Form</h3>
                    <p className="text-xs text-gray-400">Fill in exact details; we do not share corporate credentials.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded bg-red-950/80 border border-red-500/30 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        name="name"
                        value={formInput.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#0b1a30] text-white border border-gray-800 focus:border-[#f4eedb] rounded p-2.5 text-sm focus:outline-none placeholder-gray-600"
                        placeholder="John Mukasa"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        name="email"
                        value={formInput.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#0b1a30] text-white border border-gray-800 focus:border-[#f4eedb] rounded p-2.5 text-sm focus:outline-none placeholder-gray-600"
                        placeholder="mukasa@enterprise.ug"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Primary Phone Line *
                      </label>
                      <input
                        id="contact-input-phone"
                        type="text"
                        name="phone"
                        value={formInput.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#0b1a30] text-white border border-gray-800 focus:border-[#f4eedb] rounded p-2.5 text-sm focus:outline-none placeholder-gray-600"
                        placeholder="+256 7..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        id="contact-input-company"
                        type="text"
                        name="company"
                        value={formInput.company}
                        onChange={handleInputChange}
                        className="w-full bg-[#0b1a30] text-white border border-gray-800 focus:border-[#f4eedb] rounded p-2.5 text-sm focus:outline-none placeholder-gray-600"
                        placeholder="Ankole Dairy Coop / Jinja Grain Co."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Primary Service Focus
                    </label>
                    <select
                      id="contact-input-service"
                      name="serviceType"
                      value={formInput.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-[#0b1a30] text-white border border-gray-800 focus:border-[#f4eedb] rounded p-2.5 text-sm focus:outline-none"
                    >
                      <option>Physical Network & Fiber Cabling</option>
                      <option>Custom Database Business Platform</option>
                      <option>Shared Clouds & Systems Automation</option>
                      <option>General LAN Hardware Auditing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Details of Needs & Scope *
                    </label>
                    <textarea
                      id="contact-input-message"
                      name="message"
                      rows={4}
                      value={formInput.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#0b1a30] text-white border border-gray-800 focus:border-[#f4eedb] rounded p-2.5 text-sm focus:outline-none placeholder-gray-600 resize-none"
                      placeholder="Please trace size of building space or client databases, approximate team seat count, connectivity obstacles, etc..."
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-3 bg-[#f4eedb] hover:bg-[#eae0c5] text-[#0b1a30] uppercase font-bold tracking-wider text-xs rounded-sm transition-all shadow-md cursor-pointer text-center"
                  >
                    Transmit Specs Receipt & Inquire
                  </button>

                  <div className="text-[10px] text-gray-400 font-mono text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-green-400" />
                    <span>NITA-U secure client protection policy active</span>
                  </div>
                </form>
              ) : (
                // Success Screening Interface (Beautiful Receipt dashboard)
                <div id="contact-success-screen" className="space-y-6 animate-fade-in text-center sm:text-left">
                  
                  {/* Big confirmation banner */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0b1a30] p-4 rounded border border-green-500/20">
                    <div className="p-3 bg-green-500/15 rounded-full text-green-400">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-[#f5efe6] font-bold">INQUIRY SPECS SECURED</div>
                      <h4 className="font-serif text-lg font-bold text-white mt-0.5">Ticket: {submittedInquiry.id}</h4>
                    </div>
                    <div className="sm:ml-auto text-xs text-gray-400 font-mono">
                      {submittedInquiry.date}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Thank you, <span className="text-[#f4eedb] font-semibold">{submittedInquiry.name}</span>. Your technical consult profile has been logged on the local roster. A certified WebWork systems engineer is reviewing your parameters.
                  </p>

                  {/* Progressive Pipeline Steps */}
                  <div className="space-y-4">
                    <h5 className="text-[11px] font-mono uppercase tracking-widest text-left text-[#f4eedb] font-bold">Estimated Dispatch Routine</h5>
                    <div className="grid grid-cols-1 gap-2.5 font-mono text-xs text-left">
                      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#0b1a30]/80 rounded border-l-4 border-green-500 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="font-semibold text-white">[1] Logged</span> — Parameters captured in secure local tracking.
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#0b1a30]/45 rounded border-l-4 border-[#f4eedb] text-gray-400 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="font-semibold text-[#f4eedb]">[2] Auditor Assignment</span> — Technical architect reviewing scope.
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2.5 bg-transparent rounded border-l-4 border-gray-800 text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                        <span>[3] Technical Quote</span> — Structured PDF proposal drafted.
                      </div>
                    </div>
                  </div>

                  {/* Summary recap table */}
                  <div className="bg-[#0b1a30]/40 p-4 rounded border border-gray-800 text-left text-xs font-sans space-y-2">
                    <div className="border-b border-gray-800 pb-1 text-[10px] font-mono text-gray-400 uppercase">Recap of transmission</div>
                    <div><span className="text-gray-400">Affiliation:</span> <span className="text-white font-semibold">{submittedInquiry.company || 'Private Client'}</span></div>
                    <div><span className="text-gray-400">Required Focus:</span> <span className="text-[#f4eedb] font-semibold">{submittedInquiry.serviceType}</span></div>
                    <div><span className="text-gray-400">Response Line:</span> <span className="text-white font-semibold">{submittedInquiry.email} / {submittedInquiry.phone}</span></div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      id="reset-form-btn"
                      onClick={() => setSubmittedInquiry(null)}
                      className="cursor-pointer flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-xs uppercase tracking-wider font-extrabold transition-all"
                    >
                      Log another scope
                    </button>
                    <button
                      id="view-history-shortcut"
                      onClick={() => {
                        setShowInquiryHistory(true);
                        setSubmittedInquiry(null);
                      }}
                      className="cursor-pointer flex-1 py-2.5 bg-[#f4eedb]/10 hover:bg-[#f4eedb]/15 text-[#f4eedb] border border-[#f4eedb]/20 rounded text-xs uppercase tracking-wider font-extrabold transition-all"
                    >
                      Track All Queries
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

        {/* Dynamic inquiry history drawer (Durable persistence dashboard) */}
        <div id="inquiry-history-drawer" className="mt-16 pt-8 border-t border-[#f4eedb]/10">
          <button
            id="history-toggle-btn"
            onClick={() => setShowInquiryHistory(!showInquiryHistory)}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-[#112543] border border-gray-800 text-[#f4eedb] rounded text-xs uppercase tracking-wider font-bold hover:bg-[#112543]/85 transition-all"
          >
            <ListFilter className="h-4 w-4" />
            <span>{showInquiryHistory ? 'Close' : 'Show'} Historical Local Tickets ({previousInquiries.length})</span>
          </button>

          {showInquiryHistory && (
            <div id="history-content-block" className="mt-6 bg-[#112543]/30 border border-gray-800 rounded-lg p-6 space-y-6 animate-fade-in text-left">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <h4 className="font-serif text-lg text-white font-semibold">Your Local Technical Requests</h4>
                <div className="text-[10px] font-mono text-gray-400 uppercase">Stored securely inside your local browser storage</div>
              </div>

              {previousInquiries.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <Database className="h-10 w-10 text-gray-600 mx-auto" />
                  <p className="text-xs text-gray-500">No previous corporate queries are currently logged from this browser.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table id="history-tickets-table" className="w-full text-left font-sans text-xs min-w-[500px]">
                    <thead>
                      <tr className="border-b border-gray-800 font-mono uppercase text-[10px] text-gray-400">
                        <th className="py-3 px-2">Ticket ID</th>
                        <th className="py-3 px-2">Date Submitted</th>
                        <th className="py-3 px-2">Service Category Requested</th>
                        <th className="py-3 px-2">Organization</th>
                        <th className="py-3 px-2 text-center">Status</th>
                        <th className="py-3 px-2 text-right">Settings</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60">
                      {previousInquiries.map((inq) => (
                        <tr key={inq.id} className="hover:bg-[#112543]/20">
                          <td className="py-3 px-2 font-mono text-[#f4eedb] font-semibold">{inq.id}</td>
                          <td className="py-3 px-2 text-gray-400">{inq.date}</td>
                          <td className="py-3 px-2 text-white font-medium">{inq.serviceType}</td>
                          <td className="py-3 px-2 text-gray-300">{inq.company || 'Private Client'}</td>
                          <td className="py-3 px-2 text-center">
                            <span className="inline-block px-2 py-0.5 text-[9px] font-mono uppercase rounded bg-green-950/80 text-green-300 border border-green-500/20">
                              {inq.status}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <button
                              id={`delete-ticket-${inq.id}`}
                              onClick={(e) => handleDeleteInquiry(inq.id, e)}
                              className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/20 rounded transition-all cursor-pointer"
                              title="Delete local receipt record"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
