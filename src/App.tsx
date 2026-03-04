import { motion } from 'motion/react';
import { 
  Smartphone, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Zap,
  Facebook,
  Instagram,
  Youtube,
  Phone as WhatsApp,
  Mail,
  MapPin,
  PhoneCall,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO, SERVICES, EXPERIENCE, EDUCATION, STATS } from './constants';
import { IMAGES } from './images';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-accent font-bold text-xl">
                {PERSONAL_INFO.name[0]}
              </div>
              <span className="text-xl font-bold text-primary">{PERSONAL_INFO.name}</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'About', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-primary font-medium transition-colors"
                >
                  {item === 'Home' ? 'হোম' : 
                   item === 'Services' ? 'সার্ভিস' : 
                   item === 'About' ? 'সম্পর্কে' : 
                   item === 'Experience' ? 'অভিজ্ঞতা' : 'যোগাযোগ'}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                যোগাযোগ করুন
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
          >
            {['Home', 'Services', 'About', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-lg font-medium text-gray-700 py-2"
              >
                {item === 'Home' ? 'হোম' : 
                 item === 'Services' ? 'সার্ভিস' : 
                 item === 'About' ? 'সম্পর্কে' : 
                 item === 'Experience' ? 'অভিজ্ঞতা' : 'যোগাযোগ'}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-20 relative"
            >
              <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/20">
                হ্যালো! আমি
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
                {PERSONAL_INFO.name}, <br />
                <span className="text-accent">{PERSONAL_INFO.title}</span>
              </h1>
              <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
                আমি দীর্ঘ {PERSONAL_INFO.experience_years} বছর ধরে অত্যন্ত দক্ষতার সাথে সব ধরণের স্মার্টফোন মেরামত করে আসছি। আপনার শখের ফোনটির যেকোনো সমস্যায় আমি আছি আপনার পাশে।
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-xl shadow-primary/20"
                >
                  আমার সার্ভিস সমূহ
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button 
                  onClick={() => window.open(`tel:${PERSONAL_INFO.phone}`)}
                  className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
                >
                  কল করুন
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-end pt-20 md:pt-32"
            >
              <div className="relative w-full max-w-[350px] md:max-w-[450px] flex items-end justify-center">
                {/* Organic Background Shape (Blob) */}
                <div className="absolute bottom-0 w-full aspect-square bg-accent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-pulse shadow-2xl opacity-90"></div>
                
                {/* The Image (On top of the blob) - Tall image support */}
                <img 
                  src={IMAGES.hero} 
                  alt={PERSONAL_INFO.name}
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                  style={{ marginBottom: '-10px' }}
                  referrerPolicy="no-referrer"
                />

                {/* Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/4 -right-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-500">গ্যারান্টিড</p>
                      <p className="font-bold text-primary text-xs md:text-base">সার্ভিস</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-1/4 -left-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-500">দ্রুততম</p>
                      <p className="font-bold text-primary text-xs md:text-base">ডেলিভারি</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-accent py-4 marquee-container border-y border-primary/10">
        <div className="marquee-content flex flex-nowrap gap-12 items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-nowrap items-center gap-8 text-primary font-bold text-lg uppercase tracking-wider shrink-0">
              <span className="whitespace-nowrap">ডিসপ্লে পরিবর্তন</span>
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="whitespace-nowrap">মাদারবোর্ড রিপেয়ার</span>
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="whitespace-nowrap">ব্যাটারি রিপ্লেসমেন্ট</span>
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="whitespace-nowrap">সফটওয়্যার আপডেট</span>
              <span className="w-2 h-2 bg-primary rounded-full"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-accent font-bold mb-4">আমার সার্ভিস সমূহ</h2>
              <h3 className="text-4xl font-bold text-primary">আমি যে ধরণের কাজ করি</h3>
            </div>
            <div className="flex gap-4">
              <p className="text-gray-500 font-medium hidden md:block">স্লাইড করে সব দেখুন</p>
            </div>
          </div>
          
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -800 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-3xl border border-gray-100 hover:border-accent/30 shadow-sm hover:shadow-xl transition-all group shrink-0"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                    <service.icon size={28} />
                  </div>
                  <span className="text-gray-200 font-bold text-4xl">0{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6 h-12 overflow-hidden">
                  {service.description}
                </p>
                <button className="text-primary font-bold flex items-center gap-2 group-hover:text-accent transition-colors">
                  বিস্তারিত <ArrowUpRight size={18} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About & Stats Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl bg-accent/10">
                <img 
                  src={IMAGES.about} 
                  alt="Working" 
                  className="w-full h-full object-contain pt-4"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-10 rounded-3xl shadow-2xl hidden lg:block">
                <p className="text-5xl font-bold mb-2">{PERSONAL_INFO.experience_years}</p>
                <p className="text-accent font-medium uppercase tracking-wider">বছরের অভিজ্ঞতা</p>
              </div>
            </div>
            <div>
              <h2 className="text-accent font-bold mb-4">আমার সম্পর্কে</h2>
              <h3 className="text-4xl font-bold text-primary mb-8">আমি কে এবং কেন আমাকে বেছে নেবেন?</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                আমি একজন প্রফেশনাল মোবাইল টেকনিশিয়ান। আমি বিশ্বাস করি একটি ভালো সার্ভিসই পারে কাস্টমারের সাথে দীর্ঘস্থায়ী সম্পর্ক তৈরি করতে। আমি সবসময় অরিজিনাল পার্টস এবং আধুনিক যন্ত্রপাতি ব্যবহার করে কাজ করি যাতে আপনার ফোনটি নতুনের মতো পারফরম্যান্স দেয়।
              </p>
              <div className="grid grid-cols-2 gap-8">
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-gray-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold mb-4">আমার যাত্রা</h2>
            <h3 className="text-4xl font-bold">শিক্ষা ও কাজের অভিজ্ঞতা</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <Wrench size={20} />
                </div>
                শিক্ষা ও প্রশিক্ষণ
              </h4>
              {EDUCATION.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <span className="text-accent font-bold mb-2 block">{item.period}</span>
                  <h5 className="text-xl font-bold mb-2">{item.institution}</h5>
                  <p className="text-accent/80 font-medium mb-4">{item.degree}</p>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <ShieldCheck size={20} />
                </div>
                কাজের অভিজ্ঞতা
              </h4>
              {EXPERIENCE.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <span className="text-accent font-bold mb-2 block">{item.period}</span>
                  <h5 className="text-xl font-bold mb-2">{item.company}</h5>
                  <p className="text-accent/80 font-medium mb-4">{item.role}</p>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-primary font-bold mb-4 uppercase tracking-wider">যোগাযোগ করুন</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">আপনার ফোনের সমস্যার সমাধান পেতে আজই যোগাযোগ করুন</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open(`tel:${PERSONAL_INFO.phone}`)}>
                    <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PhoneCall size={24} />
                    </div>
                    <div>
                      <p className="text-primary/60 text-sm font-bold uppercase">কল করুন</p>
                      <p className="text-primary text-xl font-bold">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open(`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`)}>
                    <div className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <WhatsApp size={24} />
                    </div>
                    <div>
                      <p className="text-primary/60 text-sm font-bold uppercase">হোয়াটসঅ্যাপ</p>
                      <p className="text-primary text-xl font-bold">{PERSONAL_INFO.whatsapp}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-primary/60 text-sm font-bold uppercase">ঠিকানা</p>
                      <p className="text-primary text-xl font-bold">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-2xl">
                <form 
                  action="https://formspree.io/f/xvgpzzrq" 
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-primary font-bold mb-2">আপনার নাম</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-accent transition-colors" 
                      placeholder="নাম লিখুন" 
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-bold mb-2">ফোন নাম্বার</label>
                    <input 
                      name="phone"
                      type="tel" 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-accent transition-colors" 
                      placeholder="০১৩২৯-৯৪২৮৭৯" 
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-bold mb-2">সমস্যার ধরণ</label>
                    <textarea 
                      name="message"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-accent transition-colors h-32" 
                      placeholder="আপনার ফোনের সমস্যাটি সংক্ষেপে লিখুন"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                  >
                    মেসেজ পাঠান
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-accent font-bold text-sm">
                {PERSONAL_INFO.name[0]}
              </div>
              <span className="text-lg font-bold text-primary">{PERSONAL_INFO.name}</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href={PERSONAL_INFO.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href={PERSONAL_INFO.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={PERSONAL_INFO.social.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}। সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
