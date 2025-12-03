import React, { useState } from 'react';
import { IMAGES, NOTICE_DATA } from '../constants';

interface NoticeItem {
    title: string;
    date: string;
    category: string;
    content: string;
}

const Notice: React.FC = () => {
    const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

    const notices: NoticeItem[] = NOTICE_DATA;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-[20s]"
                    style={{ backgroundImage: `url('${IMAGES.HERO}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-50 dark:to-gray-950" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary-200 text-sm font-bold mb-6 animate-fade-in-up">
                        Notice Board
                    </span> */}
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-lg animate-fade-in-up delay-100">
                        Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">Updates</span>
                    </h1>
                    <p className="text-md md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Stay updated with the latest announcements and important news.
                    </p>
                </div>
            </div>

            {selectedNotice ? (
                <section className="max-w-7xl mx-auto px-4  py-12">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={() => setSelectedNotice(null)}
                            className="flex items-center gap-2 mb-8 px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:border-secondary transition-colors font-medium shadow-sm"
                        >
                            <span className="material-symbols-outlined text-lg">arrow_back</span>
                            Back to Notices
                        </button>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-lg">
                            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-secondary to-primary text-white">
                                    {selectedNotice.category}
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    {selectedNotice.date}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                {selectedNotice.title}
                            </h2>

                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-md leading-relaxed text-slate-600 dark:text-slate-300">
                                    {selectedNotice.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notices.map((notice, idx) => (
                            <div key={idx} className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:border-secondary/50 transition-all duration-300 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-secondary to-primary text-white">
                                        {notice.category}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        {notice.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                                    {notice.title}
                                </h3>

                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                    {notice.content}
                                </p>

                                <button
                                    onClick={() => setSelectedNotice(notice)}
                                    className="py-2 px-6 rounded-lg bg-gradient-to-r from-secondary to-primary text-white font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                                >
                                    Read More
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Notice;
