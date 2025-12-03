import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackSrc?: string;
    blurDataURL?: string;
    onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    fallbackSrc = '',
    blurDataURL,
    onClick
}) => {
    const [imageSrc, setImageSrc] = useState<string>(blurDataURL || '');
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setImageSrc(src);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before entering viewport
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [src]);

    const handleLoad = () => {
        setImageLoaded(true);
    };

    const handleError = () => {
        setImageError(true);
        if (fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
    };

    return (
        <img
            ref={imgRef}
            src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23e2e8f0"/%3E%3C/svg%3E'}
            alt={alt}
            className={`${className} ${!imageLoaded && imageSrc ? 'blur-sm' : ''} transition-all duration-300`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            decoding="async"
            onClick={onClick}
        />
    );
};

export default LazyImage;
