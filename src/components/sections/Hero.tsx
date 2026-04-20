import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const projectImages = [
    "https://images.unsplash.com/photo-1486406146926-c127a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
];

const Hero = () => {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[100svh] w-full flex flex-col items-center justify-center p-0 overflow-hidden bg-black">
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0 bg-black">
                {projectImages.map((img, index) => (
                    <img
                        key={img}
                        src={img}
                        alt={`Project visual ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover grayscale text-transparent transition-opacity duration-[2000ms] ease-in-out ${
                            index === currentImageIndex ? 'opacity-70' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute inset-0 dark-overlay" />
            </div>

            {/* Main Content - Massive Centered Name */}
            <div className="relative z-10 w-full flex flex-col items-center">
                <h1 className="text-[14vw] heading-wide leading-none tracking-[-0.04em] scale-y-[0.9] opacity-90 select-none pointer-events-none drop-shadow-2xl">
                    {t('hero.title')}
                </h1>
            </div>

            {/* Footer Info Tags */}
            <div className="absolute bottom-12 left-12 z-10 max-w-sm hidden md:block">
                <p className="nav-link text-xl !tracking-normal opacity-80 leading-tight">
                    {t('hero.subtitle1')}<br />
                    {t('hero.subtitle2')}
                </p>
            </div>

            <div className="absolute bottom-12 right-12 z-10 text-right hidden md:block">
                <p className="nav-link text-xs opacity-60">
                    {t('hero.location1')}<br />
                    {t('hero.location2')}
                </p>
            </div>

            {/* Slider Indicators (Optional but nice for UX) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {projectImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 ${
                            index === currentImageIndex 
                                ? 'w-8 h-1 bg-white' 
                                : 'w-2 h-1 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Sub-text using translation to avoid build error */}
            <div className="hidden">
                {t('nav.about')}
            </div>
        </section>
    );
};

export default Hero;
