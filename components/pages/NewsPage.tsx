import React from 'react';
import { NewsArticle } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface NewsPageProps {
  articles: NewsArticle[];
  onViewArticle: (id: string) => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ articles, onViewArticle }) => {
  return (
    <div className="bg-white py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Berita & Pengumuman</h1>
          <p className="text-lg text-gray-600">Semua informasi dan momen penting dari TK Ali bin Abi Thalib.</p>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Card key={article.id} className="flex flex-col" hoverEffect>
                <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                  <p className="text-gray-600 flex-grow">{article.excerpt}</p>
                  <div className="mt-6">
                    <Button onClick={() => onViewArticle(article.id)} variant="ghost" size="sm">
                      Baca Selengkapnya
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">Belum ada berita untuk ditampilkan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
