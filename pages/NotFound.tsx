import React from 'react';

interface NotFoundProps {
    onNavigate: (page: string) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <span className="material-symbols-outlined text-8xl text-slate-300 dark:text-slate-700 mb-4">
                error
            </span>
            <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-2">404</h1>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-6">Page Not Found</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button
                onClick={() => onNavigate('home')}
                className="px-8 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default NotFound;
