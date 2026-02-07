export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface CaseStudy {
  client: string;
  category: string;
  metric: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface AboutSection {
  title: string;
  content: string;
  linkText: string;
}