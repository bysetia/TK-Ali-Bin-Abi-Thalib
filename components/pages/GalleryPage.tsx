import React, { useState, useMemo } from 'react';
import { GalleryItem } from '../../types';
import Card from '../ui/Card';

const filters = ['Semua', 'Acara', 'Belajar', 'Bermain', 'Proyek'];

interface GalleryPageProps {
  galleryItems: GalleryItem[];
}

const GalleryPage: React.FC<GalleryPageProps> = ({ galleryItems }) => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Semua') {
      return galleryItems;
    }
    return galleryItems.filter(item => item.category === activeFilter);
  }, [activeFilter, galleryItems]);

  return (
    <div className="bg-gray-50 py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Galeri Aktivitas</h1>
          <p className="text-lg text-gray-600">Momen-momen ceria dan berharga di TK Ali bin Abi Thalib.</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-bold rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-orange-500 text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(item)}>
              <div className="overflow-hidden relative">
                <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold text-center p-4">{item.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for viewing image */}
      {selectedImage && (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
        >
            <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full" onClick={e => e.stopPropagation()}>
                <img src={selectedImage.imageUrl.replace('/600/400', '/1200/800')} alt={selectedImage.title} className="w-full rounded-t-lg" />
                <div className="p-4 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">{selectedImage.title}</h3>
                    <button 
                        onClick={() => setSelectedImage(null)}
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

export default GalleryPage;