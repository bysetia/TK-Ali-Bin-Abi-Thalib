import React, { useState, useEffect } from 'react';
import { GalleryItem } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ManageGalleryProps {
  galleryItems: GalleryItem[];
  onAddGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  onUpdateGalleryItem: (item: GalleryItem) => void;
  onDeleteGalleryItem: (id: number) => void;
}

const emptyFormState = { title: '', imageUrl: '', category: 'Acara' };
const categories = ['Acara', 'Belajar', 'Bermain', 'Proyek'];

const ManageGallery: React.FC<ManageGalleryProps> = ({ galleryItems, onAddGalleryItem, onUpdateGalleryItem, onDeleteGalleryItem }) => {
  const [formState, setFormState] = useState(emptyFormState);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    if (editingId) {
      const toEdit = galleryItems.find(i => i.id === editingId);
      if (toEdit) setFormState(toEdit);
    } else {
      setFormState(emptyFormState);
    }
  }, [editingId, galleryItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      onUpdateGalleryItem({ ...formState, id: editingId });
    } else {
      onAddGalleryItem(formState);
    }
    setEditingId(null);
    setFormState(emptyFormState);
  };

  const handleEdit = (id: number) => setEditingId(id);
  const handleDelete = (id: number) => {
    if (window.confirm('Yakin ingin menghapus item galeri ini?')) onDeleteGalleryItem(id);
  };
  const cancelEdit = () => setEditingId(null);

  return (
    <div className="animate-fade-in">
      <Card className="p-8 mb-12 border-t-4 border-orange-400">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingId ? 'Edit Item Galeri' : 'Tambah Item Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput label="Judul Foto" name="title" value={formState.title} onChange={handleChange} required />
          <FormInput label="URL Gambar" name="imageUrl" value={formState.imageUrl} onChange={handleChange} required />
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Kategori</label>
            <select name="category" value={formState.category} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition">
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <Button type="submit" variant="primary">{editingId ? 'Simpan Perubahan' : 'Tambah ke Galeri'}</Button>
            {editingId && <Button onClick={cancelEdit} variant="ghost">Batal</Button>}
          </div>
        </form>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Daftar Item Galeri</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map(item => (
            <Card key={item.id} className="p-2 border hover:shadow-lg transition-shadow">
                <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-2"/>
                 <div className="px-2 pb-2">
                    <h4 className="font-bold text-sm truncate">{item.title}</h4>
                    <p className="text-xs text-gray-500">Kategori: {item.category}</p>
                 </div>
                <div className="flex gap-2 p-2 border-t">
                  <Button onClick={() => handleEdit(item.id)} size="sm" variant="secondary" className="text-xs w-full justify-center">Edit</Button>
                  <Button onClick={() => handleDelete(item.id)} size="sm" variant="ghost" className="text-xs w-full justify-center !border-red-500 !text-red-500 hover:!bg-red-50">Hapus</Button>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, name, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
    <input id={name} name={name} {...props} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" />
  </div>
);

export default ManageGallery;