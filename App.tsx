import React, { useState, useEffect } from 'react';
import logo from './assets/main-logo2.png';
import { IMAGES } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Faculties from './pages/Faculties';
import Visit from './pages/Visit';
import Apply from './pages/Apply';
import Login from './pages/Login';
import Admission from './pages/Admission';
import Notice from './pages/Notice';
import CampusLife from './pages/CampusLife';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';


const App: React.FC = () => {
    // Helper to get page from URL
    const getPageFromUrl = () => {
        const path = window.location.pathname.slice(1); // remove leading /
        if (path === '') return 'home';
        return path;
    };

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState<string>(getPageFromUrl());

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPage(getPageFromUrl());
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const handleNavigate = (page: string) => {
        window.history.pushState({}, '', `/${page === 'home' ? '' : page}`);
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return null;
            case 'programs': return <Programs />;
            case 'admission': return <Admission onNavigate={handleNavigate} />;
            case 'events': return <Events />;
            case 'faculties': return <Faculties />;
            case 'notice': return <Notice />;
            case 'campus-life': return <CampusLife />;
            case 'gallery': return <Gallery />;
            case 'visit': return <Visit />;
            case 'apply': return <Apply />;
            case 'login': return <Login />;
            default: return <NotFound onNavigate={handleNavigate} />;
        }
    };

    // Preloader
    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
                <div className="text-center">
                    {/* Logo with animations */}
                    <div className="mb-6">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-32 h-32 mx-auto object-contain"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 animate-pulse">Loading...</h2>
                    <p className="text-slate-600 dark:text-gray-400 text-sm">Please wait while we prepare your experience</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main className="flex-grow flex flex-col">
                <div style={{ display: currentPage === 'home' ? 'block' : 'none' }}>
                    <Home onNavigate={handleNavigate} />
                </div>
                {currentPage !== 'home' && renderPage()}
            </main>
            {/* Hide footer on apply and login pages to give full screen space to iframe */}
            {currentPage !== 'apply' && currentPage !== 'login' && <Footer />}
        </div>
    );
};

export default App;