import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/layout/Navbar';
import Loader from './components/layout/Loader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Awards from './components/sections/Awards';
import Footer from './components/layout/Footer';

import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Blog from './components/sections/Blog';


function App() {
  const { t } = useTranslation();
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  return (
    <div className="relative min-h-screen relative overflow-hidden">
      {/* Intro Loader Animation */}
      {!isLoaderDone && <Loader onComplete={() => setIsLoaderDone(true)} />}
      
      {/* Main Content fading in after loader */}
      <div className={`transition-opacity duration-1000 ${isLoaderDone ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
        <Hero />
        
        {/* Portfolio Redirect CTA Banner */}
        <section className="w-full bg-[#111] py-16 px-8 flex flex-col items-center justify-center border-y border-white/10">
          <p className="text-white/60 mb-6 font-light uppercase tracking-widest text-center text-sm md:text-base">
            {t('app.banner_subtitle', 'Detaylı ilanları incelemek için')}
          </p>
          <a 
            href="https://remax.com.tr/tr/danisman/33535/ferhat-saglam?tab=portfoylerim" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-3 px-8 py-4 bg-[#D32F2F] text-white font-bold text-sm md:text-base tracking-[0.2em] transform transition-all hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] text-center"
          >
            {t('app.banner_title', 'PORTFÖYLERİME BURADAN ULAŞABİLİRSİNİZ')}
            <span className="text-xl leading-none">→</span>
          </a>
        </section>

        <Testimonials />
        <Blog />

        <About />
        <Awards />
        <FAQ />
      </main>

      <Footer />
      </div>
    </div>
  );
}

export default App;
