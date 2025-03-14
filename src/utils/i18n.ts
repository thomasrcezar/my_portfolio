// src/utils/i18n.ts
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface LocaleInfo {
  code: string;
  name: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

// Supported locales configuration
export const locales: { [key: string]: LocaleInfo } = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
  },
  pt: {
    code: 'pt',
    name: 'Português',
    flag: '🇧🇷',
    dir: 'ltr',
  },
};

// Hook for handling translations and locale changes
export const useLocale = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const currentLocale = router.locale || 'en';

  const changeLocale = async (newLocale: string) => {
    const { pathname, asPath, query } = router;
    await router.push({ pathname, query }, asPath, { locale: newLocale });
    document.documentElement.lang = newLocale;
    document.documentElement.dir = locales[newLocale].dir || 'ltr';
  };

  return {
    currentLocale,
    localeInfo: locales[currentLocale],
    changeLocale,
    t,
    i18n,
    isRTL: locales[currentLocale].dir === 'rtl',
  };
};

// Format date according to locale
export const formatDate = (date: Date | string, locale: string, options?: Intl.DateTimeFormatOptions) => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Date(date).toLocaleDateString(
    locale,
    options || defaultOptions
  );
};

// Format number according to locale
export const formatNumber = (number: number, locale: string, options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat(locale, options).format(number);
};

// Get direction (RTL/LTR) for a locale
export const getLocaleDirection = (locale: string): 'ltr' | 'rtl' => {
  return locales[locale]?.dir || 'ltr';
};

// Validate if a locale is supported
export const isValidLocale = (locale: string): boolean => {
  return Object.keys(locales).includes(locale);
};

// Get locale from browser/user preferences
export const getPreferredLocale = (): string => {
  if (typeof window === 'undefined') return 'en';

  const browserLocale = navigator.language.split('-')[0];
  return isValidLocale(browserLocale) ? browserLocale : 'en';
};

// Helper to generate locale-specific meta tags
export const getLocaleMeta = (locale: string, pageTitle: string, pageDescription: string) => {
  const localeInfo = locales[locale];
  
  return {
    title: pageTitle,
    htmlLang: locale,
    htmlDir: localeInfo.dir || 'ltr',
    meta: [
      {
        hrefLang: locale,
        language: localeInfo.name,
      },
      {
        property: 'og:locale',
        content: locale,
      },
      {
        name: 'description',
        content: pageDescription,
      },
    ],
  };
};

// Helper to handle pluralization
export const pluralize = (count: number, singular: string, plural: string): string => {
  return count === 1 ? singular : plural;
};

// Type-safe translation key helper
type TranslationKeys = {
  [key: string]: string | TranslationKeys;
};

export const createTypeSafeTranslationKey = <T extends TranslationKeys>(key: keyof T): string => {
  return key as string;
};

// Example usage of the utilities
export const Examples = () => {
  // Usage in a component
  const { currentLocale, changeLocale, t, isRTL } = useLocale();
  
  const exampleUsage = () => {
    // Format a date
    const formattedDate = formatDate(new Date(), currentLocale);
    
    // Format a number
    const formattedNumber = formatNumber(1000.5, currentLocale);
    
    // Get meta tags for SEO
    const meta = getLocaleMeta(
      currentLocale,
      'Page Title',
      'Page Description'
    );
    
    // Handle pluralization
    const itemCount = 2;
    const itemText = pluralize(itemCount, 'item', 'items');
    
    // Change locale
    const handleLanguageChange = (newLocale: string) => {
      changeLocale(newLocale);
    };
    
    // Use translations with type safety
    const translatedText = t('common:example.key');
  };
};
