import React from 'react';
import Card from '../ui/Card';
import { Teacher } from '../../types';

const values = [
    { icon: '💖', title: 'Kasih Sayang', text: 'Mendidik dengan hati dan membangun hubungan yang hangat.' },
    { icon: '🎨', title: 'Kreativitas', text: 'Memberi ruang bagi anak untuk berekspresi dan berimajinasi.' },
    { icon: '🤝', title: 'Mandiri', text: 'Mendorong anak untuk percaya diri dan mampu melakukan tugasnya.' },
    { icon: '🌍', title: 'Kepedulian', text: 'Mengajarkan empati dan rasa hormat kepada sesama dan lingkungan.' }
];

interface AboutPageProps {
  teachers: Teacher[];
}

const AboutPage: React.FC<AboutPageProps> = ({ teachers }) => {
  return (
    <div className="bg-white py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visi & Misi */}
        <section className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Tentang TK Ali bin Abi Thalib</h1>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="bg-yellow-100 p-6 rounded-xl shadow-inner">
                    <h2 className="text-2xl font-bold text-yellow-800 mb-3">Visi Kami</h2>
                    <p className="text-yellow-700">Menjadi lembaga pendidikan usia dini terdepan yang menghasilkan generasi cerdas, kreatif, berakhlak mulia, dan penuh kasih sayang.</p>
                </div>
                 <div className="bg-sky-100 p-6 rounded-xl shadow-inner">
                    <h2 className="text-2xl font-bold text-sky-800 mb-3">Misi Kami</h2>
                    <p className="text-sky-700">Menyediakan lingkungan belajar yang aman dan menyenangkan, serta menstimulasi seluruh aspek perkembangan anak secara optimal.</p>
                </div>
            </div>
        </section>

        {/* Tim Pengajar */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Kenalan dengan Guru-Guru Kami</h2>
            <p className="mt-4 text-lg text-gray-600">Pendidik profesional yang berdedikasi dan penuh kasih.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="text-center" hoverEffect>
                <div className="relative">
                  <img src={teacher.imageUrl} alt={teacher.name} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                    <p className="text-yellow-300 font-semibold">{teacher.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{teacher.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Nilai Sekolah */}
        <section>
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nilai-Nilai Sekolah</h2>
                <p className="mt-4 text-lg text-gray-600">Prinsip yang menjadi landasan kami dalam mendidik.</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {values.map(value => (
                    <div key={value.title} className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-5xl mb-3">{value.icon}</div>
                        <h3 className="font-bold text-lg text-green-800">{value.title}</h3>
                        <p className="text-sm text-green-700 mt-1">{value.text}</p>
                    </div>
                ))}
             </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;