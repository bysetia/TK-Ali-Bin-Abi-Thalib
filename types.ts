// FIX: Add React import to use React.ReactNode type.
import React from 'react';

export enum Page {
  Home = 'home',
  About = 'about',
  Curriculum = 'curriculum',
  Facilities = 'facilities',
  Gallery = 'gallery',
  Achievements = 'achievements',
  KidsZone = 'kids-zone',
  Enrollment = 'enrollment',
  News = 'news',
  Admin = 'admin'
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: number;
  category: string;
  imageUrl: string;
  title: string;
}

export interface Program {
    id: string;
    title: string;
    description: string;
    age: string;
    icon: string;
}

export interface Extracurricular {
    id: string;
    name: string;
    icon: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  relation: string;
  imageUrl: string;
}

export interface AlumniStat {
  icon: string;
  value: string;
  label: string;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  category: string;
  description: string;
}

export interface StudentWork {
  id: string;
  imageUrl: string;
  title: string;
  studentName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}