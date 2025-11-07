import React, { useState } from 'react';
import { Page, NewsArticle, Teacher, Testimonial, AlumniStat, FAQItem } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { testimonials, alumniStats } from '../../data/people';
import { faqs } from '../../data/faq';

interface HomePageProps {
  navigateTo: (page: Page) => void;
  newsArticles: NewsArticle[];
  teachers: Teacher[];
  onViewArticle: (id: string) => void;
}

const programs = [
    {
      icon: '🎨',
      title: 'Kreativitas Tanpa Batas',
      description: 'Mendorong imajinasi anak melalui seni, musik, dan drama.'
    },
    {
      icon: '🌱',
      title: 'Belajar dari Alam',
      description: 'Kegiatan luar ruang untuk menumbuhkan cinta pada lingkungan.'
    },
    {
      icon: '💡',
      title: 'Sains Menyenangkan',
      description: 'Eksperimen sederhana untuk membangun rasa ingin tahu.'
    }
  ];

const HomePage: React.FC<HomePageProps> = ({ navigateTo, newsArticles, teachers, onViewArticle }) => {
  const latestNews = newsArticles.slice(0, 3);
  const featuredTeachers = teachers.slice(0, 3);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleToggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-yellow-200 overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 text-center">
        <div className="absolute inset-0 bg-no-repeat bg-bottom" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.664 1.623-6.372 2.062H21.184z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight mb-4">
            Tempat Bermain Sambil Belajar
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Membentuk masa depan cerah melalui lingkungan belajar yang ceria, aman, dan penuh kasih sayang.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => navigateTo(Page.Enrollment)} size="lg" variant="primary">
              Daftar Sekarang!
            </Button>
            <Button onClick={() => navigateTo(Page.About)} size="lg" variant="ghost">
              Jadwalkan Tur Virtual
            </Button>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-16 sm:py-24 bg-sky-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Program Unggulan Kami</h2>
            <p className="mt-4 text-lg text-gray-600">Fokus pada pengembangan holistik untuk setiap anak.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="text-center p-8" hoverEffect>
                <div className="text-6xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Tim Pengajar Hebat Kami</h2>
            <p className="mt-4 text-lg text-gray-600">Pendidik profesional yang berdedikasi dan penuh kasih sayang.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeachers.map((teacher) => (
              <Card key={teacher.id} className="text-center" hoverEffect>
                <div className="relative">
                  <img src={teacher.imageUrl} alt={teacher.name} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                    <p className="text-yellow-300 font-semibold">{teacher.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{teacher.bio}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
              <Button onClick={() => navigateTo(Page.About)} size="lg" variant="secondary">
                  Kenali Semua Guru
              </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Berita Terbaru</h2>
            <p className="mt-4 text-lg text-gray-600">Ikuti kegiatan dan pengumuman terbaru dari sekolah kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <Card key={article.id} className="flex flex-col" hoverEffect>
                <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                  <p className="text-gray-600 flex-grow">{article.excerpt}</p>
                  <div className="mt-6">
                     <Button onClick={() => onViewArticle(article.id)} variant='ghost' size='sm'>
                        Baca Selengkapnya
                     </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
                <Button onClick={() => navigateTo(Page.News)} size="lg" variant="secondary">
                    Lihat Semua Berita
                </Button>
           </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-green-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Apa Kata Mereka?</h2>
            <p className="mt-4 text-lg text-gray-600">Kesan dari keluarga besar TK Ali bin Abi Thalib.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 flex flex-col items-center text-center bg-white">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-yellow-300" />
                <blockquote className="text-gray-600 italic mb-4 flex-grow">"{testimonial.quote}"</blockquote>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Stats Section */}
      <section className="py-16 sm:py-20 bg-sky-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">Jejak Alumni Cemerlang</h2>
                <p className="mt-3 text-lg opacity-90">Membangun fondasi kesuksesan sejak dini.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {alumniStats.map(stat => (
                    <div key={stat.label} className="bg-white/20 p-6 rounded-xl">
                        <div className="text-5xl mb-2">{stat.icon}</div>
                        <div className="text-4xl font-extrabold">{stat.value}</div>
                        <p className="font-semibold mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pertanyaan yang Sering Diajukan</h2>
            <p className="mt-4 text-lg text-gray-600">Menemukan jawaban cepat untuk pertanyaan umum.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="divide-y-2 divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-4">
                  <button
                    onClick={() => handleToggleFaq(index)}
                    className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-orange-500 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className={`transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kids Zone CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-600">Masuk ke Dunia Penuh Warna!</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-xl">Jelajahi Zona Anak kami yang seru dengan permainan edukatif, dongeng, dan lagu-lagu ceria.</p>
                </div>
                <Button onClick={() => navigateTo(Page.KidsZone)} size="lg" variant="secondary" className="flex-shrink-0">
                   Jelajahi Zona Anak
                   <span className="ml-2 text-2xl">🚀</span>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;