import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = React.useState<{ img: string; title: string; category: string } | null>(null);

    const photos = [
        { id: 1, img: IMAGES.HERO, title: "Campus View", category: "Campus", span: "row-span-2" },
        // { id: 2, img: IMAGES.HERO, title: "Engineering Building", category: "Facilities", span: "row-span-1" },
        { id: 3, img: IMAGES.BUSINESS, title: "Business School", category: "Facilities", span: "row-span-1" },
        { id: 4, img: IMAGES.ARTS, title: "Arts & Sciences", category: "Facilities", span: "row-span-2" },
        { id: 5, img: IMAGES.HEALTH, title: "Health Sciences", category: "Facilities", span: "row-span-1" },
        { id: 6, img: IMAGES.NEWS1, title: "Campus Research", category: "News", span: "row-span-1" },
        { id: 7, img: IMAGES.NEWS2, title: "Student Activities", category: "News", span: "row-span-2" },
        { id: 8, img: IMAGES.COMP_SCI, title: "Computer Science Lab", category: "Academics", span: "row-span-1" },
        { id: 9, img: IMAGES.MBA, title: "MBA Program", category: "Academics", span: "row-span-1" },
        { id: 10, img: IMAGES.BIO, title: "Biology Lab", category: "Academics", span: "row-span-2" },
        { id: 11, img: IMAGES.FINE_ARTS, title: "Fine Arts Studio", category: "Facilities", span: "row-span-1" },
        // { id: 12, img: IMAGES.HERO, title: "Engineering Lab", category: "Facilities", span: "row-span-1" },
        { id: 13, img: IMAGES.BUSINESS, title: "Business Lecture", category: "Academics", span: "row-span-2" },
        { id: 14, img: IMAGES.ARTS, title: "Liberal Arts", category: "Academics", span: "row-span-1" },
        { id: 15, img: IMAGES.HEALTH, title: "Health Center", category: "Facilities", span: "row-span-1" },
        { id: 16, img: IMAGES.HERO, title: "Main Building", category: "Campus", span: "row-span-2" },
        { id: 17, img: IMAGES.COMP_SCI, title: "Technology Hub", category: "Facilities", span: "row-span-1" },
        { id: 18, img: IMAGES.MBA, title: "Executive Education", category: "Academics", span: "row-span-1" },
        { id: 19, img: IMAGES.BIO, title: "Science Building", category: "Facilities", span: "row-span-1" },
        { id: 20, img: IMAGES.FINE_ARTS, title: "Art Gallery", category: "Events", span: "row-span-2" }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-[20s]"
                    style={{ backgroundImage: `url('${IMAGES.HERO}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-50 dark:to-gray-950" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

                    {/* <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary-200 text-sm font-bold mb-6 animate-fade-in-up">
                                    Student Life
                                </span> */}

                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-lg animate-fade-in-up delay-100">
                        Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300"> Gallery</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 mb-8">
                        Discover vibrant student activities, join hundreds of organizations, and make memories that last a lifetime.
                    </p>

                </div>
            </div>

            {/* Gallery Grid - Masonry Layout */}
            <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            onClick={() => setSelectedImage(photo)}
                            className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 min-h-full ${photo.span}`}
                        >
                            <img
                                src={photo.img}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                                    {photo.category}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

                                <h3 className="text-base md:text-xl font-bold text-white leading-tight">{photo.title}</h3>
                                <div className="mt-2 flex items-center gap-2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                                    <span>Click to view</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white text-4xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-10"
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <div className="max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
                        <img
                            src={selectedImage.img}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="mt-6 text-center">
                            <span className="inline-block px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full text-sm font-bold mb-3 text-white shadow-lg">
                                {selectedImage.category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedImage.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
