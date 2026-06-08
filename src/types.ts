/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Software' | 'Infrastructure' | 'Defense';
  image: string;
  client: string;
  location: string;
  year: string;
  technologies: string[];
  metrics: string;
  story: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'Software' | 'Infrastructure' | 'Defense';
  features: string[];
  specs: string[];
  iconName: string; // Dynamic rendering via lucide icons
}

export interface CEOPost {
  name: string;
  title: string;
  avatar: string;
  quote: string;
  paragraphs: string[];
  signature: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
}

export interface ClientInquiry extends ContactFormInput {
  id: string;
  date: string;
  status: 'Received' | 'Assigned' | 'Contacted';
}
