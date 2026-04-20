import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const images = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
];

const Blog = () => {
    const { t } = useTranslation();
    const blogItems = t('blog.items', { returnObjects: true }) as Array<{ title: string; date: string; category: string; excerpt: string; }>;

    return (
        <section id="blog" className="relative py-24 bg-black">
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-sm nav-link text-accent mb-4 tracking-widest text-text-secondary">
                            {t('blog.label')}
                        </h2>
                        <h3 className="text-4xl md:text-5xl heading-wide opacity-90">
                            {t('blog.title')}
                        </h3>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 nav-link hover:text-accent group">
                        {t('blog.view_all')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogItems.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden mb-6 rounded-lg">
                                <img
                                    src={images[idx]}
                                    alt={article.title}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                                    {article.category}
                                </div>
                            </div>
                            <div>
                                <div className="text-text-secondary text-xs font-medium tracking-widest mb-3 uppercase">
                                    {article.date}
                                </div>
                                <h4 className="text-xl font-bold mb-3 leading-snug group-hover:text-accent transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-text-secondary font-light text-sm line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 nav-link border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
                        {t('blog.view_all_mobile')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
