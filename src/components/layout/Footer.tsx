import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUp, Phone, Globe, Mail, Instagram, MapPin, ChevronLeft } from 'lucide-react';
import LegalModal from '../ui/LegalModal';

const Footer = () => {
  const { t } = useTranslation();
  const [isKvkkOpen, setIsKvkkOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('openContactModal', handleOpenContact);
    return () => window.removeEventListener('openContactModal', handleOpenContact);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const TextItem = ({ children, highlight = false }: { children: React.ReactNode, highlight?: boolean }) => (
    <li>
      <span className={`text-sm ${highlight ? 'text-[#D32F2F] font-medium' : 'text-white/60 font-light'}`}>
        {children}
      </span>
    </li>
  );

  const contactItems = [
    { icon: Phone, color: 'bg-[#0a3161]', text: 'Beni Ara', href: 'tel:+905052595187' },
    { icon: Globe, color: 'bg-[#E63946]', text: 'Web Sitemi Ziyaret Et', href: 'https://www.remax.com.tr/yildiz' },
    { icon: Mail, color: 'bg-[#0a3161]', text: 'E-Posta Gönder', href: 'mailto:ferhatsaglam@remax-yildiz.com' },
    { icon: Instagram, color: 'bg-[#E63946]', text: 'Instagram Profilime Git', href: 'https://instagram.com/remaxferhatsaglam' },
    { icon: MapPin, color: 'bg-[#0a3161]', text: 'Google Haritalar\'da Aç', href: 'https://maps.google.com/?q=19+Mayıs,+İnönü+Cd.+No:92' },
  ];

  const contactContent = (
    <div className="flex flex-col gap-6 md:gap-8 py-6 px-2 md:px-4">
      {contactItems.map((item, idx) => (
        <a 
          key={idx}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center bg-[#F9F9F9] hover:bg-white rounded-xl shadow-md cursor-pointer transition-all duration-300 min-h-[72px] md:min-h-[80px] mx-6 md:mx-8"
        >
          {/* Overlapping Left Colored Icon Box (Using flex negative margin instead of absolute to prevent clipping & text overlap) */}
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-[0_10px_25px_-5px_var(--tw-shadow-color)] shadow-${item.color.replace('bg-', '')}/40 shrink-0 -ml-6 md:-ml-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 z-10`}>
             <item.icon size={28} strokeWidth={1.5} />
          </div>
          
          {/* Content Text (Call to Action) */}
          <div className="px-4 md:px-6 py-4 flex-1 text-sm md:text-base font-bold tracking-widest uppercase text-[#050505] group-hover:text-[#D32F2F] transition-colors leading-tight">
             {item.text}
          </div>

          {/* Overlapping Right Action Circle */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#050505] border-[3px] border-white flex items-center justify-center text-white shadow-lg shrink-0 -mr-5 md:-mr-6 group-hover:bg-[#D32F2F] transition-all duration-300 z-10">
             <ChevronLeft size={20} strokeWidth={3} className="-rotate-180" />
          </div>
        </a>
      ))}
    </div>
  );

  const kvkkContent = (
    <>
      <p>
        <strong>1. Veri Sorumlusu</strong><br/>
        Ferhat Sağlam Gayrimenkul ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla aşağıda açıklanan amaçlar kapsamında işlenebilecektir.
      </p>
      <p>
        <strong>2. Kişisel Verilerin İşlenme Amacı</strong><br/>
        Toplanan kişisel verileriniz; gayrimenkul danışmanlık hizmetlerimizin yürütülmesi, müşteri kayıtlarının oluşturulması, değerleme ve ekspertiz süreçlerinin yönetilmesi, yasal yükümlülüklerimizin yerine getirilmesi amaçlarıyla işlenmektedir.
      </p>
      <p>
        <strong>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</strong><br/>
        Kişisel verileriniz, mevzuat hükümlerinin izin verdiği kurum veya kuruluşlar ile, RE/MAX Türkiye ağı, iş ortaklarımız ve hizmet alınan üçüncü şahıslara yasal sınırlar çerçevesinde aktarılabilecektir.
      </p>
      <p>
        <strong>4. KVKK 11. Madde Kapsamındaki Haklarınız</strong><br/>
        Kişisel veri sahibi olarak; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz. Haklarınızı kullanmak için iletişim kanallarımızdan bize ulaşabilirsiniz.
      </p>
    </>
  );

  const privacyContent = (
    <>
      <p>
        <strong>1. Gizlilik Bildirimi</strong><br/>
        Bu platform, ziyaretçilerin kişisel gizliliğini korumayı taahhüt eder. Web sitemizi ziyaretiniz sırasında bizimle paylaştığınız bilgilerin güvenliği ve korunması en yüksek standartlarda sağlanmaktadır.
      </p>
      <p>
        <strong>2. Çerezler (Cookies)</strong><br/>
        Kullanıcı deneyimini iyileştirmek, site trafiğini analiz etmek ve platformun düzgün çalışmasını sağlamak amacıyla çerezler kullanılmaktadır. Web sitemizi kullanarak çerez kullanımını kabul etmiş sayılırsınız.
      </p>
      <p>
        <strong>3. Üçüncü Taraf Bağlantıları</strong><br/>
        Web sitemiz, "Mülkünü Hesapla" gibi üçüncü taraf sitelere bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından veya içeriklerinden şirketimiz sorumlu tutulamaz. Dış bağlantılara erişim kendi sorumluluğunuzdadır.
      </p>
      <p>
        <strong>4. Bilgi Güvenliği</strong><br/>
        Toplanan veriler yetkisiz erişim, kullanım, değiştirme ve ifşaya karşı korunmak için standart güvenlik önlemleri alınarak veri tabanlarımızda şifrelenmiş olarak saklanmaktadır.
      </p>
    </>
  );

  const termsContent = (
    <>
      <p>
        <strong>1. Kabul ve Onay</strong><br/>
        Sitemizi kullanarak, burada belirtilen Kullanım Koşullarını kabul etmiş sayılırsınız. Şirketimiz, bu koşulları önceden haber vermeksizin güncelleme hakkını saklı tutar.
      </p>
      <p>
        <strong>2. Hizmet Kapsamı ve Bilgilerin Doğruluğu</strong><br/>
        Web sitemizde yer alan tüm gayrimenkul ilanları, fiyatlar ve bölge bilgileri bilgilendirme amaçlıdır. Nihai ve kesin bilgiler ancak yüz yüze görüşmeler ve resmi sözleşmelerle sağlanmaktadır. Sitede yer alan bilgilerin olası farklılıklarından şirketimiz sorumlu tutulamaz.
      </p>
      <p>
        <strong>3. Fikri Mülkiyet Hakları</strong><br/>
        Bu sitede yer alan tüm tasarım, görsel, metin ve içerik materyalleri Ferhat Sağlam Gayrimenkul'e aittir. İzinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır.
      </p>
      <p>
        <strong>4. Dış Bağlantılar (Üçüncü Taraf Siteler)</strong><br/>
        Sitemiz üzerinden yönlendirilen dış bağlantıların (örn. Mülkünü Hesapla) içerik ve gizlilik politikaları şirketimizin sorumluluğunda değildir.
      </p>
    </>
  );

  return (
    <footer className="relative bg-[#050505] pt-20 pb-8 border-t border-white/5 overflow-hidden font-sans">
      
      {/* Giant Background Text Logo */}
      <div className="w-full flex justify-center items-center select-none pointer-events-none mb-20 overflow-hidden px-4">
        <h1 className="text-[#D32F2F] text-[10vw] md:text-[8vw] xl:text-[7vw] font-black tracking-[-0.05em] leading-none whitespace-nowrap opacity-95">
          FERHAT<span className="opacity-80">.</span>SAĞLAM
        </h1>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Corporate */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                FERHAT<span className="text-[#D32F2F]">SAĞLAM</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                {t('footer.brand_desc')}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('footer.corporate')}
              </h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm font-light">{t('footer.corp_about')}</a></li>
                <li><a href="#faq" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm font-light">{t('footer.corp_faq')}</a></li>
                <li><button onClick={() => setIsContactOpen(true)} className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm font-light font-medium">{t('footer.corp_contact')}</button></li>
                <li><button onClick={() => setIsPrivacyOpen(true)} className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm font-light">{t('footer.privacy')}</button></li>
                <li><button onClick={() => setIsTermsOpen(true)} className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm font-light">{t('footer.corp_terms')}</button></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              <TextItem>{t('footer.serv_1')}</TextItem>
              <TextItem>{t('footer.serv_2')}</TextItem>
              <TextItem>{t('footer.serv_3')}</TextItem>
              <TextItem highlight>{t('footer.serv_4')}</TextItem>
              <TextItem>{t('footer.serv_5')}</TextItem>
              <TextItem>{t('footer.serv_6')}</TextItem>
            </ul>
          </div>

          {/* Column 3: Expertise Regions */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase">
              {t('footer.regions')}
            </h3>
            <ul className="space-y-3">
              <TextItem>{t('footer.reg_1')}</TextItem>
              <TextItem>{t('footer.reg_2')}</TextItem>
              <TextItem>{t('footer.reg_3')}</TextItem>
              <TextItem>{t('footer.reg_4')}</TextItem>
              <TextItem>{t('footer.reg_5')}</TextItem>
              <TextItem>{t('footer.reg_6')}</TextItem>
              <TextItem>{t('footer.reg_7')}</TextItem>
              <TextItem>{t('footer.reg_8')}</TextItem>
            </ul>
          </div>

          {/* Column 4: Quick Access (Pills Layout) */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase">
              {t('footer.quick')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'quick_1', label: t('footer.quick_1'), href: "https://remax.com.tr/tr/danisman/33535/ferhat-saglam?tab=portfoylerim", external: true },
                { key: 'quick_2', label: t('footer.quick_2'), href: "https://mulkunuhesapla.com/", external: true },
                { key: 'quick_3', label: t('footer.quick_3'), href: "#", external: false },
                { key: 'quick_4', label: t('footer.quick_4'), href: "#", external: false },
                { key: 'quick_5', label: t('footer.quick_5'), href: "#", external: false },
              ].map((item) => (
                <a 
                  key={item.key} 
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="px-4 py-2 border border-white/10 rounded-md text-xs text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Rights Row */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[10px] md:text-xs text-white/40 font-semibold tracking-widest uppercase">
          
          {/* Scroll to Top Button (Absolute/Floating on Desktop) */}
          <div className="absolute right-0 -top-6 xl:-top-6 z-20 hidden md:block transform -translate-y-full">
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D32F2F] hover:border-transparent transition-all hover:scale-105"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          <p>{t('footer.copyright')}</p>
          
          {/* Mobile scroll to top */}
          <button 
            onClick={scrollToTop}
            className="md:hidden flex items-center gap-2 hover:text-white transition-colors"
          >
            YUKARI ÇIK <ArrowUp className="w-3 h-3" />
          </button>

          <div className="flex items-center gap-8">
            <button onClick={() => setIsKvkkOpen(true)} className="hover:text-white transition-colors tracking-widest">{t('footer.kvkk')}</button>
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors tracking-widest">{t('footer.privacy')}</button>
          </div>
        </div>
      </div>

      {/* Legal & Contact Modals */}
      <LegalModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        title="İLETİŞİM BİLGİLERİ" 
        content={contactContent} 
      />
      <LegalModal 
        isOpen={isKvkkOpen} 
        onClose={() => setIsKvkkOpen(false)} 
        title="KVKK Aydınlatma Metni" 
        content={kvkkContent} 
      />
      <LegalModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Gizlilik Politikası" 
        content={privacyContent} 
      />
      <LegalModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Kullanım Koşulları" 
        content={termsContent} 
      />
    </footer>
  );
};

export default Footer;
