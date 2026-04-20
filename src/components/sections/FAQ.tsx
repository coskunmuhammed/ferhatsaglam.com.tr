import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();
    const faqData = t('faq.questions', { returnObjects: true }) as Array<{ q: string; a: string; }>;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-24 bg-bg-deep border-t border-white/5">
            <div className="container max-w-4xl relative z-10">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        {t('faq.label')}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-white mb-4">
                        {t('faq.title')}
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 mb-4">
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                            >
                                <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">{faq.q}</span>
                                <div className={`ml-6 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-[#D32F2F] text-white rotate-180 shadow-lg shadow-red-500/20' : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'}`}>
                                    {openIndex === idx ? (
                                        <Minus className="w-5 h-5 transition-transform duration-300" />
                                    ) : (
                                        <Plus className="w-5 h-5 transition-transform duration-300" />
                                    )}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 md:p-8 pt-0 text-white/60 font-light leading-relaxed text-[15px]">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
