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
  PhoneCall
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "মোঃ আল-আমিন",
  title: "প্রফেশনাল মোবাইল টেকনিশিয়ান",
  experience_years: "৮+",
  location: "ঢাকা, বাংলাদেশ",
  phone: "+8801329942879",
  whatsapp: "+8801329942879",
  email: "muhammadalaminmeer@gmail.com",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
  }
};

export const SERVICES = [
  {
    id: 1,
    title: "ডিসপ্লে পরিবর্তন",
    description: "অরিজিনাল ডিসপ্লে এবং টাচ স্ক্রিন নিখুঁতভাবে পরিবর্তন করা হয়।",
    icon: Smartphone
  },
  {
    id: 2,
    title: "মাদারবোর্ড রিপেয়ার",
    description: "আইসি লেভেল এবং মাদারবোর্ডের যেকোনো জটিল সমস্যার সমাধান।",
    icon: Cpu
  },
  {
    id: 3,
    title: "ব্যাটারি রিপ্লেসমেন্ট",
    description: "ভালো মানের ব্যাটারি দিয়ে ব্যাকআপ সমস্যার স্থায়ী সমাধান।",
    icon: Zap
  },
  {
    id: 4,
    title: "সফটওয়্যার আপডেট",
    description: "অ্যান্ড্রয়েড এবং আইফোন আনলকিং ও সফটওয়্যার জনিত সমস্যা।",
    icon: Wrench
  }
];

export const EXPERIENCE = [
  {
    period: "২০২০ - বর্তমান",
    company: "নিজস্ব সার্ভিস সেন্টার",
    role: "সিনিয়র টেকনিশিয়ান",
    description: "সব ধরণের লেটেস্ট স্মার্টফোন রিপেয়ারিং এবং কাস্টমার সার্ভিস।"
  },
  {
    period: "২০১৮ - ২০২০",
    company: "মোবাইল কেয়ার লিমিটেড",
    role: "জুনিয়র টেকনিশিয়ান",
    description: "হার্ডওয়্যার এবং সফটওয়্যার ডায়াগনস্টিক টিমে কাজ করার অভিজ্ঞতা।"
  }
];

export const EDUCATION = [
  {
    period: "২০১৭",
    institution: "আইটি ট্রেনিং ইনস্টিটিউট",
    degree: "মোবাইল হার্ডওয়্যার ইঞ্জিনিয়ারিং",
    description: "অ্যাডভান্সড মোবাইল রিপেয়ারিং কোর্স সম্পন্ন।"
  }
];

export const STATS = [
  { label: "সম্পন্ন কাজ", value: "৫০০০+" },
  { label: "সন্তুষ্ট কাস্টমার", value: "৩০০০+" },
  { label: "অভিজ্ঞতা", value: "৮+ বছর" }
];
