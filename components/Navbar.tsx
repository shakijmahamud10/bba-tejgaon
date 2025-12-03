import React, { useState, useEffect } from 'react';
import { PROGRAMS_DATA, FACULTY_DATA, EVENTS_DATA } from '../constants';

import logo from '../assets/main-logo2.png';

interface NavbarProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Derived search results
    const results = searchQuery.length < 2 ? [] : [
        ...FACULTY_DATA.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({ ...p, desc: `${p.title} • ${p.dept}`, type: 'Faculty', link: 'faculties' })),
        ...EVENTS_DATA.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase())).map(e => ({ ...e, desc: e.time, type: 'Event', link: 'events' }))
    ];

    const handleNavigate = (page: string) => {
        onNavigate(page);
        setIsMenuOpen(false);
        setIsSearchOpen(false);
        setSearchQuery("");
        setIsModalOpen(false);
    };

    const handleItemClick = (item: any) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    // Prevent body scroll when menu/search/modal is open
    useEffect(() => {
        if (isMenuOpen || isSearchOpen || isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen, isSearchOpen, isModalOpen]);

    const isApplyPage = currentPage === 'apply';

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between whitespace-nowrap py-3">
                        <div className="flex items-center gap-8">
                            <button onClick={() => handleNavigate('home')} className="flex items-center gap-3 text-slate-800 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
                                <img src={logo} alt="Tejgaon College Logo" className="h-16 w-auto" />
                                {/* <h2 className="text-xl font-bold tracking-tighter">BBA -Tejgaon College</h2> */}
                            </button>
                        </div>

                        <nav className="hidden items-center gap-8 lg:flex absolute left-1/2 -translate-x-1/2">
                            {['home', 'admission', 'campus-life', 'faculties', 'notice'].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handleNavigate(page)}
                                    className={`text-sm font-bold capitalize transition-colors ${currentPage === page
                                        ? 'text-secondary'
                                        : 'text-slate-700 hover:text-secondary dark:text-gray-200 dark:hover:text-secondary'
                                        }`}
                                >
                                    {page === 'home' ? 'Home' : page === 'campus-life' ? 'Campus Life' : page}
                                </button>
                            ))}
                        </nav>

                        <div className="flex items-center justify-end gap-2">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                            >
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </button>
                            <button
                                onClick={() => handleNavigate(isApplyPage ? 'login' : 'apply')}
                                className="hidden min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-gradient-to-r from-secondary to-primary  text-white text-sm font-bold tracking-wide hover:scale-105 transition-all duration-200 md:flex"
                            >
                                <span>{isApplyPage ? "Applicant's Login" : "Apply Now"}</span>
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                aria-label="Toggle menu"
                            >
                                <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-4 border-t border-gray-100 dark:border-gray-800">
                            <nav className="flex flex-col gap-2">
                                {['home', 'admission', 'campus-life', 'faculties', 'notice'].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handleNavigate(page)}
                                        className={`flex items-center w-full px-4 py-3 text-sm font-bold capitalize rounded-lg transition-colors ${currentPage === page
                                            ? 'bg-secondary/10 text-secondary'
                                            : 'text-slate-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {page === 'home' ? 'Home' : page === 'campus-life' ? 'Campus Life' : page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handleNavigate(isApplyPage ? 'login' : 'apply')}
                                    className="hidden mt-2 w-full lg:flex items-center justify-center rounded-lg h-12 bg-gradient-to-r from-secondary to-primary text-white text-sm font-bold tracking-wide transition-colors hover:bg-secondary/90"
                                >
                                    <span>{isApplyPage ? "Applicant's Login" : "Apply Now"}</span>
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Global Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[60] flex flex-col bg-white dark:bg-background-dark animate-fade-in">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <span className="material-symbols-outlined text-3xl text-slate-400">search</span>
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search programs, faculty, events..."
                                className="flex-1 text-xl md:text-2xl font-medium bg-transparent border-none focus:ring-0 placeholder-slate-300 dark:placeholder-slate-600 dark:text-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        <div className="mt-8 overflow-y-auto max-h-[calc(100vh-120px)]">
                            {searchQuery.length > 0 && results.length === 0 && (
                                <p className="text-center text-slate-500 mt-10">No results found for "{searchQuery}"</p>
                            )}

                            {results.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Results</h3>
                                    {results.map((item, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleItemClick(item)}
                                            className="w-full text-left flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                                        >
                                            {item.type === 'Faculty' && 'img' in item ? (
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/20"
                                                />
                                            ) : (
                                                <div className="bg-secondary/10 text-secondary p-2 rounded-lg">
                                                    <span className="material-symbols-outlined">
                                                        {item.type === 'Program' ? 'school' : item.type === 'Faculty' ? 'person' : 'event'}
                                                    </span>
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.type === 'Faculty' ? (item as any).name : item.title}</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{item.desc}</p>
                                                <span className="text-xs font-medium text-secondary mt-1 inline-block">{item.type}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {searchQuery.length === 0 && (
                                <div className="text-center mt-20">
                                    <span className="material-symbols-outlined text-6xl text-slate-200 dark:text-slate-700 mb-4">search</span>
                                    <p className="text-slate-500 dark:text-slate-400">Start typing to search across the university...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Details Modal */}
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
                    <div
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                                {selectedItem.type === 'Faculty' && selectedItem.img ? (
                                    <img
                                        src={selectedItem.img}
                                        alt={selectedItem.title}
                                        className="w-20 h-20 rounded-full object-cover ring-4 ring-secondary/20"
                                    />
                                ) : (
                                    <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl text-white">
                                        <span className="material-symbols-outlined text-4xl">
                                            {selectedItem.type === 'Program' ? 'school' : selectedItem.type === 'Faculty' ? 'person' : 'event'}
                                        </span>
                                    </div>
                                )}
                                <div className="flex-1">
                                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 inline-block">
                                        {selectedItem.type}
                                    </span>
                                    <h2 className="text-md lg:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                        {selectedItem.type === 'Faculty' ? (selectedItem as any).name : selectedItem.title}
                                    </h2>
                                    <p className="text-xs lg:text-sm  text-slate-600 dark:text-slate-400">
                                        {selectedItem.desc}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-500 transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-6">
                            {/* Faculty Details */}
                            {selectedItem.type === 'Faculty' && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                Position
                                            </span>
                                            <p className="text-sm lg:text-base font-semibold text-slate-900 dark:text-white    bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                                {selectedItem.title}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                Department
                                            </span>
                                            <p className="text-sm lg:text-base font-semibold text-slate-900 dark:text-white   bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                                {selectedItem.dept}
                                            </p>
                                        </div>
                                    </div>

                                    {/* View Full Profile/Details/Information suggestion */}
                                    {/* <div className="bg-gradient-to-br from-secondary/5 to-primary/5 dark:from-secondary/10 dark:to-primary/10 p-4 rounded-xl border border-secondary/10">
                                        <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                                            Click "View Full Profile" to see complete information and contact details
                                        </p>
                                    </div> */}
                                </div>
                            )}

                            {/* Program Details */}
                            {selectedItem.type === 'Program' && (
                                <div className="space-y-4">
                                    {selectedItem.img && (
                                        <img
                                            src={selectedItem.img}
                                            alt={selectedItem.title}
                                            className="w-full h-48 object-cover rounded-xl"
                                        />
                                    )}
                                    <div className="grid grid-cols-3 gap-3">
                                        {selectedItem.badge && (
                                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                    Degree
                                                </span>
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                                    {selectedItem.badge}
                                                </p>
                                            </div>
                                        )}
                                        {selectedItem.level && (
                                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                    Level
                                                </span>
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                                    {selectedItem.level}
                                                </p>
                                            </div>
                                        )}
                                        {selectedItem.delivery && (
                                            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                    Delivery
                                                </span>
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                                    {selectedItem.delivery}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Event Details */}
                            {selectedItem.type === 'Event' && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl flex items-center gap-3">
                                            <span className="material-symbols-outlined text-secondary text-3xl">schedule</span>
                                            <div>
                                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                    Time
                                                </span>
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                                    {selectedItem.time}
                                                </p>
                                            </div>
                                        </div>
                                        {selectedItem.location && (
                                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl flex items-center gap-3">
                                                <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
                                                <div>
                                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                        Location
                                                    </span>
                                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                                        {selectedItem.location}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {selectedItem.category && (
                                        <div className="bg-secondary/10 dark:bg-secondary/20 p-3 rounded-lg">
                                            <span className="text-sm font-bold text-secondary">
                                                Category: {selectedItem.category}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between gap-4">
                            <button
                                onClick={closeModal}
                                className="px-6 py-3 rounded-lg font-semibold text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Close
                            </button>


                            {/* View Full Profile/Details/Information button */}
                            {/* <button
                                onClick={() => handleNavigate(selectedItem.link)}
                                className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-secondary to-primary text-white hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                View Full {selectedItem.type === 'Faculty' ? 'Profile' : selectedItem.type === 'Program' ? 'Details' : 'Information'}
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;