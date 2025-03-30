import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { projectsData, Project } from '../../data/projectsData'; // Import project data and type
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';

interface ProjectDetailProps {
  project: Project | null; // Project can be null if not found
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

// Define the Project Detail page component
const ProjectDetail: NextPage<ProjectDetailProps> = ({ project }) => {
  const { t } = useTranslation('common');

  if (!project) {
    // Handle case where project is not found (optional: return a 404 page)
    return <div>Project not found.</div>;
  }

  return (
    <>
      <Head>
        {/* Use translated project title for page title */}
        <title>{t(project.titleKey)} | Thomas Cezar</title>
        {/* Use translated project description for meta description */}
        <meta name="description" content={t(project.descriptionKey)} />
      </Head>

      <div className="container-custom py-20">
        {/* Project Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t(project.titleKey)}</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            {t(project.descriptionKey)}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Project Image Showcase */}
        <section className="mb-12">
          {/* Display the first image prominently */}
          <div className="relative h-64 md:h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={project.images[0]} // Use the first project image
              alt={t(project.titleKey)}
              layout="fill"
              objectFit="cover"
              priority // Prioritize loading the main image
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          {/* Grid for additional images */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.images.slice(1).map((imgSrc, index) => (
                <div key={index} className="relative h-40 bg-gray-700 rounded-lg overflow-hidden shadow">
                  <Image
                    src={imgSrc}
                    alt={`${t(project.titleKey)} - Screenshot ${index + 2}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Project Details/Content Section */}
        <section className="prose prose-invert max-w-none lg:prose-xl">
          {/* Add more detailed content about the project here */}
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p>
            Detailed description about the project goals, challenges, solutions, and technologies used.
            This section should be populated with specific content for each project, potentially using Markdown or fetching from a CMS in the future.
            For now, this is placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Example: Add links */}
          <div className="mt-8 flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-400">Live Demo (Placeholder)</a>
            <a href="#" className="text-blue-500 hover:text-blue-400">Source Code (Placeholder)</a>
          </div>
        </section>
      </div>
    </>
  );
};

// Generate paths for all projects and locales
export const getStaticPaths: GetStaticPaths<Params> = async ({ locales = [] }) => {
  const paths = projectsData.flatMap(project =>
    locales.map(locale => ({
      params: { slug: project.slug },
      locale,
    }))
  );

  return {
    paths,
    fallback: false, // Return 404 if path doesn't exist
  };
};

// Fetch project data and translations for the specific page
export const getStaticProps: GetStaticProps<ProjectDetailProps, Params> = async (context) => {
  const { slug } = context.params!;
  const locale = context.locale || 'en'; // Default to 'en' if locale is undefined

  // Find the project by slug
  const project = projectsData.find(p => p.slug === slug) || null;

  return {
    props: {
      project,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default ProjectDetail;
