import React, { useState, useEffect } from 'react';
import { Achievement, StudentWork } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ManageAchievementsProps {
  achievements: Achievement[];
  onAddAchievement: (achievement: Omit<Achievement, 'id'>) => void;
  onUpdateAchievement: (achievement: Achievement) => void;
  onDeleteAchievement: (id: string) => void;
  studentWorks: StudentWork[];
  onAddStudentWork: (work: Omit<StudentWork, 'id'>) => void;
  onUpdateStudentWork: (work: StudentWork) => void;
  onDeleteStudentWork: (id: string) => void;
}

const emptyAchForm = { icon: '', title: '', category: '', description: '' };
const emptyWorkForm = { imageUrl: '', title: '', studentName: '' };

const ManageAchievements: React.FC<ManageAchievementsProps> = (props) => {
  const [achForm, setAchForm] = useState(emptyAchForm);
  const [editingAchId, setEditingAchId] = useState<string | null>(null);

  const [workForm, setWorkForm] = useState(emptyWorkForm);
  const [editingWorkId, setEditingWorkId] = useState<string | null>(null);

  // Effect for Achievements
  useEffect(() => {
    if (editingAchId) {
      const toEdit = props.achievements.find(a => a.id === editingAchId);
      if (toEdit) setAchForm(toEdit);
    } else {
      setAchForm(emptyAchForm);
    }
  }, [editingAchId, props.achievements]);

  // Effect for Student Works
  useEffect(() => {
    if (editingWorkId) {
      const toEdit = props.studentWorks.find(w => w.id === editingWorkId);
      if (toEdit) setWorkForm(toEdit);
    } else {
      setWorkForm(emptyWorkForm);
    }
  }, [editingWorkId, props.studentWorks]);


  const handleAchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAchId) {
      props.onUpdateAchievement({ ...achForm, id: editingAchId });
    } else {
      props.onAddAchievement(achForm);
    }
    setEditingAchId(null);
    setAchForm(emptyAchForm);
  };
  
  const handleWorkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingWorkId) {
      props.onUpdateStudentWork({ ...workForm, id: editingWorkId });
    } else {
      props.onAddStudentWork(workForm);
    }
    setEditingWorkId(null);
    setWorkForm(emptyWorkForm);
  };

  return (
    <div className="animate-fade-in space-y-16">
      {/* MANAGE ACHIEVEMENTS */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Manajemen Prestasi</h2>
        <Card className="p-8 mb-12 border-t-4 border-orange-400">
          <h3 className="text-xl font-bold mb-6 text-gray-700">{editingAchId ? 'Edit Prestasi' : 'Tambah Prestasi Baru'}</h3>
          <form onSubmit={handleAchSubmit} className="space-y-4">
             <FormInput label="Ikon (Emoji)" name="icon" value={achForm.icon} onChange={e => setAchForm({...achForm, icon: e.target.value})} />
             <FormInput label="Judul Prestasi" name="title" value={achForm.title} onChange={e => setAchForm({...achForm, title: e.target.value})} />
             <FormInput label="Kategori/Tingkat" name="category" value={achForm.category} onChange={e => setAchForm({...achForm, category: e.target.value})} />
             <FormInput label="Deskripsi" name="description" value={achForm.description} onChange={e => setAchForm({...achForm, description: e.target.value})} />
            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" variant="primary">{editingAchId ? 'Simpan' : 'Tambah Prestasi'}</Button>
              {editingAchId && <Button onClick={() => setEditingAchId(null)} variant="ghost">Batal</Button>}
            </div>
          </form>
        </Card>
        <div className="space-y-4">
          {props.achievements.map(ach => (
            <Card key={ach.id} className="p-4 flex items-center justify-between gap-4 border hover:shadow-md hover:border-orange-200 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{ach.icon}</span>
                  <div>
                    <h4 className="font-bold">{ach.title}</h4>
                    <p className="text-sm text-gray-500">{ach.category}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setEditingAchId(ach.id)} size="sm" variant="secondary">Edit</Button>
                  <Button onClick={() => props.onDeleteAchievement(ach.id)} size="sm" variant="ghost" className="!border-red-500 !text-red-500 hover:!bg-red-50">Hapus</Button>
                </div>
            </Card>
          ))}
        </div>
      </section>

      {/* MANAGE STUDENT WORKS */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Manajemen Karya Siswa</h2>
        <Card className="p-8 mb-12 border-t-4 border-sky-400">
          <h3 className="text-xl font-bold mb-6 text-gray-700">{editingWorkId ? 'Edit Karya Siswa' : 'Tambah Karya Baru'}</h3>
          <form onSubmit={handleWorkSubmit} className="space-y-4">
             <FormInput label="URL Gambar" name="imageUrl" value={workForm.imageUrl} onChange={e => setWorkForm({...workForm, imageUrl: e.target.value})} />
             <FormInput label="Judul Karya" name="title" value={workForm.title} onChange={e => setWorkForm({...workForm, title: e.target.value})} />
             <FormInput label="Nama Siswa" name="studentName" value={workForm.studentName} onChange={e => setWorkForm({...workForm, studentName: e.target.value})} />
            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" variant="primary">{editingWorkId ? 'Simpan' : 'Tambah Karya'}</Button>
              {editingWorkId && <Button onClick={() => setEditingWorkId(null)} variant="ghost">Batal</Button>}
            </div>
          </form>
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {props.studentWorks.map(work => (
            <Card key={work.id} className="p-2 border hover:shadow-lg transition-shadow">
                <img src={work.imageUrl} alt={work.title} className="w-full h-40 object-cover rounded-lg mb-2"/>
                <div className="px-2 pb-2">
                    <h4 className="font-bold text-sm truncate">{work.title}</h4>
                    <p className="text-xs text-gray-500">Oleh: {work.studentName}</p>
                </div>
                <div className="flex gap-2 p-2 border-t">
                  <Button onClick={() => setEditingWorkId(work.id)} size="sm" variant="secondary" className="text-xs w-full justify-center">Edit</Button>
                  <Button onClick={() => props.onDeleteStudentWork(work.id)} size="sm" variant="ghost" className="text-xs w-full justify-center !border-red-500 !text-red-500 hover:!bg-red-50">Hapus</Button>
                </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, name, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
    <input id={name} name={name} {...props} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" />
  </div>
);


export default ManageAchievements;