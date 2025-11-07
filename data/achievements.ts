import { Achievement, StudentWork } from '../types';

export const initialAchievements: Achievement[] = [
  {
    id: 'ach1',
    icon: '🏆',
    title: 'Juara 1 Lomba Mewarnai',
    category: 'Tingkat Kecamatan',
    description: 'Ananda Zahra meraih juara pertama dalam kompetisi mewarnai yang diikuti oleh puluhan sekolah se-kecamatan.'
  },
  {
    id: 'ach2',
    icon: '🎵',
    title: 'Penampilan Paduan Suara Terbaik',
    category: 'Festival Seni Anak',
    description: 'Tim paduan suara TK Ali bin Abi Thalib mendapatkan penghargaan khusus untuk penampilan yang kompak dan ceria.'
  },
  {
    id: 'ach3',
    icon: '📖',
    title: 'Pemenang Lomba Bercerita',
    category: 'Tingkat Sekolah',
    description: 'Budi Hartono berhasil memukau juri dengan kemampuan berceritanya yang ekspresif dan penuh percaya diri.'
  },
  {
    id: 'ach4',
    icon: '🏅',
    title: 'Peserta Terfavorit Lomba Futsal',
    category: 'Pekan Olahraga TK',
    description: 'Meskipun tidak juara, tim futsal kita dinobatkan sebagai tim terfavorit karena semangat dan sportivitas yang tinggi.'
  }
];

export const initialStudentWorks: StudentWork[] = [
  { id: 'sw1', imageUrl: 'https://picsum.photos/seed/work1/600/400', title: 'Rumah Impianku', studentName: 'Aisyah' },
  { id: 'sw2', imageUrl: 'https://picsum.photos/seed/work2/600/400', title: 'Roket ke Bulan', studentName: 'Fahmi' },
  { id: 'sw3', imageUrl: 'https://picsum.photos/seed/work3/600/400', title: 'Kebun Binatang', studentName: 'Rina' },
  { id: 'sw4', imageUrl: 'https://picsum.photos/seed/work4/600/400', title: 'Keluargaku', studentName: 'Doni' },
  { id: 'sw5', imageUrl: 'https://picsum.photos/seed/work5/600/400', title: 'Pemandangan Gunung', studentName: 'Sari' },
  { id: 'sw6', imageUrl: 'https://picsum.photos/seed/work6/600/400', title: 'Bunga di Taman', studentName: 'Putri' },
];