import React from 'react';
import { Program, Extracurricular } from '../../types';
import Card from '../ui/Card';

interface CurriculumPageProps {
  programs: Program[];
  extracurriculars: Extracurricular[];
}

const CurriculumPage: React.FC<CurriculumPageProps> = ({ programs, extracurriculars }) => {
  return (
    <div className="bg-sky-50 py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Kurikulum & Program Kami</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Dirancang untuk merangsang pertumbuhan anak di setiap tahap perkembangan dengan pendekatan yang holistik.</p>
        </div>

        {/* Program Belajar */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={program.id} className="flex flex-col" hoverEffect>
                <div className={`p-6 bg-gradient-to-br ${['from-orange-400 to-red-500', 'from-sky-400 to-blue-500', 'from-green-400 to-teal-500'][index % 3]}`}>
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                        <span className="text-4xl">{program.icon}</span>
                    </div>
                    <span className="inline-block bg-white/30 text-white text-sm font-bold mt-3 px-3 py-1 rounded-full">{program.age}</span>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700">{program.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Ekstrakurikuler */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Kegiatan Ekstrakurikuler</h2>
            <p className="mt-4 text-lg text-gray-600">Mengembangkan bakat dan minat anak di luar jam belajar.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 text-center">
                {extracurriculars.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
                        <span className="text-3xl">{item.icon}</span>
                        <p className="mt-2 font-bold text-gray-700">{item.name}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurriculumPage;