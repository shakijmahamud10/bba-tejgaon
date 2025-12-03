import React, { useState } from 'react';
import { IMAGES, PROGRAMS_DATA } from '../constants';

const Programs: React.FC = () => {
    const INITIAL_FILTERS = {
        "Undergraduate": true, "Graduate": true, "PhD": true,
        "Engineering": true, "Arts & Sciences": true, "Business": true, "Health": true,
        "On-Campus": true, "Online": true, "Hybrid": true
    };

    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState<{ [key: string]: boolean }>(INITIAL_FILTERS);
    const [sortOrder, setSortOrder] = useState("Name (A-Z)");

    const toggleFilter = (option: string) => {
        setFilters(prev => ({ ...prev, [option]: !prev[option] }));
    };

    const clearFilters = () => {
        setSearch("");
        setFilters(INITIAL_FILTERS);
    };

    const filteredPrograms = PROGRAMS_DATA.filter(prog => {
        const matchesSearch = prog.title.toLowerCase().includes(search.toLowerCase()) ||
            prog.desc.toLowerCase().includes(search.toLowerCase());
        const matchesLevel = filters[prog.level];
        const matchesSchool = filters[prog.school];
        const matchesDelivery = filters[prog.delivery];

        return matchesSearch && matchesLevel && matchesSchool && matchesDelivery;
    }).sort((a, b) => {
        if (sortOrder === "Name (A-Z)") return a.title.localeCompare(b.title);
        if (sortOrder === "Name (Z-A)") return b.title.localeCompare(a.title);
        return 0; // Default popularity
    });

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-screen">
            {/* Breadcrumbs & Header */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    <a href="#" className="text-slate-500 hover:text-secondary text-sm font-medium">Home</a>
                    <span className="text-slate-400 text-sm">/</span>
                    <a href="#" className="text-slate-500 hover:text-secondary text-sm font-medium">Academics</a>
                    <span className="text-slate-400 text-sm">/</span>
                    <span className="text-slate-800 dark:text-white text-sm font-medium">Program Catalog</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Explore Our Academic Programs</h1>
                <p className="text-slate-500 dark:text-slate-400">Showing {filteredPrograms.length} programs</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Filters</h3>
                            <button onClick={clearFilters} className="text-sm text-secondary hover:underline font-medium">Clear Filters</button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="search" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Search</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                                    <input
                                        type="text"
                                        placeholder="Keywords..."
                                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="sort" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sort by</label>
                                <select
                                    id="sort"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    className="w-full rounded-lg border-gray-300 bg-white py-2 px-3 text-sm focus:border-secondary focus:ring-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                >
                                    <option>Popularity</option>
                                    <option>Name (A-Z)</option>
                                    <option>Name (Z-A)</option>
                                </select>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-700" />

                            {[
                                { title: "Program Level", options: ["Undergraduate", "Graduate", "PhD"] },
                                { title: "School/Faculty", options: ["Engineering", "Arts & Sciences", "Business", "Health"] },
                                { title: "Delivery Method", options: ["On-Campus", "Online", "Hybrid"] }
                            ].map((filter, idx) => (
                                <details key={idx} className="group" open>
                                    <summary className="flex cursor-pointer items-center justify-between py-2 list-none">
                                        <span className="text-sm font-bold text-slate-800 dark:text-white">{filter.title}</span>
                                        <span className="material-symbols-outlined text-slate-400 transition group-open:rotate-180">expand_more</span>
                                    </summary>
                                    <div className="pt-2 space-y-2">
                                        {filter.options.map((opt, i) => (
                                            <label key={i} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="rounded border-gray-300 text-secondary focus:ring-secondary dark:bg-gray-800 dark:border-gray-600"
                                                    checked={filters[opt]}
                                                    onChange={() => toggleFilter(opt)}
                                                />
                                                <span className="text-sm text-slate-600 dark:text-slate-300">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Grid */}
                <div className="lg:col-span-3">
                    {filteredPrograms.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredPrograms.map((prog, idx) => (
                                <div key={idx} className="group flex flex-col bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg hover:border-secondary/50 transition-all">
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={prog.img} alt={prog.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
                                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">{prog.delivery}</div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">{prog.badge}</span>
                                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{prog.school}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{prog.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">{prog.desc}</p>
                                        <div className="flex gap-3 mt-auto">
                                            <button className="flex-1 rounded-lg bg-secondary py-2.5 text-sm font-bold text-white shadow-sm hover:bg-secondary/90 transition-colors">Apply Now</button>
                                            <button className="flex-1 rounded-lg bg-slate-100 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                            <span className="material-symbols-outlined text-6xl text-slate-200 dark:text-slate-700 mb-4">school</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No programs found</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">Try adjusting your filters or search terms.</p>
                            <button onClick={clearFilters} className="mt-6 text-sm font-bold text-secondary hover:underline">Reset all filters</button>
                        </div>
                    )}

                    {/* Pagination - Hide if no results */}
                    {filteredPrograms.length > 0 && (
                        <nav className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mt-12 pt-6">
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
                                <span className="material-symbols-outlined text-sm">arrow_back</span> Previous
                            </button>
                            <div className="hidden md:flex gap-1">
                                <button className="h-10 w-10 rounded-lg bg-secondary text-sm font-medium text-white shadow-sm">1</button>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
                                Next <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Programs;