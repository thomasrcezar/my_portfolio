import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname, asPath, query } = router;
  const currentLocale = router.locale || 'en';
  
  const languages = [
    { code: 'en', name: t('language.en'), flag: '🇺🇸' },
    { code: 'es', name: t('language.es'), flag: '🇪🇸' },
    { code: 'pt', name: t('language.pt'), flag: '🇧🇷' },
  ];
  
  // Find the current language
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  // Function to change the language
  const changeLanguage = (locale: string) => {
    console.log('Changing language to:', locale);
    router.push(router.pathname, router.asPath, { locale });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
        aria-expanded={isOpen}
      >
        <span>{currentLanguage.flag}</span>
        <span className="sr-only md:not-sr-only">{currentLanguage.code.toUpperCase()}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentLocale === language.code 
                    ? 'bg-gray-100 dark:bg-gray-700 text-blue-600' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => changeLanguage(language.code)}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
