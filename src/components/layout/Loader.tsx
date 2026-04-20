import { useState, useEffect } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loader is active
        document.body.style.overflow = 'hidden';
        
        // Sequence of animations
        const timer1 = setTimeout(() => setStep(1), 1200); // Show Logo 2
        const timer2 = setTimeout(() => setStep(2), 2400); // Show Logo 3 (and black bg)
        const timer3 = setTimeout(() => setStep(3), 3600); // Start fade out of entire loader
        const timer4 = setTimeout(() => {
            document.body.style.overflow = 'unset';
            onComplete();
        }, 4400); // Remove loader from DOM

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            document.body.style.overflow = 'unset';
        };
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[99999] flex items-center justify-center transition-all duration-1000 ease-in-out ${
            step === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } ${step >= 2 ? 'bg-[#0a0a0a]' : 'bg-[#f8f9fa]'}`}>
            
            {/* Logo Container */}
            <div className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] select-none">
                
                {/* Logo 1: Black on White */}
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max transition-opacity duration-1000 ${
                    step === 0 ? 'opacity-100' : 'opacity-0'
                }`}>
                    <span className="text-black">RE/MAX YILDIZ</span>
                </div>

                {/* Logo 2: Blue & Red on White */}
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max transition-opacity duration-1000 ${
                    step === 1 ? 'opacity-100' : 'opacity-0'
                }`}>
                    <span className="text-[#003DA5]">RE</span>
                    <span className="text-[#E11B22]">/</span>
                    <span className="text-[#003DA5]">MAX YILDIZ</span>
                </div>

                {/* Logo 3: White on Black */}
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max transition-opacity duration-1000 ${
                    step >= 2 ? 'opacity-100' : 'opacity-0'
                }`}>
                    <span className="text-white">RE/MAX YILDIZ</span>
                </div>

            </div>
            
        </div>
    );
};

export default Loader;
