import React, { useState } from 'react';
import { IMAGES, NEWS_DATA, EVENTS_DATA, FACULTY_DATA, NOTICE_DATA, ADMINISTRATION_DATA } from '../constants';

import CountUp from '../components/CountUp';

interface HomeProps {
    onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const [selectedNotice, setSelectedNotice] = useState<any | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative">
                <div
                    className="flex min-h-[calc(100vh-64px)] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-2 text-center "
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url('${IMAGES.HERO}')`
                    }}
                >

                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/15 dark:to-gray-950 pointer-events-none" />

                    <div className="flex max-w-4xl flex-col items-center gap-6">
                        <h1 className="text-5xl font-black leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-accent animate-gradient-x md:text-7xl pb-2">
                            Be a Builder
                        </h1>
                        <h2 className="text-lg font-normal  text-white/90 md:text-xl max-w-2xl">
                            Where curiosity opens doors and ambitions take flight.
                        </h2>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button
                                // onClick={() => onNavigate('programs')}
                                className="flex h-12 min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-secondary to-primary px-8 text-sm font-bold text-white tracking-wide transition-transform hover:scale-105 hover:bg-secondary/90 shadow-lg"
                            >
                                Explore Programs
                            </button>
                            <button
                                onClick={() => onNavigate('visit')}
                                className="flex h-12 min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/80 px-8 text-sm  font-bold text-primary tracking-wide transition-transform hover:scale-105 hover:bg-white/90 shadow-lg"
                            >
                                Visit Campus
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Bar - Floating overlap */}
            <section className="relative z-10 px-4">
                <div className="max-w-7xl mx-auto -mt-14 md:-mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: "groups", title: "Students", end: 20, suffix: "K+" },
                            { icon: "school", title: "Faculties", end: 230, suffix: "" },
                            { icon: "apartment", title: "Departments", end: 28, suffix: "" },
                            { icon: "history_edu", title: "Founded", end: 1961, suffix: "" }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-secondary/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                                    <div className="p-2 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-3xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-lg md:text-xl font-black text-slate-800 dark:text-white tracking-tight">
                                            <CountUp end={item.end} suffix={item.suffix} />
                                        </h2>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1 group-hover:text-secondary transition-colors">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Highlights Section */}


            {/* <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                <h2 className="mb-12 text-left text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">Discover Your Passion</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { title: "Faculty of Business Administration", desc: "Build the future with cutting-edge technology and research.", img: IMAGES.HERO },
                        { title: "School of Business", desc: "Lead the market with innovative strategies and global insights.", img: IMAGES.HERO },
                        { title: "College of Arts & Sciences", desc: "Explore human culture, creativity, and critical thinking.", img: IMAGES.HERO },
                        { title: "Institute of Health", desc: "Advance wellness and healthcare for communities everywhere.", img: IMAGES.HERO }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-4 rounded-xl bg-white p-3 pb-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                            <div className="aspect-square w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("${item.img}")` }}></div>
                            <div className="px-2">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-sm text-text-light dark:text-text-dark line-clamp-2">{item.desc}</p>
                                <a href="#" className="mt-4 inline-flex items-center text-sm font-bold text-secondary hover:underline">
                                    Learn More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}



            {/* Vibrant Campus Life Section - Bento Grid */}
            <section className="bg-slate-50 py-16 dark:bg-gray-800/50 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12 flex items-end justify-center lg:justify-between">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white mb-2">
                                Vibrant <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Campus Life</span>
                            </h2>
                            <div className="lg:hidden h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mt-3"></div>
                        </div>
                        <button
                            onClick={() => onNavigate('gallery')}
                            className="hidden md:flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors"
                        >
                            View Gallery
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[240px]">
                        {/* Student Stories - Large Feature */}
                        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${IMAGES.HERO}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">
                                    Featured
                                </span>
                                <h3 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">Student Stories</h3>
                                <p className="text-sm md:text-base text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Discover the diverse voices and inspiring journeys that make our community unique.
                                </p>
                            </div>
                        </div>

                        {/* Business Club */}
                        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div
                                className="absolute inset-0 bg-contain bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${IMAGES.BUSINESS}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-primary/40 mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                <span className="material-symbols-outlined text-3xl text-white mb-auto opacity-50 group-hover:opacity-100 transition-opacity">groups</span>
                                <h3 className="text-lg md:text-xl font-bold text-white">Business Club</h3>
                            </div>
                        </div>

                        {/* Facilities */}
                        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${IMAGES.HERO}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl text-white">apartment</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white">Facilities</h3>
                            </div>
                        </div>

                        {/* Academic Excellence */}
                        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${IMAGES.ARTS}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                            <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Academic Excellence</h3>
                                <p className="text-sm text-white/80 max-w-xs">World-class research and learning opportunities.</p>
                                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <button
                            onClick={() => onNavigate('gallery')}
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
                        >
                            View Full Gallery
                        </button>
                    </div>
                </div>
            </section>


            {/* Meet Our Administration Section */}
            <section className="bg-white py-16 dark:bg-gray-900 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Administration</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full "></div>
                    </div>
                    <div className="flex flex-row justify-center gap-4 md:gap-12 ">
                        {ADMINISTRATION_DATA.map((admin, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center max-w-xs bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent p-4 md:p-0 rounded-3xl md:rounded-none shadow-xl md:shadow-none border border-gray-100 dark:border-gray-700 md:border-0 transition-transform hover:scale-105 md:hover:scale-100 duration-300">
                                <div className="relative mb-4 md:mb-6 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                                    <img
                                        src={admin.img}
                                        alt={admin.name}
                                        className="relative w-40 h-40 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl transition-transform duration-300 group-hover:-translate-y-2"
                                        loading="lazy"
                                        decoding="async"
                                    />

                                </div>
                                <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-2">{admin.name}</h3>
                                <p className="text-xs md:text-xs text-slate-600 dark:text-slate-400 font-medium max-w-xs line-clamp-3">{admin.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Faculty Section */}
            <section className="bg-slate-50 py-16 dark:bg-gray-800/50 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Faculty</span></h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                    </div>

                    {/* Chairman - Featured at Top */}
                    <div className="mb-12 flex justify-center">
                        <div className="flex flex-col items-center text-center max-w-xs bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105 duration-300">
                            <div className="relative mb-5 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                                <img
                                    src={FACULTY_DATA[0].img}
                                    alt={FACULTY_DATA[0].name}
                                    className="relative w-60 h-60 rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:-translate-y-2"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{FACULTY_DATA[0].name}</h3>
                            <p className="text-base font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-1">{FACULTY_DATA[0].title}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{FACULTY_DATA[0].dept}</p>
                        </div>
                    </div>

                    {/* Other Faculty - Grid Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {FACULTY_DATA.slice(1).map((person, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-3 md:p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-secondary">
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
                                <p className="text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-medium max-w-xs line-clamp-2">{person.title}</p>
                                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-1">{person.dept}</p>
                            </div>
                        ))}
                    </div>

                    {/* <div className="mt-12 text-center">
                        <button
                            onClick={() => onNavigate('faculties')}
                            className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-gradient-to-r from-secondary to-primary rounded-full hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                        >
                            View All Faculty
                        </button>
                    </div> */}
                </div>
            </section>


            {/* News & Events Section */}
            <section className="bg-white py-16 dark:bg-gray-900 sm:py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:gap-16">
                    {/* Latest News */}
                    <div>
                        <div className="mb-8 flex items-center justify-between">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary"  >News</span></h3>
                            <a href="#" className="text-sm font-bold text-secondary hover:underline flex items-center gap-1">
                                View All
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>


                        <div className="grid gap-4">
                            {NEWS_DATA.map((news, idx) => (
                                <div key={idx} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-secondary">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="relative h-32 sm:h-auto sm:w-32 flex-shrink-0 overflow-hidden">
                                            <img
                                                src={news.img}
                                                alt={news.title}
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:bg-gradient-to-r" />
                                            <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-tighter bg-gradient-to-r from-secondary to-primary text-white shadow-md whitespace-nowrap">
                                                {news.category}
                                            </span>
                                        </div>
                                        <div className="p-4 flex-1">
                                            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                                                {news.title}
                                            </h4>
                                            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
                                                {news.desc}
                                            </p>
                                            <button className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 group-hover:gap-2">
                                                Read More
                                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events / Notices */}
                    <div>
                        <div className="mb-8 flex items-center justify-between">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Notices</span></h3>
                            <button
                                onClick={() => onNavigate('notice')}
                                className="text-sm font-bold text-secondary hover:underline bg-transparent border-0 cursor-pointer flex items-center gap-1"
                            >
                                View All
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="space-y-4">
                            {NOTICE_DATA.slice(0, 4).map((notice, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedNotice(notice)}
                                    className="flex items-center gap-4 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 p-5 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-secondary cursor-pointer min-h-[80px]"
                                >
                                    <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-secondary/10 to-primary/10 p-3 min-w-[65px] text-secondary dark:text-secondary">
                                        <span className="text-2xl font-black">{notice.date.split(' ')[1].replace(',', '')}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider">{notice.date.split(' ')[0]}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 mb-2">{notice.title}</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{notice.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="bg-slate-50 py-16 dark:bg-gray-800/50 sm:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4 ">Find Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Here</span></h2>

                        <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full lg:mb-2"></div>

                        <p className="hidden lg:block text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Visit our beautiful campus located in the heart of Dhaka
                        </p>


                    </div>
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7032539252227!2d90.3860690747922!3d23.757959188487185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a6b5c8b851%3A0xbd30fd584b97cb22!2sTejgaon%20College!5e0!3m2!1sen!2sbd!4v1764441141016!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Tejgaon College Location"
                            className="absolute inset-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-8 left-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-sm border border-white/20 hover:scale-105 transition-transform duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10">
                                    <span className="material-symbols-outlined text-3xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                                        location_on
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Tejgaon College</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        16 Indira Road, Farmgate<br />
                                        Dhaka-1215, Bangladesh
                                    </p>
                                    <div className="mt-4 flex gap-3">
                                        <a
                                            href="https://maps.google.com/?q=Tejgaon+College"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1"
                                        >
                                            Get Directions
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Notice Modal */}
            {selectedNotice && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedNotice(null)}>
                    <div
                        className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl p-8 shadow-2xl relative animate-fade-in"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedNotice(null)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined text-slate-500">close</span>
                        </button>

                        <div className="mb-6">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary mb-3 inline-block">
                                {selectedNotice.category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                {selectedNotice.title}
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center">
                                <span className="material-symbols-outlined text-lg mr-1">calendar_today</span>
                                {selectedNotice.date}
                            </p>
                        </div>

                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                            <p className="text-md leading-relaxed">{selectedNotice.content}</p>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => setSelectedNotice(null)}
                                className="px-6 py-2 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;