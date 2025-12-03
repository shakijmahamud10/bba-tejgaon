import React from 'react';
import { IMAGES } from '../constants';

interface AdmissionProps {
    onNavigate?: (page: string) => void;
}

const Admission: React.FC<AdmissionProps> = ({ onNavigate }) => {
    const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const financialAidData = [
        {
            icon: 'workspace_premium',
            title: 'Scholarships',
            content: 'We offer merit-based scholarships for outstanding academic achievement, leadership, and community service. All applicants are automatically considered for merit scholarships upon applying.'
        },
        {
            icon: 'payments',
            title: 'Loans & Work-Study',
            content: 'Not available'
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-[20s]"
                    style={{ backgroundImage: `url('${IMAGES.HERO}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-50 dark:to-gray-950" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary-200 text-sm font-bold mb-6 animate-fade-in-up">
                        Start Your Journey
                    </span> */}
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-lg animate-fade-in-up delay-100">
                        Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">Future</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 mb-8">
                        Join our vibrant community of learners and leaders. We're here to guide you through every step of your application journey.
                    </p>
                    <div className="flex flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <button
                            onClick={() => onNavigate && onNavigate('apply')}
                            className="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all"
                        >
                            Apply Now
                        </button>
                        <button
                            onClick={() => onNavigate && onNavigate('visit')}
                            className="px-8 py-4 bg-white/60 backdrop-blur-md border border-white/30 text-primary rounded-full font-bold text-sm transition-transform hover:scale-105 hover:bg-white/70"
                        >
                            Schedule a Visit
                        </button>
                    </div>
                </div>
            </div>

            {/* Application Requirements */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-4">Application Requirements</h2>
                        <p className="text-md text-slate-600 dark:text-slate-400">Everything you need to complete your application</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'description', title: 'Personal Essay', desc: 'Share your unique story and aspirations with us.' },
                            { icon: 'school', title: 'Transcripts', desc: 'Submit official transcripts from all institutions attended.' },
                            { icon: 'group', title: 'Recommendations', desc: 'Two letters from teachers or counselors who know you well.' },
                            { icon: 'trending_up', title: 'Test Policy', desc: 'Our university has a test-optional admission policy.' }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Dates & Deadlines */}
            <section className="py-20 bg-slate-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Key Dates <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">& Deadlines</span></h2>
                        <p className="text-md text-slate-600 dark:text-slate-400">Mark your calendar with these important dates</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-[31px] before:top-8 before:bottom-8 before:w-1 before:bg-gradient-to-b before:from-secondary before:via-primary before:to-secondary before:rounded-full">
                        {[
                            { icon: 'calendar_today', title: 'Early Action Deadline', date: 'December 15, 2025', color: 'from-blue-500 to-blue-600' },
                            { icon: 'event', title: 'Regular Decision Deadline', date: 'January 15, 2026', color: 'from-purple-500 to-purple-600' },
                            { icon: 'attach_money', title: 'Financial Support', date: 'February 1, 2026', color: 'from-green-500 to-green-600' },
                            { icon: 'mail', title: 'Decision Notifications', date: 'February 5, 2026', color: 'from-orange-500 to-orange-600' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-6 relative z-10 group">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse`}>
                                    <span className="material-symbols-outlined text-3xl text-white">{item.icon}</span>
                                </div>
                                <div className="bg-white dark:bg-gray-800 flex-1 p-6 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-md font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Financial Aid */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Financial Support <span className= "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">& Scholarships </span> </h2>
                        <p className="text-md text-slate-600 dark:text-slate-400">We are committed to making education affordable</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {financialAidData.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => toggleAccordion(idx)}
                                className="group bg-gradient-to-r from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:border-secondary dark:hover:border-secondary transition-all duration-300 shadow-md hover:shadow-xl"
                            >
                                <div className="p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                        </div>
                                        <span className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</span>
                                    </div>
                                    <span className={`material-symbols-outlined text-slate-400 transition-transform duration-500 ${openAccordion === idx ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </div>
                                <div className={`px-6 text-slate-600 dark:text-slate-400 leading-relaxed transition-all duration-500 ease-in-out ${openAccordion === idx ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
                        <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Future?</h2>
                                <p className="text-xl text-white/90">Create your account and begin your application today.</p>
                            </div>
                            <button
                                onClick={() => onNavigate && onNavigate('apply')}
                                className="px-10 py-5 bg-white text-primary rounded-full font-bold text-sm hover:bg-blue-50 transition-all hover:scale-105 shadow-xl shrink-0"
                            >
                                Apply Now →
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admission;
