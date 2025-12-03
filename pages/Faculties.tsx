import React, { useState } from 'react';
import { IMAGES, FACULTY_DATA } from '../constants';

const Faculties: React.FC = () => {
    const [search, setSearch] = useState("");
    const [selectedDept, setSelectedDept] = useState("All Departments");

    const departments = ["All Departments", ...new Set(FACULTY_DATA.map(p => p.dept))];

    const filteredData = FACULTY_DATA.filter(person => {
        const matchesSearch = person.name.toLowerCase().includes(search.toLowerCase()) ||
            person.title.toLowerCase().includes(search.toLowerCase()) ||
            person.dept.toLowerCase().includes(search.toLowerCase());
        const matchesDept = selectedDept === "All Departments" || person.dept === selectedDept;

        return matchesSearch && matchesDept;
    });

    // Separate chairman from other faculty
    const chairman = filteredData.find(person => person.title === "Chairman");
    const otherFaculty = filteredData.filter(person => person.title !== "Chairman");

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-[20s]"
                    style={{ backgroundImage: `url('${IMAGES.HERO}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-50 dark:to-gray-950" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary-200 text-sm font-bold mb-6 animate-fade-in-up">
                        Academic Excellence
                    </span> */}
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-lg animate-fade-in-up delay-100">
                        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">Faculty</span>
                    </h1>
                    <p className="text-md md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Meet our distinguished faculty members who are dedicated to excellence in teaching, research, and mentorship.
                    </p>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 p-6">
                    <div className="relative mb-4">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-2xl">search</span>
                        <input
                            type="text"
                            placeholder="Search by name, department, or title..."
                            className="w-full pl-14 pr-4 py-4 rounded-xl bg-gradient-to-r from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 text-base focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all dark:text-white font-medium"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <div className="relative">
                            <select
                                value={selectedDept}
                                onChange={(e) => setSelectedDept(e.target.value)}
                                className="appearance-none pl-4 pr-12 py-3 rounded-xl border-2 border-gray-200 bg-gradient-to-r from-white to-slate-50 hover:border-secondary text-sm font-bold text-slate-700 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-4 focus:ring-secondary/20 cursor-pointer transition-all"
                            >
                                {departments.map((dept, i) => (
                                    <option key={i} value={dept}>{dept}</option>
                                ))}
                            </select>
                            <span className="material-symbols-outlined text-xl absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">arrow_drop_down</span>
                        </div>

                        {/* <button
                            onClick={() => { setSearch(""); setSelectedDept("All Departments"); }}
                            className="ml-auto px-6 py-3 rounded-xl bg-gradient-to-r from-secondary to-primary text-white font-bold hover:scale-105 transition-all shadow-md"
                        >
                            Clear Filters
                        </button> */}

                    </div>
                </div>
            </section>

            {/* Faculty Content */}
            {filteredData.length > 0 ? (
                <section className="max-w-7xl mx-auto px-4 py-16">
                    {/* Chairman - Featured */}
                    {chairman && (
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Department Chairman</h2>
                            <div className="flex justify-center">
                                <div className="flex flex-col items-center text-center max-w-xs bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105 duration-300">
                                    <div className="relative mb-5 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                                        <img
                                            src={chairman.img}
                                            alt={chairman.name}
                                            className="relative w-60 h-60 rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:-translate-y-2"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{chairman.name}</h3>
                                    <p className="text-base font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-1">{chairman.title}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{chairman.dept}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Faculty */}
                    {otherFaculty.length > 0 && (
                        <div>
                            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Our Faculty</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10">
                                {otherFaculty.map((person, i) => (
                                    <div key={i} className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-3 md:p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-secondary">
                                        <div className="relative mb-3 md:mb-6 group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                                            <img
                                                src={person.img}
                                                alt={person.name}
                                                className="relative w-32 h-32 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:-translate-y-2"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        <h3 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-1 md:mb-2 line-clamp-2">{person.name}</h3>
                                        <p className="text-xs md:text-sm bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-semibold max-w-xs line-clamp-2">{person.title}</p>
                                        <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-1">{person.dept}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            ) : (
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center py-20 bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-700">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-secondary">person_off</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No faculty found</h3>
                        <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or filters.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Faculties;
