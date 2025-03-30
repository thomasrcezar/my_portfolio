import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ContactForm from '../components/sections/ContactForm'; // Import the form component

const Contact: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('contact.title')} | Thomas Cezar</title>
        {/* Add a meta description translation key if needed */}
        <meta name="description" content={t('contact.subtitle')} />
      </Head>

      <div className="container-custom py-20">
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </section>

        {/* Contact Form and Social Links will go here */}
        {/* Contact Form Section */}
        <section className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mb-12"> {/* Added mb-12 */}
          <ContactForm />
        </section>

        {/* Social Links Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">{t('contact.social_title')}</h2>
          <div className="flex justify-center gap-6">
            {/* Replace # with actual URLs */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default Contact;
