import React from 'react';
import Card from '../ui/Card';

const facilities = [
  {
    title: 'Lingkungan Sekolah Asri',
    description: 'Dikelilingi taman hijau yang aman dan nyaman, mendorong anak untuk belajar dan bermain lebih dekat dengan alam.',
    imageUrl: 'https://picsum.photos/seed/facility1/600/400'
  },
  {
    title: 'Ruang Kelas yang Nyaman',
    description: 'Setiap ruang kelas didesain penuh warna dengan sirkulasi udara yang baik dan dilengkapi media belajar modern.',
    imageUrl: 'https://picsum.photos/seed/facility2/600/400'
  },
  {
    title: 'Area Bermain Outdoor & Indoor',
    description: 'Tersedia area bermain di luar dan dalam ruangan yang luas dengan permainan edukatif untuk melatih motorik anak.',
    imageUrl: 'https://picsum.photos/seed/facility3/600/400'
  },
  {
    title: 'Laboratorium Komputer Mini',
    description: 'Pengenalan dasar-dasar teknologi sejak dini melalui perangkat lunak edukatif yang aman dan interaktif.',
    imageUrl: 'https://picsum.photos/seed/facility4/600/400'
  },
  {
    title: 'Sarana MCK Bersih & Sehat',
    description: 'Toilet yang didesain khusus untuk anak-anak, selalu terjaga kebersihannya untuk menunjang kesehatan siswa.',
    imageUrl: 'https://picsum.photos/seed/facility5/600/400'
  },
  {
    title: 'Perpustakaan Sudut Baca',
    description: 'Koleksi buku cerita bergambar yang beragam untuk menumbuhkan minat baca anak sejak usia dini.',
    imageUrl: 'https://picsum.photos/seed/facility6/600/400'
  }
];

const FacilitiesPage: React.FC = () => {
  return (
    <div className="bg-green-50/50 py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Fasilitas Sekolah</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Kami menyediakan lingkungan belajar yang lengkap, aman, dan modern untuk mendukung perkembangan optimal setiap anak.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="flex flex-col" hoverEffect>
              <img src={facility.imageUrl} alt={facility.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600 flex-grow">{facility.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
