import { useTranslation } from 'react-i18next';
import { Mail, Globe, PhoneCall } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="relative bg-[#050505] border-t border-white/5 overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full min-h-[100vh] lg:min-h-[800px]">
                
                {/* Left Side: Full-Screen Photo */}
                <div className="w-full lg:w-5/12 xl:w-1/2 relative bg-[#050505]">
                    {/* Shadow overlay to blend perfectly with the dark background without seams */}
                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-[#050505]/20 to-[#050505] z-10 pointer-events-none"></div>
                    
                    <img 
                        src="/Ferhat (1).png" 
                        alt="Ferhat Sağlam"
                        className="w-full h-[60vh] lg:h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                    />


                </div>

                {/* Right Side: Editorial Content Space */}
                <div className="w-full lg:w-7/12 xl:w-1/2 flex items-center bg-[#050505] relative z-20">
                    <div className="w-full h-full px-8 py-16 lg:py-24 lg:px-16 xl:px-24 flex flex-col justify-center max-w-3xl">
                        
                        {/* Eyebrow Label */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] bg-[#D32F2F]"></div>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.4em]">
                                {t('nav.about')}
                            </span>
                        </div>

                        {/* Huge Editorial Name */}
                        <h2 className="text-[12.5vw] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-white tracking-tighter leading-[0.85] mb-6">
                            FERHAT<br />
                            <span className="text-[#D32F2F]">SAĞLAM.</span>
                        </h2>
                        
                        <h3 className="text-xl md:text-3xl text-white/80 font-light mb-12 tracking-wide border-l-2 border-white/20 pl-6 py-2">
                            {t('about.role')}
                        </h3>

                        {/* Bio Segment (Optional descriptive text) */}
                        <div className="mb-10 flex flex-col gap-4 text-xs md:text-[13px] lg:text-sm leading-relaxed text-justify w-full uppercase">
                            <p className="text-[#D32F2F]/90" dangerouslySetInnerHTML={{ __html: t('about.bio_p1') }} />
                            <p className="text-[#D32F2F]/90" dangerouslySetInnerHTML={{ __html: t('about.bio_p2') }} />
                            <p className="text-[#D32F2F]/90" dangerouslySetInnerHTML={{ __html: t('about.bio_p3') }} />
                            <p className="text-[#D32F2F]/90" dangerouslySetInnerHTML={{ __html: t('about.bio_p4') }} />
                        </div>

                        {/* Bottom Actions & Logos - Asymmetric Distribution */}
                        <div className="mt-auto w-full pt-16">
                            <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
                                
                                {/* Left Side: Minimalist Contact Info */}
                                <div className="flex flex-col gap-6">
                                    <a href="tel:+905052595187" className="group flex items-center gap-4 text-white/80 hover:text-white transition-all">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/40 group-hover:border-[#D32F2F] group-hover:bg-[#D32F2F] transition-all duration-300">
                                            <PhoneCall className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-xs font-bold tracking-[0.15em] uppercase">{t('about.call_now')}</span>
                                    </a>
                                    
                                    <a href="https://www.remax.com.tr/yildiz" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-white/80 hover:text-white transition-all">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/40 group-hover:border-[#D32F2F] group-hover:bg-[#D32F2F] transition-all duration-300">
                                            <Globe className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-xs font-bold tracking-[0.15em] uppercase">RE/MAX YILDIZ</span>
                                    </a>
                                    
                                    <a href="mailto:ferhatsaglam@remax-yildiz.com" className="group flex items-center gap-4 text-white/80 hover:text-white transition-all">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/40 group-hover:border-[#D32F2F] group-hover:bg-[#D32F2F] transition-all duration-300">
                                            <Mail className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-xs font-bold tracking-[0.15em] uppercase">{t('about.send_mail', 'MAİL GÖNDER')}</span>
                                    </a>
                                </div>
                                
                                {/* Right Side: Partnerships Logos */}
                                <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
                                    <img 
                                        src="/brand-logos.png" 
                                        alt="Ferhat Sağlam Branş Logoları" 
                                        className="h-10 md:h-12 lg:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity drop-shadow-xl"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
            {/* Hidden label for layout anchors */}
            <div className="hidden">{t('nav.about')}</div>
        </section>
    );
};

export default About;
