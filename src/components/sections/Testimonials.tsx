import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';



const Testimonials = () => {
    const { t } = useTranslation();
    const reviews = t('testimonials.reviews', { returnObjects: true }) as Array<{ content: string; author: string; role: string; initials: string; }>;

    return (
        <section id="testimonials" className="relative py-32 bg-bg-deep overflow-hidden">
            {/* Background glowing orbs for UI depth */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center w-full">
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        {t('testimonials.label')}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-white mb-4">
                        {t('testimonials.title')}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-20 md:pb-24 w-full">
                    {reviews.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
                            className={`group relative flex flex-col items-center text-center bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 p-8 lg:p-12 rounded-3xl border border-white/5 hover:border-[#D32F2F]/20 overflow-hidden ${
                                idx === 0 ? 'md:-mt-12' : 
                                idx === 1 ? 'md:mt-12' : 
                                'md:mt-32'
                            }`}
                        >
                            {/* Subtle Hover Glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D32F2F] opacity-0 group-hover:opacity-[0.05] blur-[80px] transition-opacity duration-700 rounded-full pointer-events-none" />

                            {/* Quote Icon */}
                            <div className="mb-10 text-white/10 group-hover:text-[#D32F2F] transition-colors duration-500 transform group-hover:-translate-y-2 origin-center flex justify-center w-full">
                                <Quote className="w-12 h-12" />
                            </div>

                            {/* Text */}
                            <p className="text-white/60 font-light leading-relaxed text-[15px] lg:text-base mb-12 flex-grow group-hover:text-white/90 transition-colors duration-500 tracking-wide text-center relative z-10">
                                "{testimonial.content}"
                            </p>
                            
                            {/* Author */}
                            <div className="mt-auto flex flex-col items-center gap-4 pt-8 border-t border-white/5 group-hover:border-[#D32F2F]/40 transition-colors duration-500 relative z-10 text-center">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-bold text-xs text-white/60 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                                    {testimonial.initials}
                                </div>
                                <div className="flex flex-col items-center">
                                    <h4 className="font-semibold text-white tracking-widest uppercase text-xs mb-1.5">{testimonial.author}</h4>
                                    <p className="text-[9px] text-[#D32F2F] uppercase tracking-[0.3em] font-bold">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* See More Reviews Link */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="pt-24 md:pt-40 flex justify-center w-full relative z-10 clear-both"
                >
                    <a 
                        href="https://remax.com.tr/tr/danisman/33535/ferhat-saglam?tab=musteri-yorumlari" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="group flex items-center gap-6 px-10 py-5 bg-transparent border border-white/10 hover:border-white text-white/70 hover:text-white transition-all duration-500 rounded-none relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[#D32F2F] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                        <span className="relative z-10 font-bold tracking-[0.2em] uppercase text-xs">{t('testimonials.see_more', 'Müşteri Yorumlarının Devamını Gör')}</span>
                        <div className="w-8 h-[1px] bg-white/50 group-hover:w-12 group-hover:bg-white transition-all duration-500 relative z-10">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/50 group-hover:border-white rotate-45 transition-colors duration-500"></div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
