
export type Language = 'en' | 'fa';

export interface TranslationSchema {
  nav: {
    home: string;
    download: string;
    announcements: string;
    support: string;
    solidarity: string;
    legal: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaDownload: string;
    ctaConfig: string;
    whyWireGuard: string;
    privacyTitle: string;
    privacyText: string;
  };
  download: {
    step1Title: string;
    step1Sub: string;
    step2Title: string;
    step2Sub: string;
    requestConfig: string;
    telegramBot: string;
    securityNote: string;
    securityText: string;
  };
  solidarity: {
    title: string;
    message: string;
    slogan: string;
  };
  common: {
    loading: string;
    error: string;
    back: string;
    submit: string;
  };
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'urgent';
}
