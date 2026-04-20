import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Trophy, Award, BookOpen, Star, Medal } from 'lucide-react';

const Awards = () => {
    const { t } = useTranslation();


    const getYears = () => {
        const awardsObj = t('awards.years', { returnObjects: true }) as Record<string, string[]>;
        // Sort years descending to mimic the poster order (2025, 2024, 2023)
        return Object.entries(awardsObj).sort(([a], [b]) => parseInt(b) - parseInt(a));
    };

    const educationItems = t('awards.education', { returnObjects: true }) as string[];

    return (
        <section id="awards" className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Background Abstract Gold Gradients mimicking the poster's sweeping curves */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-[#D4AF37]/0 to-transparent blur-[120px] rounded-full transform -rotate-45" />
                <div className="absolute -left-1/2 top-0 w-full h-[200%] border-[2px] border-[#D4AF37]/5 rounded-[100%] transform -rotate-12" />
                <div className="absolute -left-[40%] top-[10%] w-full h-[180%] border-[1px] border-[#D4AF37]/10 rounded-[100%] transform -rotate-[15deg]" />
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
                    
                    {/* LEFT COLUMN: Visual/Trophy Area */}
                    <div className="lg:col-span-5 relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-[3/4] max-w-md mx-auto flex items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1500]/40 to-black/80 border border-[#D4AF37]/20 shadow-[0_0_80px_rgba(212,175,55,0.05)]"
                        >
                            {/* Inner Gold Radiance */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
                            
                            <div className="relative z-10 flex flex-col items-center gap-8">
                                <div className="text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                                    <Trophy size={180} strokeWidth={1} className="drop-shadow-2xl" />
                                </div>
                                <div className="flex gap-4 text-[#D4AF37]/60">
                                    <Star size={24} fill="currentColor" className="animate-pulse" />
                                    <Star size={32} fill="currentColor" className="animate-pulse delay-75" />
                                    <Star size={24} fill="currentColor" className="animate-pulse delay-150" />
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-[#D4AF37]/30 rounded-tl-3xl m-6" />
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-[#D4AF37]/30 rounded-br-3xl m-6" />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center lg:pl-10">
                        {/* Header */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h4 className="text-white/60 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold mb-2">
                                {t('awards.title')}
                            </h4>
                            <h2 className="text-[#D4AF37] text-4xl md:text-6xl font-light font-heading tracking-wide">
                                {t('awards.awards_title')}
                            </h2>
                        </motion.div>

                        {/* Awards Timeline */}
                        <div className="relative mb-20">
                            
                            {/* Office Title */}
                            <div className="flex items-center gap-4 mb-10 ml-4">
                                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                                <h3 className="text-white text-xl font-bold uppercase tracking-widest">
                                    {t('awards.office')}
                                </h3>
                            </div>

                            <div className="border-l border-[#D4AF37]/20 pl-8 md:pl-12 ml-4 space-y-16">

                            {getYears().map(([year, awards], yearIdx) => (
                                <motion.div 
                                    key={year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: yearIdx * 0.15 }}
                                    className="relative"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[53px] md:-left-[69px] w-5 h-5 rounded-full border-[2px] border-[#050505] bg-[#D4AF37] flex items-center justify-center ring-4 ring-[#D4AF37]/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                    </div>
                                    
                                    <h4 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-3">
                                        {year}
                                    </h4>
                                    
                                    <ul className="space-y-4">
                                        {awards.map((award, i) => (
                                            <li key={i} className="flex items-start gap-4 group">
                                                <div className="text-white/20 mt-1.5 group-hover:text-[#D4AF37] transition-colors">
                                                    <Award size={14} />
                                                </div>
                                                <span 
                                                    className="text-white/80 font-light text-sm md:text-base leading-relaxed group-hover:text-white transition-colors"
                                                    dangerouslySetInnerHTML={{ 
                                                        __html: award.replace(
                                                            /(Birincisi|Üçüncüsü|Onur Ödülü|Yıldızlar Kulübü Üyeliği|1st in Turnover|1st in Transactions|3rd in Turnover|3rd in Customer Satisfaction|3rd Place|Award of Honor)/g, 
                                                            '<strong class="font-bold text-[#D4AF37]">$1</strong>'
                                                        ) 
                                                    }} 
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[#D4AF37] text-4xl md:text-5xl font-light font-heading tracking-wide mb-10">
                                {t('awards.education_title')}
                            </h2>

                            <div className="flex flex-col gap-4">
                                {educationItems.map((edu, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="relative overflow-hidden group rounded-full border border-white/5 bg-white/[0.02] hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all duration-500 py-4 px-8 flex items-center gap-5"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors relative z-10">
                                            {idx === 3 ? <Medal size={20} /> : <BookOpen size={20} />}
                                        </div>
                                        <span className="text-white/80 font-semibold tracking-wide text-sm md:text-base relative z-10">
                                            {edu}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
