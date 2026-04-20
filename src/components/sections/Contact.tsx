import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="bg-[#0a0a0a] py-32 border-t border-white/5 flex items-center justify-center">
            <div className="container max-w-4xl text-center">
                <h2 className="text-7xl heading-wide mb-16 opacity-90 italic">{t('contact.title')}</h2>

                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-12">
                        <input
                            type="text"
                            className="bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                            placeholder={t('contact.name_placeholder')}
                        />
                        <input
                            type="email"
                            className="bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                            placeholder={t('contact.email_placeholder')}
                        />
                    </div>
                    <textarea
                        rows={1}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none"
                        placeholder={t('contact.message_placeholder')}
                    ></textarea>

                    <button className="nav-link text-lg border border-white/20 px-12 py-5 rounded-full hover:bg-white hover:text-black transition-all">
                        {t('contact.send_button')}
                    </button>

                    <div className="hidden">
                        {t('nav.contact')}
                    </div>
                </form>

                <div className="mt-32 pt-20 border-t border-white/5 flex flex-col items-center gap-4">
                    <p className="nav-link text-xs opacity-40">{t('contact.location')}</p>
                    <a href="mailto:ferhat@remaxyildiz.com" className="heading-wide text-2xl hover:opacity-60 transition-opacity">ferhat@remaxyildiz.com</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
