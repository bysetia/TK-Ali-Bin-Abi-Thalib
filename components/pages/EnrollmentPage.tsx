
import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const EnrollmentPage: React.FC = () => {
  const [formState, setFormState] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    console.log(formState);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Informasi Pendaftaran</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Bergabunglah dengan keluarga besar kami. Berikut adalah langkah-langkah mudah untuk mendaftar.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Alur Pendaftaran & Biaya */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Alur Pendaftaran</h2>
            <div className="space-y-6">
              <Step number="1" title="Isi Formulir" description="Lengkapi formulir pendaftaran online di samping atau datang langsung ke sekolah." />
              <Step number="2" title="Observasi & Wawancara" description="Jadwal observasi untuk anak dan wawancara dengan orang tua akan kami informasikan." />
              <Step number="3" title="Konfirmasi & Pembayaran" description="Lakukan pembayaran biaya pendaftaran setelah menerima konfirmasi penerimaan." />
              <Step number="4" title="Selamat Bergabung!" description="Anak Anda siap memulai petualangan belajar yang menyenangkan bersama kami." />
            </div>

            <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Biaya Pendidikan</h2>
                <Card className="p-6 bg-yellow-50">
                    <p className="text-gray-700 mb-4">Untuk rincian lengkap mengenai biaya pendidikan, silakan unduh brosur kami.</p>
                    <a href="#" download className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition">
                       Unduh Rincian Biaya (PDF)
                    </a>
                </Card>
            </div>
          </div>

          {/* Formulir Pendaftaran */}
          <div>
            <Card className="p-8 shadow-2xl">
              {isSubmitted ? (
                 <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-2xl font-bold text-green-700">Terima Kasih!</h2>
                    <p className="text-gray-600 mt-2">Formulir Anda telah kami terima. Kami akan segera menghubungi Anda.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-6" variant="secondary">Kirim Pesan Lagi</Button>
                 </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Formulir Kontak & Pendaftaran</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <FormInput label="Nama Orang Tua/Wali" name="parentName" value={formState.parentName} onChange={handleChange} required />
                    <FormInput label="Nama Anak" name="childName" value={formState.childName} onChange={handleChange} required />
                    <div>
                        <label htmlFor="childAge" className="block text-sm font-bold text-gray-700 mb-1">Usia Anak</label>
                        <select id="childAge" name="childAge" value={formState.childAge} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500">
                            <option value="">Pilih usia</option>
                            <option value="3">3 Tahun</option>
                            <option value="4">4 Tahun</option>
                            <option value="5">5 Tahun</option>
                        </select>
                    </div>
                    <FormInput label="Email" name="email" type="email" value={formState.email} onChange={handleChange} required />
                    <FormInput label="Nomor Telepon" name="phone" type="tel" value={formState.phone} onChange={handleChange} required />
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Pesan (Opsional)</label>
                        <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"></textarea>
                    </div>
                    <Button type="submit" size="lg" variant="primary" className="w-full">Kirim Formulir</Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components
const Step: React.FC<{number: string, title: string, description: string}> = ({number, title, description}) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white font-bold text-xl rounded-full flex items-center justify-center mr-4">
            {number}
        </div>
        <div>
            <h3 className="font-bold text-lg text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
const FormInput: React.FC<FormInputProps> = ({label, name, ...props}) => (
    <div>
        <label htmlFor={name} className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
        <input id={name} name={name} {...props} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" />
    </div>
);

export default EnrollmentPage;
