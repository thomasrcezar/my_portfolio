import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thomas Cezar | Commissionng Engineer & Developer</title>
        <meta name="description" content="Commissionng Engineer and developer from Southampton, UK" />
      </Head>

      <div className="container-custom py-20">
        <section className="flex flex-col md:flex-row items-center mb-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <h1 className="text-6xl font-bold mb-6">Hey, I&apos;m Thomas.</h1>
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

        <section className="mb-20">
          <h2 className="section-title">Featured Projects</h2>
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
          <div className="mt-10 text-center">
            <Link href="/projects" className="text-blue-500 hover:text-blue-400 font-medium">
              View All Projects →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
