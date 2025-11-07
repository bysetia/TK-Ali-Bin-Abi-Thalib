import React, { useState, useEffect } from 'react';
import { Program, Extracurricular } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ManageCurriculumProps {
  programs: Program[];
  onAddProgram: (program: Omit<Program, 'id'>) => void;
  onUpdateProgram: (program: Program) => void;
  onDeleteProgram: (id: string) => void;
  extracurriculars: Extracurricular[];
  onAddExtracurricular: (extra: Omit<Extracurricular, 'id'>) => void;
  onUpdateExtracurricular: (extra: Extracurricular) => void;
  onDeleteExtracurricular: (id: string) => void;
}

const emptyProgForm = { title: '', description: '', age: '', icon: '' };
const emptyExtraForm = { name: '', icon: '' };

const ManageCurriculum: React.FC<ManageCurriculumProps> = (props) => {
  const [progForm, setProgForm] = useState(emptyProgForm);
  const [editingProgId, setEditingProgId] = useState<string | null>(null);

  const [extraForm, setExtraForm] = useState(emptyExtraForm);
  const [editingExtraId, setEditingExtraId] = useState<string | null>(null);
  
  // Effect for Programs
  useEffect(() => {
    if (editingProgId) {
      const toEdit = props.programs.find(p => p.id === editingProgId);
      if (toEdit) setProgForm(toEdit);
    } else {
      setProgForm(emptyProgForm);
    }
  }, [editingProgId, props.programs]);

  // Effect for Extracurriculars
  useEffect(() => {
    if (editingExtraId) {
      const toEdit = props.extracurriculars.find(e => e.id === editingExtraId);
      if (toEdit) setExtraForm(toEdit);
    } else {
      setExtraForm(emptyExtraForm);
    }
  }, [editingExtraId, props.extracurriculars]);

  const handleProgSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProgId) {
      props.onUpdateProgram({ ...progForm, id: editingProgId });
    } else {
      props.onAddProgram(progForm);
    }
    setEditingProgId(null);
    setProgForm(emptyProgForm);
  };
  
  const handleExtraSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingExtraId) {
      props.onUpdateExtracurricular({ ...extraForm, id: editingExtraId });
    } else {
      props.onAddExtracurricular(extraForm);
    }
    setEditingExtraId(null);
    setExtraForm(emptyExtraForm);
  };

  return (
    <div className="animate-fade-in space-y-16">
      {/* MANAGE PROGRAMS */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Manajemen Program Belajar</h2>
        <Card className="p-8 mb-12 border-t-4 border-orange-400">
          <h3 className="text-xl font-bold mb-6 text-gray-700">{editingProgId ? 'Edit Program' : 'Tambah Program Baru'}</h3>
          <form onSubmit={handleProgSubmit} className="space-y-4">
             <FormInput label="Nama Program" name="title" value={progForm.title} onChange={e => setProgForm({...progForm, title: e.target.value})} />
             <FormInput label="Deskripsi" name="description" value={progForm.description} onChange={e => setProgForm({...progForm, description: e.target.value})} />
             <FormInput label="Rentang Usia (cth: Usia 3-4)" name="age" value={progForm.age} onChange={e => setProgForm({...progForm, age: e.target.value})} />
             <FormInput label="Ikon (Emoji)" name="icon" value={progForm.icon} onChange={e => setProgForm({...progForm, icon: e.target.value})} />
            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" variant="primary">{editingProgId ? 'Simpan' : 'Tambah Program'}</Button>
              {editingProgId && <Button onClick={() => setEditingProgId(null)} variant="ghost">Batal</Button>}
            </div>
          </form>
        </Card>
        <div className="space-y-4">
          {props.programs.map(prog => (
            <Card key={prog.id} className="p-4 flex items-center justify-between gap-4 border hover:shadow-md hover:border-orange-200 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-3xl p-2 bg-gray-100 rounded-lg">{prog.icon}</span>
                  <div>
                    <h4 className="font-bold">{prog.title} <span className="text-sm font-normal text-gray-500">({prog.age})</span></h4>
                    <p className="text-sm text-gray-600">{prog.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button onClick={() => setEditingProgId(prog.id)} size="sm" variant="secondary">Edit</Button>
                  <Button onClick={() => props.onDeleteProgram(prog.id)} size="sm" variant="ghost" className="!border-red-500 !text-red-500 hover:!bg-red-50">Hapus</Button>
                </div>
            </Card>
          ))}
        </div>
      </section>

      {/* MANAGE EXTRACURRICULARS */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Manajemen Ekstrakurikuler</h2>
        <Card className="p-8 mb-12 border-t-4 border-sky-400">
          <h3 className="text-xl font-bold mb-6 text-gray-700">{editingExtraId ? 'Edit Ekstrakurikuler' : 'Tambah Ekstrakurikuler Baru'}</h3>
          <form onSubmit={handleExtraSubmit} className="space-y-4">
             <FormInput label="Nama Kegiatan" name="name" value={extraForm.name} onChange={e => setExtraForm({...extraForm, name: e.target.value})} />
             <FormInput label="Ikon (Emoji)" name="icon" value={extraForm.icon} onChange={e => setExtraForm({...extraForm, icon: e.target.value})} />
            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" variant="primary">{editingExtraId ? 'Simpan' : 'Tambah'}</Button>
              {editingExtraId && <Button onClick={() => setEditingExtraId(null)} variant="ghost">Batal</Button>}
            </div>
          </form>
        </Card>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {props.extracurriculars.map(extra => (
            <Card key={extra.id} className="p-4 text-center border hover:shadow-lg transition-shadow">
                <span className="text-4xl">{extra.icon}</span>
                <p className="font-bold mt-2 truncate">{extra.name}</p>
                <div className="flex gap-2 pt-4 mt-2 border-t">
                  <Button onClick={() => setEditingExtraId(extra.id)} size="sm" variant="secondary" className="text-xs w-full justify-center">Edit</Button>
                  <Button onClick={() => props.onDeleteExtracurricular(extra.id)} size="sm" variant="ghost" className="text-xs w-full justify-center !border-red-500 !text-red-500 hover:!bg-red-50">Hapus</Button>
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


export default ManageCurriculum;