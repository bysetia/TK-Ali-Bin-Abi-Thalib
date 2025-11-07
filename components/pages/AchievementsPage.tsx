import React, { useState } from 'react';
import { Achievement, StudentWork } from '../../types';
import Card from '../ui/Card';

interface AchievementsPageProps {
  achievements: Achievement[];
  studentWorks: StudentWork[];
}

const AchievementsPage: React.FC<AchievementsPageProps> = ({ achievements, studentWorks }) => {
  const [selectedWork, setSelectedWork] = useState<StudentWork | null>(null);

  return (
    <div className="bg-white py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Prestasi & Karya Siswa</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Kami bangga dengan setiap pencapaian dan kreativitas yang ditunjukkan oleh anak-anak didik kami.</p>
        </div>

        {/* Achievements Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pencapaian Gemilang</h2>
            <p className="mt-4 text-lg text-gray-600">Momen-momen membanggakan dari berbagai ajang kompetisi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start p-6 bg-yellow-50 rounded-xl shadow-sm">
                <div className="text-4xl mr-5 mt-1">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-800">{achievement.title}</h3>
                  <p className="font-semibold text-yellow-600 mb-2">{achievement.category}</p>
                  <p className="text-yellow-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Works Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Galeri Karya Siswa</h2>
            <p className="mt-4 text-lg text-gray-600">Ekspresi kreativitas tanpa batas dari para seniman cilik kami.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentWorks.map(work => (
              <Card key={work.id} className="group cursor-pointer" hoverEffect onClick={() => setSelectedWork(work)}>
                <div className="overflow-hidden relative">
                  <img src={work.imageUrl} alt={work.title} className="w-full h-56 object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div>
                            <h3 className="text-lg font-bold text-white">{work.title}</h3>
                            <p className="text-sm text-yellow-300">Oleh: {work.studentName}</p>
                        </div>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
      
      {/* Modal for viewing work */}
      {selectedWork && (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedWork(null)}
        >
            <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full" onClick={e => e.stopPropagation()}>
                <img src={selectedWork.imageUrl.replace('/600/400', '/1200/800')} alt={selectedWork.title} className="w-full rounded-t-lg" />
                <div className="p-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">{selectedWork.title}</h3>
                        <p className="text-gray-600">Karya oleh: {selectedWork.studentName}</p>
                    </div>
                    <button 
                        onClick={() => setSelectedWork(null)}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsPage;