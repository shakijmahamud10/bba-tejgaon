import React from 'react';
import { IMAGES } from '../constants';

const CampusLife: React.FC = () => {
    const cards = [
        {
            type: 'EVENT',
            badgeColor: 'from-amber-400 to-orange-500',
            image: IMAGES.ARTS,
            title: 'Homecoming Week Kick-Off Concert',
            meta: 'Oct 11, 7:00 PM | Campus Quad',
            description: 'Join us for a night of live music, food trucks, and fun as we kick off the most anticipated week of the year!',
            buttonText: 'View Details',
            buttonLink: '#'
        },
        {
            type: 'ORGANIZATION',
            badgeColor: 'from-blue-500 to-blue-600',
            image: IMAGES.HERO,
            title: 'Innovate & Create Club',
            meta: '50+ Members',
            description: 'A community for student entrepreneurs and builders. We host hackathons, workshops, and networking events.',
            buttonText: 'Join the Club',
            buttonLink: '#'
        },
        {
            type: 'NEWS',
            badgeColor: 'from-emerald-400 to-emerald-600',
            image: IMAGES.NEWS1,
            title: 'University Researchers Secure $5M Grant',
            meta: '2 days ago',
            description: 'A groundbreaking research initiative led by our faculty has received major funding to advance studies in AI ethics.',
            buttonText: 'Read More',
            buttonLink: '#'
        },
        {
            type: 'EVENT',
            badgeColor: 'from-amber-400 to-orange-500',
            image: IMAGES.BUSINESS,
            title: 'Business Club',
            meta: 'Nov 15, 10:00 AM | Student Center',
            description: 'Connect with top employers from various industries. Bring your resume and dress to impress!',
            buttonText: 'View Details',
            buttonLink: '#'
        },
        {
            type: 'ORGANIZATION',
            badgeColor: 'from-blue-500 to-blue-600',
            image: IMAGES.HEALTH,
            title: 'Green Campus Initiative',
            meta: '120+ Members',
            description: 'Dedicated to making our campus more sustainable through recycling programs, gardening, and awareness campaigns.',
            buttonText: 'Join the Club',
            buttonLink: '#'
        },
        {
            type: 'NEWS',
            badgeColor: 'from-emerald-400 to-emerald-600',
            image: IMAGES.NEWS2,
            title: 'New Student Center Opens',
            meta: '1 week ago',
            description: 'The state-of-the-art facility features study lounges, a game room, and new dining options for all students.',
            buttonText: 'Read More',
            buttonLink: '#'
        }
    ];

    const handleInteraction = (action: string) => {
        alert(`${action} feature coming soon!`);
    };

    return (
        <div className="flex flex-col min-h-screen">
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
                        Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">Community</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 mb-8">
                        Discover vibrant student activities, join hundreds of organizations, and make memories that last a lifetime.
                    </p>
                    <div className="flex flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <button
                            onClick={() => handleInteraction('Explore Events')}
                            className="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all"
                        >
                            Explore Events
                        </button>
                        <button
                            onClick={() => handleInteraction('Join a Club')}
                            className="px-8 py-4 bg-white/60 backdrop-blur-md border border-white/30 text-primary rounded-full font-bold text-sm hover:bg-white/70 transition-transform hover:scale-105"
                        >
                            Join a Club
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: 'groups', label: 'Student Clubs', value: '150+' },
                            { icon: 'event', label: 'Annual Events', value: '500+' },
                            { icon: 'workspace_premium', label: 'Awards Won', value: '75+' },
                            { icon: 'volunteer_activism', label: 'Community Hours', value: '10K+' }
                        ].map((stat, idx) => (
                            <div key={idx} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span className="material-symbols-outlined text-3xl text-white">{stat.icon}</span>
                                </div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="bg-slate-50 dark:bg-gray-800/50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-4">
                            What's Happening on Campus
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Stay connected with events, clubs, and news
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((card, idx) => (
                            <div key={idx} className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md border-2 border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${card.badgeColor} text-white shadow-lg`}>
                                        {card.type}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                                        {card.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                                        {card.type === 'EVENT' && <span className="material-symbols-outlined text-lg text-secondary">event</span>}
                                        {card.type === 'ORGANIZATION' && <span className="material-symbols-outlined text-lg text-secondary">groups</span>}
                                        {card.type === 'NEWS' && <span className="material-symbols-outlined text-lg text-secondary">schedule</span>}
                                        <span>{card.meta}</span>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                        {card.description}
                                    </p>

                                    <button
                                        onClick={() => handleInteraction(card.buttonText)}
                                        className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary to-primary text-white font-bold hover:shadow-lg transition-all hover:scale-105"
                                    >
                                        {card.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
};

export default CampusLife;
