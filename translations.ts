
import { TranslationSchema } from './types';

export const translations: Record<'en' | 'fa', TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      download: 'Download',
      announcements: 'Updates',
      support: 'Support',
      solidarity: 'Solidarity',
      legal: 'Legal',
    },
    home: {
      heroTitle: 'You are not alone.',
      heroSubtitle: 'Free, secure, and open access for everyone. Dignity through digital freedom.',
      ctaDownload: 'Download Apps',
      ctaConfig: 'Get Configuration',
      whyWireGuard: 'Why WireGuard? It is modern, fast, and uses state-of-the-art cryptography to keep you secure on any network.',
      privacyTitle: 'Our Privacy Promise',
      privacyText: 'No logs. No tracking. No personal data collection. We only exist to help you connect.',
    },
    download: {
      step1Title: 'Step 1: Download WireGuard',
      step1Sub: 'Install the official client for your device.',
      step2Title: 'Step 2: Get Your Config',
      step2Sub: 'Download your personal configuration file or scan the QR code.',
      requestConfig: 'Download .conf File',
      telegramBot: 'Direct Config Access',
      securityNote: 'Security Reminder',
      securityText: 'Each configuration is strictly personal. Sharing your config reduces your speed and compromises your security.',
    },
    solidarity: {
      title: 'Dignity & Unity',
      message: 'No border, no fear, no night can separate us. We are born of the same pain and alive by the same hope. Your tears are in our eyes, and our hands are in yours, even from afar. You do not walk this road alone - we are with you, to the very end.',
      slogan: 'Woman, Life, Freedom',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred.',
      back: 'Back',
      submit: 'Submit',
    }
  },
  fa: {
    nav: {
      home: 'خانه',
      download: 'دانلود',
      announcements: 'اطلاعیه‌ها',
      support: 'پشتیبانی',
      solidarity: 'همبستگی',
      legal: 'قوانین',
    },
    home: {
      heroTitle: 'شما تنها نیستید.',
      heroSubtitle: 'دسترسی رایگان، امن و آزاد برای همه. کرامت از طریق آزادی دیجیتال.',
      ctaDownload: 'دانلود برنامه‌ها',
      ctaConfig: 'دریافت تنظیمات',
      whyWireGuard: 'چرا WireGuard؟ مدرن، سریع و دارای رمزنگاری پیشرفته برای حفظ امنیت شما در هر شبکه‌ای است.',
      privacyTitle: 'تعهد ما به حریم خصوصی',
      privacyText: 'بدون ثبت فعالیت‌ها، بدون ردیابی. ما فقط برای کمک به اتصال شما اینجا هستیم.',
    },
    download: {
      step1Title: 'مرحله ۱: دانلود WireGuard',
      step1Sub: 'نسخه رسمی را برای دستگاه خود نصب کنید.',
      step2Title: 'مرحله ۲: دریافت تنظیمات',
      step2Sub: 'فایل تنظیمات شخصی خود را دانلود کنید یا کد QR را اسکن کنید.',
      requestConfig: 'دانلود فایل .conf',
      telegramBot: 'دسترسی مستقیم به تنظیمات',
      securityNote: 'نکته امنیتی',
      securityText: 'هر فایل تنظیمات کاملاً شخصی است. اشتراک‌گذاری آن باعث کاهش سرعت و به خطر افتادن امنیت شما می‌شود.',
    },
    solidarity: {
      title: 'کرامت و اتحاد',
      message: 'هیچ مرزی، هیچ ترسی، و هیچ شبی نمی‌تواند ما را از هم جدا کند. ما از یک درد متولد شده‌ایم و با یک امید زنده‌ایم. اشک‌های شما در چشمان ماست، و دستان ما در دستان شما، حتی از دور. شما این راه را تنها نمی‌روید - ما با شما هستیم، تا همان پایان.',
      slogan: 'زن، زندگی، آزادی',
    },
    common: {
      loading: 'در حال بارگذاری...',
      error: 'خطایی رخ داده است.',
      back: 'بازگشت',
      submit: 'ارسال',
    }
  }
};