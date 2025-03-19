import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use the same projects data structure from your index page
// You might want to move this to a shared data file later
const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: '/placeholder.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Portfolio Site',
    description: 'A responsive portfolio website for a professional photographer',
    image: '/placeholder.jpg',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity application with drag-and-drop functionality',
    image: '/placeholder.jpg',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
  // Add more projects for the full projects page
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with interactive maps',
    image: '/placeholder.jpg',
    tags: ['JavaScript', 'APIs', 'CSS Grid'],
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with CMS integration',
    image: '/placeholder.jpg',
    tags: ['Next.js', 'Markdown', 'Headless CMS'],
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media performance',
    image: '/placeholder.jpg',
    tags: ['React', 'Chart.js', 'REST APIs'],
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Projects | Thomas Cezar</title>
        <meta name="description" content="Portfolio of web development and design projects by Thomas Cezar" />
      </Head>

      <div className="container-custom py-20">
        <section className="mb-16">
          <div className="blue-accent mb-6">
            <h1 className="text-5xl font-bold">My Projects</h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl">
            A collection of my work, featuring web development projects that showcase my skills and experience in creating responsive, accessible, and user-friendly applications.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-700 relative">
                  {/* Replace with actual project images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects/${project.id}`}
                    className="text-blue-500 hover:text-blue-400"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
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
