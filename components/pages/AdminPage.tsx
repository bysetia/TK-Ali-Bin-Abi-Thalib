import React, { useState } from 'react';
import { NewsArticle, Teacher, Achievement, StudentWork, GalleryItem, Program, Extracurricular } from '../../types';
import ManageNews from '../admin/ManageNews';
import ManageTeachers from '../admin/ManageTeachers';
import ManageAchievements from '../admin/ManageAchievements';
import ManageGallery from '../admin/ManageGallery';
import ManageCurriculum from '../admin/ManageCurriculum';

type AdminTab = 'Berita' | 'Guru' | 'Prestasi & Karya' | 'Galeri' | 'Kurikulum';

interface AdminPageProps {
  newsArticles: NewsArticle[];
  onAddArticle: (article: Omit<NewsArticle, 'id' | 'date'>) => void;
  onUpdateArticle: (article: NewsArticle) => void;
  onDeleteArticle: (id: string) => void;

  teachers: Teacher[];
  onAddTeacher: (teacher: Omit<Teacher, 'id'>) => void;
  onUpdateTeacher: (teacher: Teacher) => void;
  onDeleteTeacher: (id: string) => void;

  achievements: Achievement[];
  onAddAchievement: (achievement: Omit<Achievement, 'id'>) => void;
  onUpdateAchievement: (achievement: Achievement) => void;
  onDeleteAchievement: (id: string) => void;
  
  studentWorks: StudentWork[];
  onAddStudentWork: (work: Omit<StudentWork, 'id'>) => void;
  onUpdateStudentWork: (work: StudentWork) => void;
  onDeleteStudentWork: (id: string) => void;

  galleryItems: GalleryItem[];
  onAddGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  onUpdateGalleryItem: (item: GalleryItem) => void;
  onDeleteGalleryItem: (id: number) => void;

  programs: Program[];
  onAddProgram: (program: Omit<Program, 'id'>) => void;
  onUpdateProgram: (program: Program) => void;
  onDeleteProgram: (id: string) => void;

  extracurriculars: Extracurricular[];
  onAddExtracurricular: (extra: Omit<Extracurricular, 'id'>) => void;
  onUpdateExtracurricular: (extra: Extracurricular) => void;
  onDeleteExtracurricular: (id: string) => void;
}


const AdminPage: React.FC<AdminPageProps> = (props) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('Berita');
  const tabs: AdminTab[] = ['Berita', 'Guru', 'Prestasi & Karya', 'Galeri', 'Kurikulum'];

  const renderContent = () => {
    switch(activeTab) {
      case 'Berita':
        return <ManageNews 
                  articles={props.newsArticles} 
                  onAddArticle={props.onAddArticle}
                  onUpdateArticle={props.onUpdateArticle}
                  onDeleteArticle={props.onDeleteArticle}
                />;
      case 'Guru':
        return <ManageTeachers
                  teachers={props.teachers}
                  onAddTeacher={props.onAddTeacher}
                  onUpdateTeacher={props.onUpdateTeacher}
                  onDeleteTeacher={props.onDeleteTeacher}
                />;
      case 'Prestasi & Karya':
        return <ManageAchievements
                  achievements={props.achievements}
                  onAddAchievement={props.onAddAchievement}
                  onUpdateAchievement={props.onUpdateAchievement}
                  onDeleteAchievement={props.onDeleteAchievement}
                  studentWorks={props.studentWorks}
                  onAddStudentWork={props.onAddStudentWork}
                  onUpdateStudentWork={props.onUpdateStudentWork}
                  onDeleteStudentWork={props.onDeleteStudentWork}
               />
      case 'Galeri':
        return <ManageGallery
                  galleryItems={props.galleryItems}
                  onAddGalleryItem={props.onAddGalleryItem}
                  onUpdateGalleryItem={props.onUpdateGalleryItem}
                  onDeleteGalleryItem={props.onDeleteGalleryItem}
               />
      case 'Kurikulum':
          return <ManageCurriculum
                    programs={props.programs}
                    onAddProgram={props.onAddProgram}
                    onUpdateProgram={props.onUpdateProgram}
                    onDeleteProgram={props.onDeleteProgram}
                    extracurriculars={props.extracurriculars}
                    onAddExtracurricular={props.onAddExtracurricular}
                    onUpdateExtracurricular={props.onUpdateExtracurricular}
                    onDeleteExtracurricular={props.onDeleteExtracurricular}
                 />
      default:
        return null;
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-sky-100 min-h-screen py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">Admin Dashboard</h1>
            <p className="text-lg text-gray-600 mb-10">Kelola seluruh konten website dari satu tempat.</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white/60 backdrop-blur-sm p-2 rounded-full shadow-inner flex flex-wrap justify-center gap-2">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2.5 font-bold text-sm sm:text-base rounded-full transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-white/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          {renderContent()}
        </div>

      </div>
    </div>
  );
};

export default AdminPage;