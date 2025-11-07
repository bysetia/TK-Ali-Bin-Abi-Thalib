import { Program, Extracurricular } from '../types';

export const initialPrograms: Program[] = [
    { id: 'p1', title: 'Kelompok Bermain', description: 'Pengenalan dunia sekolah melalui permainan, lagu, dan aktivitas motorik halus dan kasar.', age: 'Usia 3-4', icon: '👥'},
    { id: 'p2', title: 'TK A', description: 'Membangun dasar-dasar calistung (baca, tulis, hitung) dengan metode yang menyenangkan dan interaktif.', age: 'Usia 4-5', icon: '📚' },
    { id: 'p3', title: 'TK B', description: 'Persiapan menuju sekolah dasar dengan penguatan konsep, pemecahan masalah sederhana, dan kemandirian.', age: 'Usia 5-6', icon: '🔬' }
];

export const initialExtracurriculars: Extracurricular[] = [
    { id: 'e1', name: 'Melukis', icon: '🎨' },
    { id: 'e2', name: 'Menari', icon: '💃' },
    { id: 'e3', name: 'Musik', icon: '🎵' },
    { id: 'e4', name: 'Berenang', icon: '🏊' },
    { id: 'e5', name: 'Komputer Anak', icon: '💻' },
    { id: 'e6', name: 'Bahasa Inggris', icon: '🔤' }
];