import React, { useState, useEffect } from 'react';
import { NewsArticle } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ManageNewsProps {
  articles: NewsArticle[];
  onAddArticle: (article: Omit<NewsArticle, 'id' | 'date'>) => void;
  onUpdateArticle: (article: NewsArticle) => void;
  onDeleteArticle: (id: string) => void;
}

const emptyFormState = {
    title: '',
    excerpt: '',
    content: '',
    imageUrl: ''
};

const ManageNews: React.FC<ManageNewsProps> = ({ articles, onAddArticle, onUpdateArticle, onDeleteArticle }) => {
  const [formState, setFormState] = useState(emptyFormState);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (editingId) {
      const articleToEdit = articles.find(a => a.id === editingId);
      if (articleToEdit) {
        setFormState(articleToEdit);
      }
    } else {
      setFormState(emptyFormState);
    }
  }, [editingId, articles]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.title || !formState.excerpt || !formState.content || !formState.imageUrl) {
        alert('Semua field harus diisi!');
        return;
    }
    if (editingId) {
      onUpdateArticle({ ...formState, id: editingId, date: articles.find(a=>a.id === editingId)?.date || '' });
    } else {
      onAddArticle(formState);
    }
    setEditingId(null);
    setFormState(emptyFormState);
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    window.scrollTo(0, 0); 
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      onDeleteArticle(id);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormState(emptyFormState);
  }

  return (
    <div className="animate-fade-in">
        <Card className="p-8 mb-12 border-t-4 border-orange-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingId ? 'Edit Artikel' : 'Tambah Artikel Baru'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput label="Judul" name="title" value={formState.title} onChange={handleChange} required />
            <FormInput label="URL Gambar" name="imageUrl" value={formState.imageUrl} onChange={handleChange} placeholder="https://picsum.photos/seed/new_image/600/400" required />
            <div>
              <label htmlFor="excerpt" className="block text-sm font-bold text-gray-700 mb-1">Ringkasan (Excerpt)</label>
              <textarea id="excerpt" name="excerpt" rows={3} value={formState.excerpt} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" required />
            </div>
             <div>
              <label htmlFor="content" className="block text-sm font-bold text-gray-700 mb-1">Konten Lengkap</label>
              <textarea id="content" name="content" rows={6} value={formState.content} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" required />
            </div>
            <div className="flex items-center gap-4 pt-2">
                <Button type="submit" size="md" variant="primary">
                    {editingId ? (
                        <><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>Simpan Perubahan</>
                    ) : (
                        <><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>Terbitkan Artikel</>
                    )}
                </Button>
                {editingId && <Button onClick={cancelEdit} size="md" variant="ghost">Batal</Button>}
            </div>
          </form>
        </Card>

        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Daftar Artikel</h2>
            <div className="space-y-4">
                {articles.map(article => (
                    <Card key={article.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border hover:shadow-md hover:border-orange-200 transition-all">
                        <div className="flex items-center gap-4 flex-grow">
                            <img src={article.imageUrl} alt={article.title} className="w-24 h-20 object-cover rounded-md hidden sm:block"/>
                            <div>
                                <h3 className="font-bold text-gray-800">{article.title}</h3>
                                <p className="text-sm text-gray-500">{article.date}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0 self-end sm:self-center">
                            <Button onClick={() => handleEdit(article.id)} size="sm" variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
                            </Button>
                            <Button onClick={() => handleDelete(article.id)} size="sm" variant="ghost" className="!border-red-500 !text-red-500 hover:!bg-red-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
};

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({label, name, ...props}) => (
    <div>
        <label htmlFor={name} className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
        <input id={name} name={name} {...props} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" />
    </div>
);

export default ManageNews;