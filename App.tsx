import React, { useState, useCallback } from 'react';
import { Page, NewsArticle, Teacher, Achievement, StudentWork, GalleryItem, Program, Extracurricular } from './types';
import { initialNewsArticles } from './data/news';
import { initialTeachers } from './data/people';
import { initialAchievements, initialStudentWorks } from './data/achievements';
import { initialGalleryItems } from './data/gallery';
import { initialPrograms, initialExtracurriculars } from './data/curriculum';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CurriculumPage from './components/pages/CurriculumPage';
import FacilitiesPage from './components/pages/FacilitiesPage';
import GalleryPage from './components/pages/GalleryPage';
import AchievementsPage from './components/pages/AchievementsPage';
import KidsZonePage from './components/pages/KidsZonePage';
import EnrollmentPage from './components/pages/EnrollmentPage';
import NewsPage from './components/pages/NewsPage';
import NewsDetailPage from './components/pages/NewsDetailPage';
import AdminPage from './components/pages/AdminPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  
  // State for all manageable content
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>(initialNewsArticles);
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
  const [studentWorks, setStudentWorks] = useState<StudentWork[]>(initialStudentWorks);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems);
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);
  const [extracurriculars, setExtracurriculars] = useState<Extracurricular[]>(initialExtracurriculars);

  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    setSelectedArticleId(null); // Reset selected article when changing main pages
    window.scrollTo(0, 0);
  }, []);

  const handleViewArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentPage(Page.News);
    window.scrollTo(0, 0);
  }
  
  // --- CRUD Handlers ---

  // News
  const handleAddArticle = (article: Omit<NewsArticle, 'id' | 'date'>) => {
    const newArticle: NewsArticle = {
      ...article,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };
    setNewsArticles(prev => [newArticle, ...prev]);
  };
  const handleUpdateArticle = (updatedArticle: NewsArticle) => setNewsArticles(prev => prev.map(a => a.id === updatedArticle.id ? updatedArticle : a));
  const handleDeleteArticle = (id: string) => setNewsArticles(prev => prev.filter(a => a.id !== id));
  
  // Teachers
  const handleAddTeacher = (teacher: Omit<Teacher, 'id'>) => setTeachers(prev => [{ ...teacher, id: Date.now().toString() }, ...prev]);
  const handleUpdateTeacher = (updated: Teacher) => setTeachers(prev => prev.map(t => t.id === updated.id ? updated : t));
  const handleDeleteTeacher = (id: string) => setTeachers(prev => prev.filter(t => t.id !== id));

  // Achievements
  const handleAddAchievement = (ach: Omit<Achievement, 'id'>) => setAchievements(prev => [{ ...ach, id: Date.now().toString() }, ...prev]);
  const handleUpdateAchievement = (updated: Achievement) => setAchievements(prev => prev.map(a => a.id === updated.id ? updated : a));
  const handleDeleteAchievement = (id: string) => setAchievements(prev => prev.filter(a => a.id !== id));

  // Student Works
  const handleAddStudentWork = (work: Omit<StudentWork, 'id'>) => setStudentWorks(prev => [{ ...work, id: Date.now().toString() }, ...prev]);
  const handleUpdateStudentWork = (updated: StudentWork) => setStudentWorks(prev => prev.map(w => w.id === updated.id ? updated : w));
  const handleDeleteStudentWork = (id: string) => setStudentWorks(prev => prev.filter(w => w.id !== id));

  // Gallery
  const handleAddGalleryItem = (item: Omit<GalleryItem, 'id'>) => setGalleryItems(prev => [{ ...item, id: Date.now() }, ...prev]);
  const handleUpdateGalleryItem = (updated: GalleryItem) => setGalleryItems(prev => prev.map(i => i.id === updated.id ? updated : i));
  const handleDeleteGalleryItem = (id: number) => setGalleryItems(prev => prev.filter(i => i.id !== id));

  // Programs
  const handleAddProgram = (prog: Omit<Program, 'id'>) => setPrograms(prev => [...prev, { ...prog, id: Date.now().toString() }]);
  const handleUpdateProgram = (updated: Program) => setPrograms(prev => prev.map(p => p.id === updated.id ? updated : p));
  const handleDeleteProgram = (id: string) => setPrograms(prev => prev.filter(p => p.id !== id));

  // Extracurriculars
  const handleAddExtracurricular = (extra: Omit<Extracurricular, 'id'>) => setExtracurriculars(prev => [...prev, { ...extra, id: Date.now().toString() }]);
  const handleUpdateExtracurricular = (updated: Extracurricular) => setExtracurriculars(prev => prev.map(e => e.id === updated.id ? updated : e));
  const handleDeleteExtracurricular = (id: string) => setExtracurriculars(prev => prev.filter(e => e.id !== id));


  const renderPage = () => {
    if (currentPage === Page.News && selectedArticleId) {
        const article = newsArticles.find(a => a.id === selectedArticleId);
        return article ? <NewsDetailPage article={article} onBack={() => setSelectedArticleId(null)} /> : <NewsPage articles={newsArticles} onViewArticle={handleViewArticle} />;
    }

    switch (currentPage) {
      case Page.Home:
        return <HomePage navigateTo={navigateTo} newsArticles={newsArticles} teachers={teachers} onViewArticle={handleViewArticle} />;
      case Page.About:
        return <AboutPage teachers={teachers} />;
      case Page.Curriculum:
        return <CurriculumPage programs={programs} extracurriculars={extracurriculars} />;
      case Page.Facilities:
        return <FacilitiesPage />;
      case Page.Gallery:
        return <GalleryPage galleryItems={galleryItems} />;
      case Page.Achievements:
        return <AchievementsPage achievements={achievements} studentWorks={studentWorks} />;
      case Page.KidsZone:
        return <KidsZonePage />;
      case Page.Enrollment:
        return <EnrollmentPage />;
      case Page.News:
        return <NewsPage articles={newsArticles} onViewArticle={handleViewArticle} />;
      case Page.Admin:
        return <AdminPage 
                    newsArticles={newsArticles} 
                    onAddArticle={handleAddArticle}
                    onUpdateArticle={handleUpdateArticle}
                    onDeleteArticle={handleDeleteArticle}

                    teachers={teachers}
                    onAddTeacher={handleAddTeacher}
                    onUpdateTeacher={handleUpdateTeacher}
                    onDeleteTeacher={handleDeleteTeacher}
                    
                    achievements={achievements}
                    onAddAchievement={handleAddAchievement}
                    onUpdateAchievement={handleUpdateAchievement}
                    onDeleteAchievement={handleDeleteAchievement}

                    studentWorks={studentWorks}
                    onAddStudentWork={handleAddStudentWork}
                    onUpdateStudentWork={handleUpdateStudentWork}
                    onDeleteStudentWork={handleDeleteStudentWork}

                    galleryItems={galleryItems}
                    onAddGalleryItem={handleAddGalleryItem}
                    onUpdateGalleryItem={handleUpdateGalleryItem}
                    onDeleteGalleryItem={handleDeleteGalleryItem}

                    programs={programs}
                    onAddProgram={handleAddProgram}
                    onUpdateProgram={handleUpdateProgram}
                    onDeleteProgram={handleDeleteProgram}

                    extracurriculars={extracurriculars}
                    onAddExtracurricular={handleAddExtracurricular}
                    onUpdateExtracurricular={handleUpdateExtracurricular}
                    onDeleteExtracurricular={handleDeleteExtracurricular}
                />;
      default:
        return <HomePage navigateTo={navigateTo} newsArticles={newsArticles} teachers={teachers} onViewArticle={handleViewArticle} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-yellow-50/50">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;