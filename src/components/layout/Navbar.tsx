import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full px-8 lg:px-16 py-6 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent">
            {/* Logo area */}
            <div></div>

            {/* Navigation links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <a href="#about" className="nav-link">{t('nav.about')}</a>
                <a href="https://remax.com.tr/tr/danisman/33535/ferhat-saglam?tab=portfoylerim" target="_blank" rel="noreferrer" className="nav-link">{t('nav.listings')}</a>
                <a href="#testimonials" className="nav-link">{t('nav.testimonials')}</a>
                <a href="#faq" className="nav-link">{t('nav.faq')}</a>
                <a href="#blog" className="nav-link">{t('nav.blog')}</a>
                <button
                    onClick={toggleLanguage}
                    className="nav-link opacity-50 hover:opacity-100"
                >
                    {i18n.language.toUpperCase()}
                </button>
                <button 
                    onClick={() => window.dispatchEvent(new Event('openContactModal'))}
                    className="nav-link border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                >
                    {t('nav.contact')}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
