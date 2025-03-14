import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  
  return (
    <>
      <Head>
        <title>Thomas Cezar | Commissionng Engineer & Developer</title>
        <meta name="description" content="Commissionng Engineer and developer from Southampton, UK" />
      </Head>

      <div className="container-custom py-20">
        <section className="flex flex-col md:flex-row items-center mb-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <h1 className="text-6xl font-bold mb-6">{t('hero.greeting')}</h1>
            <p className="text-2xl text-gray-400 mb-10">
              A Commissionng Engineer and developer from Southampton in the UK. I create bespoke websites to help people go further online.
            </p>
            <Link href="/projects" className="btn-primary">
              My Projects
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with your actual profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
