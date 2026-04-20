import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const Listings = () => {
    const { t } = useTranslation();

    const properties = [
        {
            id: 1,
            title: t('listings.items.0.title'),
            price: t('listings.items.0.price'),
            location: t('listings.items.0.location'),
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200"
        },
        {
            id: 2,
            title: t('listings.items.1.title'),
            price: t('listings.items.1.price'),
            location: t('listings.items.1.location'),
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200"
        },
        {
            id: 3,
            title: t('listings.items.2.title'),
            price: t('listings.items.2.price'),
            location: t('listings.items.2.location'),
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200"
        }
    ];

    return (
        <section id="listings" className="bg-[#0a0a0a] py-32 border-t border-white/5">
            <div className="container">
                <div className="flex justify-between items-end mb-24">
                    <h2 className="text-6xl heading-wide opacity-90">{t("nav.listings")}</h2>
                    <a href="#" className="nav-link border-b border-white/40 pb-1 hover:border-white transition-all">{t('listings.title')}</a>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {properties.map((prop) => (
                        <div key={prop.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6">
                                <img 
                                    src={prop.image} 
                                    alt={prop.title} 
                                    className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white text-black p-3 rounded-full">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="nav-link text-[10px] opacity-40 uppercase">{prop.location}</p>
                                <h3 className="text-xl font-medium tracking-tight group-hover:text-accent transition-colors">{prop.title}</h3>
                                <p className="heading-wide text-lg opacity-80">{prop.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Listings;
