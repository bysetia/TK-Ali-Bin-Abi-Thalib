import React from 'react';
import { NewsArticle } from '../../types';
import Button from '../ui/Button';

interface NewsDetailPageProps {
  article: NewsArticle;
  onBack: () => void;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ article, onBack }) => {
  return (
    <div className="bg-white py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <Button onClick={onBack} variant="ghost">
            &larr; Kembali ke Semua Berita
          </Button>
        </div>
        <article>
          <img 
            src={article.imageUrl.replace('/600/400', '/1200/600')} 
            alt={article.title} 
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-8" 
          />
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-6">{article.date}</p>
          <div className="prose lg:prose-xl max-w-none text-gray-700">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetailPage;
