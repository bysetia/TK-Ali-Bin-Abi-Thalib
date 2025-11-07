import { Teacher, Testimonial, AlumniStat } from '../types';

export const initialTeachers: Teacher[] = [
  {
    id: 't1',
    name: 'Ibu Fatimah, S.Pd.',
    role: 'Kepala Sekolah',
    bio: 'Berpengalaman lebih dari 15 tahun dalam pendidikan anak usia dini. Berkomitmen menciptakan lingkungan belajar yang positif.',
    imageUrl: 'https://picsum.photos/seed/fatimah/400/400'
  },
  {
    id: 't2',
    name: 'Bapak Ahmad, S.Psi.',
    role: 'Guru Kelas A',
    bio: 'Spesialis dalam pengembangan kreativitas anak melalui metode bermain yang inovatif dan menyenangkan.',
    imageUrl: 'https://picsum.photos/seed/ahmad/400/400'
  },
  {
    id: 't3',
    name: 'Ibu Aisyah, S.Pd.AUD.',
    role: 'Guru Kelas B',
    bio: 'Menyukai dunia dongeng dan musik untuk membantu anak-anak mengembangkan kemampuan bahasa dan sosial.',
    imageUrl: 'https://picsum.photos/seed/aisyah/400/400'
  },
  {
    id: 't4',
    name: 'Ibu Rina, S.Pd.',
    role: 'Guru Pendamping',
    bio: 'Penuh semangat dalam mendampingi anak-anak bermain sambil belajar, memastikan setiap anak merasa diperhatikan.',
    imageUrl: 'https://picsum.photos/seed/rina/400/400'
  }
];

export const testimonials: Testimonial[] = [
    {
        quote: "Anak saya sangat senang sekolah di sini. Guru-gurunya sangat perhatian dan sabar. Lingkungannya juga sangat mendukung perkembangan anak. Terima kasih TK Ali bin Abi Thalib!",
        name: "Rina Susanti",
        relation: "Orang Tua Murid",
        imageUrl: "https://picsum.photos/seed/parent1/100/100"
    },
    {
        quote: "Fasilitasnya lengkap dan modern. Program belajarnya juga sangat kreatif, anak saya jadi lebih percaya diri dan aktif berbicara. Pilihan yang sangat tepat.",
        name: "Budi Hartono",
        relation: "Orang Tua Murid",
        imageUrl: "https://picsum.photos/seed/parent2/100/100"
    },
    {
        quote: "Sebagai alumni, saya merasakan betul fondasi belajar yang kuat yang saya dapatkan di sini. Suasana belajarnya sangat menyenangkan dan membuat saya cinta sekolah.",
        name: "Andi Pratama",
        relation: "Alumni Angkatan 2010",
        imageUrl: "https://picsum.photos/seed/alumni1/100/100"
    }
];

export const alumniStats: AlumniStat[] = [
    {
        icon: '🎓',
        value: '1000+',
        label: 'Alumni Berprestasi'
    },
    {
        icon: '🏫',
        value: '95%',
        label: 'Melanjutkan ke SD Favorit'
    },
    {
        icon: '🏆',
        value: '50+',
        label: 'Penghargaan & Kompetisi'
    }
];