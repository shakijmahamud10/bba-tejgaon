import React from 'react';
import { IMAGES } from '../constants';

const Visit: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<number | null>(null);
    const [showSuccess, setShowSuccess] = React.useState(false);

    // Simple calendar generation for current month (assuming 30 days for demo simplicity)
    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    const handleSubmit = () => {
        if (selectedDate) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                setIsModalOpen(false);
                setSelectedDate(null);
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-gray-950">
            {/* Hero Banner */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-[20s]"
                    style={{ backgroundImage: `url('${IMAGES.HERO}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-50 dark:to-gray-950" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary-200 text-sm font-bold mb-6 animate-fade-in-up">
                        Welcome to Our Campus
                    </span> */}
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-lg animate-fade-in-up delay-100">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Innovation</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Walk our green pathways, visit our state-of-the-art labs, and meet the people who make this place home.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10 pb-20">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl text-blue-500 group-hover:text-white transition-colors">tour</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Campus Tours</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Join our student ambassadors for a 60-minute walking tour of our historic grounds and modern facilities.
                        </p>
                        <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400">
                            <span>Mon-Fri • 10am & 2pm</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl text-purple-500 group-hover:text-white transition-colors">calendar_month</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Open House</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Comprehensive sessions covering academics, admissions, and student life. Perfect for prospective students.
                        </p>
                        <div className="flex items-center text-sm font-bold text-purple-600 dark:text-purple-400">
                            <span>Monthly Events</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between relative overflow-hidden group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                            <span className="material-symbols-outlined text-9xl">schedule</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Plan Your Visit</h3>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                Ready to see it for yourself? Schedule a personalized tour today.
                            </p>
                        </div>
                        <button className="w-full py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                            Book Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-[2.5rem] opacity-30 blur-2xl" />
                        <div className="relative grid grid-cols-2 gap-4">
                            <img src={IMAGES.ARTS} alt="Campus Life" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8 hover:-translate-y-2 transition-transform duration-500" loading="lazy" decoding="async" />
                            <img src={IMAGES.HERO} alt="Facilities" className="rounded-2xl shadow-lg w-full h-64 object-cover hover:-translate-y-2 transition-transform duration-500" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="lg:pl-10">
                        <h2 className="text-2xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6">
                            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Vibrant Community</span>
                        </h2>
                        <p className="text-md text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            There's no better way to understand the energy at Tejgaon College than to experience it yourself. From our bustling student center to our quiet study corners, every space is designed to inspire.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {['Modern Labs', 'Green Campus', 'Student Center', 'Library'].map((item, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl border border-slate-100 dark:border-gray-800">
                    <div className="bg-slate-50 dark:bg-gray-800 rounded-[2rem] overflow-hidden relative h-[500px] group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7032539252227!2d90.3860690747922!3d23.757959188487185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a6b5c8b851%3A0xbd30fd584b97cb22!2sTejgaon%20College!5e0!3m2!1sen!2sbd!4v1764441141016!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Tejgaon College Location"
                            className="absolute inset-0  group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm border border-white/20">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/10 rounded-xl">
                                    <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Getting Here</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        We are conveniently located in the heart of the city, accessible by public transit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scheduling Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-up">
                        <div className="bg-gradient-to-r from-secondary to-primary p-6 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-8xl">calendar_month</span>
                            </div>
                            <h3 className="text-2xl font-bold relative z-10">Schedule a Visit</h3>
                            <p className="text-white/80 relative z-10">Select a date that works for you.</p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition-colors z-20"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="p-8">
                            {!showSuccess ? (
                                <>
                                    <div className="mb-8">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="font-bold text-slate-900 dark:text-white">December 2025</h4>
                                            <div className="flex gap-2">
                                                <button className="p-1 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-full text-slate-400"><span className="material-symbols-outlined">chevron_left</span></button>
                                                <button className="p-1 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-full text-slate-400"><span className="material-symbols-outlined">chevron_right</span></button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2">
                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                                <div key={i} className="text-center text-xs font-bold text-slate-400 mb-2">{d}</div>
                                            ))}
                                            {days.map(day => (
                                                <button
                                                    key={day}
                                                    onClick={() => setSelectedDate(day)}
                                                    className={`aspect-square rounded-xl text-sm font-bold transition-all duration-200 ${selectedDate === day
                                                        ? 'bg-secondary text-white shadow-lg scale-105'
                                                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-gray-800'
                                                        }`}
                                                >
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={!selectedDate}
                                        className="w-full py-4 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        Confirm Booking
                                    </button>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-short">
                                        <span className="material-symbols-outlined text-4xl text-green-500">check_circle</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Booking Confirmed!</h3>
                                    <p className="text-slate-500 dark:text-slate-400">We look forward to seeing you on December {selectedDate}th.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Visit;
