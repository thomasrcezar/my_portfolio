import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useState, useMemo } from 'react'; // Import useState and useMemo
import { projectsData } from '../data/projectsData'; // Import centralized project data
import ProjectCard from '../components/sections/ProjectCard'; // Import the ProjectCard component

const Projects: NextPage = () => {
  const { t } = useTranslation('common');
  const [selectedTag, setSelectedTag] = useState<string>('All'); // State for selected filter tag

  // Get unique tags from projectsData using useMemo for performance
  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    projectsData.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()]; // Add 'All' and sort tags
  }, []); // Empty dependency array means this runs once

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.tags.includes(selectedTag));
  }, [selectedTag]); // Re-filter when selectedTag changes

  return (
    <>
      <Head>
        {/* Use translation key for title */}
        <title>{t('projects.title')} | Thomas Cezar</title>
        {/* Add meta description key if needed, or reuse subtitle */}
        <meta name="description" content={t('projects.subtitle')} />
      </Head>

      <div className="container-custom py-20">
        <section className="mb-16">
          <div className="blue-accent mb-6">
            {/* Use translation key for heading */}
            <h1 className="text-5xl font-bold">{t('projects.title')}</h1>
          </div>
          {/* Use translation key for introductory paragraph */}
          <p className="text-xl text-gray-400 max-w-3xl">
            {t('projects.subtitle')}
          </p>
        </section>

        {/* Filter Buttons Section */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {uniqueTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ease-in-out
                  ${selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-md' // Active style
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600' // Inactive style
                  }`}
              >
                {tag === 'All' ? t('projects.filter_all') : tag}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over filteredProjects and use ProjectCard */}
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} t={t} />
            ))}
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

export default Projects;
