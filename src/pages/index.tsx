import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getFeaturedProjects, Project } from '../data/projectsData'; // Corrected relative path
import ProjectCard from '../components/sections/ProjectCard'; // Corrected relative path

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const featuredProjects = getFeaturedProjects(); // Get featured projects

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Thomas Cezar | Commissionng Engineer & Developer</title>
        <meta name="description" content="Commissionng Engineer and developer from Southampton, UK" />
      </Head>

      <div className="container-custom py-20">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center mb-20">
          <motion.div
            className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-6xl font-bold mb-2"
              variants={itemVariants}
            >
              {t('hero.greeting')}{' '}
              <span className="text-primary">{t('hero.name')}</span>
            </motion.h1>
            <motion.h2
              className="text-4xl font-semibold text-gray-400 mb-6"
              variants={itemVariants}
            >
              {t('hero.title')}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-500 mb-10"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* Apply consistent button styling */}
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 min-w-[160px] text-center"
              >
                {t('hero.cta')}
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 min-w-[160px] text-center"
              >
                {t('hero.contact')}
              </Link>
            </motion.div>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80 bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with your actual profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <motion.section
          className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {t('projects.featured_title')}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants} // Reuse container variants for stagger effect
            initial="hidden"
            animate="visible"
          >
            {featuredProjects.map((project: Project) => ( // Add explicit type for project
              <ProjectCard key={project.id} project={project} t={t} />
            ))}
          </motion.div>
          <div className="text-center mt-12">
             <Link href="/projects" className="btn-secondary">
               {t('projects.view_all')}
             </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])), // Use nullish coalescing for locale
    },
  };
}

export default Home;
