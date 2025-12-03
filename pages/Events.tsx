import React, { useState } from 'react';
import { IMAGES, EVENTS_DATA } from '../constants';

const Events: React.FC = () => {
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["Academics", "Sports", "Arts & Culture", "Workshops", "Social"]);

    const categories = ["Academics", "Sports", "Arts & Culture", "Workshops", "Social"];

    const toggleCategory = (cat: string) => {
        if (selectedCategories.includes(cat)) {
            setSelectedCategories(selectedCategories.filter(c => c !== cat));
        } else {
            setSelectedCategories([...selectedCategories, cat]);
        }
    };

    const filteredEvents = EVENTS_DATA.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategories.includes(event.category);
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-screen">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Event Calendar</h1>
                    <p className="text-slate-500 dark:text-slate-400">Explore upcoming events, workshops, and activities across the university.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                        <button className="px-4 py-1.5 rounded-md bg-secondary text-white text-sm font-bold shadow-sm">Month</button>
                        <button className="px-4 py-1.5 rounded-md text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Week</button>
                        <button className="px-4 py-1.5 rounded-md text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Day</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Filters</h3>
                        <div className="relative mb-4">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                type="text"
                                placeholder="Search events..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-secondary focus:border-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="space-y-3">
                            {categories.map((cat, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-secondary focus:ring-secondary dark:bg-gray-800 dark:border-gray-600"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                    />
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Upcoming Events</h3>
                        {filteredEvents.length > 0 ? (
                            <div className="space-y-5">
                                {filteredEvents.map((ev, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary dark:bg-secondary/20">
                                            <span className="text-[10px] font-bold uppercase">{ev.month}</span>
                                            <span className="text-lg font-black leading-none">{ev.date}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1">{ev.title}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{ev.time}</p>
                                            <span className="text-[10px] uppercase font-bold text-slate-400 mt-1 inline-block border border-gray-200 dark:border-gray-700 px-1.5 rounded">{ev.category}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-slate-500 text-center py-4">No events found matching your criteria.</p>
                        )}
                    </div>
                </aside>

                {/* Calendar Grid */}
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">October 2024</h2>
                        <div className="flex gap-2">
                            <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">chevron_left</span></button>
                            <button className="px-3 py-1 text-sm font-bold border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">Today</button>
                            <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined">chevron_right</span></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 mb-2">
                        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(day => (
                            <div key={day} className="text-center text-xs font-bold text-slate-400 py-2">{day}</div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 lg:gap-2">
                        <div className="aspect-square"></div>
                        <div className="aspect-square"></div>

                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                            const isToday = day === 22;
                            const hasEvent = [11, 15, 19, 25].includes(day);
                            const dotColor = day === 11 ? "bg-green-500" : day === 15 ? "bg-orange-500" : day === 25 ? "bg-red-500" : "bg-purple-500";

                            return (
                                <div key={day} className={`aspect-square rounded-lg border border-transparent hover:bg-gray-50 dark:hover:bg-gray-800 flex flex-col items-center justify-start pt-2 cursor-pointer relative ${isToday ? 'bg-secondary text-white hover:bg-secondary' : ''}`}>
                                    <span className={`text-sm font-medium ${!isToday && 'text-slate-700 dark:text-slate-300'}`}>{day}</span>

                                    {hasEvent && (
                                        <div className="mt-1 flex gap-1">
                                            <div className={`w-1.5 h-1.5 rounded-full ${isToday ? 'bg-white' : dotColor}`}></div>
                                            {day === 19 && <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;