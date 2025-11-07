
import React, { useState, useEffect, useCallback } from 'react';
import Card from '../ui/Card';

// Component for the main hub
const KidsZoneHub: React.FC<{ onSelectActivity: (activity: string) => void }> = ({ onSelectActivity }) => (
    <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-4">Selamat Datang di Zona Anak!</h1>
        <p className="text-lg md:text-xl text-white/90 drop-shadow-md mb-12">Pilih aktivitas seru di bawah ini!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ActivityCard icon="🎨" title="Ayo Mewarnai" onClick={() => onSelectActivity('coloring')} />
            <ActivityCard icon="📖" title="Sudut Dongeng" onClick={() => onSelectActivity('stories')} />
            <ActivityCard icon="🎵" title="Lagu Ceria" onClick={() => onSelectActivity('songs')} />
        </div>
    </div>
);

// Reusable card for activities
const ActivityCard: React.FC<{icon: string, title: string, onClick: () => void}> = ({ icon, title, onClick }) => (
    <button onClick={onClick} className="bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all transform focus:outline-none focus:ring-4 focus:ring-yellow-300">
        <div className="text-7xl mb-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </button>
);


// Coloring Book Component
const ColoringBook: React.FC = () => {
    const colors = ['#FF6347', '#FFD700', '#ADFF2F', '#40E0D0', '#1E90FF', '#9370DB', '#FFFFFF'];
    const [selectedColor, setSelectedColor] = useState('#FF6347');
    const [fillColors, setFillColors] = useState({ path1: 'white', path2: 'white', path3: 'white' });

    const handleFill = (part: keyof typeof fillColors) => {
        setFillColors(prev => ({...prev, [part]: selectedColor}));
    }

    return (
        <Card className="p-6 md:p-8 w-full max-w-2xl mx-auto bg-white/90">
            <h2 className="text-2xl font-bold text-center mb-4">Ayo Mewarnai Roket!</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-2/3">
                    <svg viewBox="0 0 100 100" className="w-full h-auto cursor-pointer">
                        {/* Rocket Body */}
                        <path d="M 50 10 L 70 40 L 70 80 L 30 80 L 30 40 Z" stroke="black" strokeWidth="2" fill={fillColors.path1} onClick={() => handleFill('path1')} />
                        {/* Window */}
                        <circle cx="50" cy="50" r="10" stroke="black" strokeWidth="2" fill={fillColors.path2} onClick={() => handleFill('path2')} />
                        {/* Flame */}
                        <path d="M 40 80 Q 50 100 60 80 L 40 80" stroke="black" strokeWidth="2" fill={fillColors.path3} onClick={() => handleFill('path3')} />
                    </svg>
                </div>
                <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-center gap-2">
                    {colors.map(color => (
                        <button 
                            key={color} 
                            onClick={() => setSelectedColor(color)}
                            style={{ backgroundColor: color }}
                            className={`w-12 h-12 rounded-full border-4 ${selectedColor === color ? 'border-gray-800' : 'border-white'}`}
                        />
                    ))}
                </div>
            </div>
        </Card>
    )
};

// Stories/Songs Component
const ContentList: React.FC<{ type: 'stories' | 'songs' }> = ({ type }) => {
    const items = type === 'stories' ? 
        [
            { title: 'Kancil dan Buaya', icon: '🐊' },
            { title: 'Bawang Merah dan Bawang Putih', icon: '🧅' },
            { title: 'Timun Mas', icon: '🥒' }
        ] :
        [
            { title: 'Pelangi-Pelangi', icon: '🌈' },
            { title: 'Balonku Ada Lima', icon: '🎈' },
            { title: 'Bintang Kecil', icon: '⭐' }
        ];
    const [playing, setPlaying] = useState<string | null>(null);

    return (
        <Card className="p-6 md:p-8 w-full max-w-2xl mx-auto bg-white/90">
             <h2 className="text-2xl font-bold text-center mb-6">{type === 'stories' ? 'Pilih Dongeng' : 'Pilih Lagu'}</h2>
             <div className="space-y-4">
                {items.map(item => (
                    <div key={item.title} className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-3xl mr-4">{item.icon}</span>
                            <span className="font-bold text-gray-700">{item.title}</span>
                        </div>
                        <button onClick={() => setPlaying(item.title)} className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>
                    </div>
                ))}
             </div>
             {playing && <p className="text-center mt-6 text-green-700 font-semibold animate-pulse">Memainkan: {playing}...</p>}
        </Card>
    )
};


// Main Page Component
const KidsZonePage: React.FC = () => {
    const [activity, setActivity] = useState<string | null>(null);

    return (
        <div className="min-h-screen py-16 sm:py-24 bg-gradient-to-br from-sky-400 to-green-400 flex items-center justify-center animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {!activity && <KidsZoneHub onSelectActivity={setActivity} />}
                
                {activity && (
                    <div className="animate-fade-in">
                        <div className="text-center mb-8">
                            <button onClick={() => setActivity(null)} className="bg-white/80 text-gray-800 font-bold py-2 px-6 rounded-full hover:bg-white transition-transform transform hover:scale-105">
                                ← Kembali
                            </button>
                        </div>
                        {activity === 'coloring' && <ColoringBook />}
                        {activity === 'stories' && <ContentList type="stories" />}
                        {activity === 'songs' && <ContentList type="songs" />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default KidsZonePage;
