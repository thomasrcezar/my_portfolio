import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Developer Portfolio</title>
      </Head>

      <header className="bg-white shadow dark:bg-gray-800">
        <div className="container-custom py-6">
          <h1 className="text-2xl font-bold text-primary">My Portfolio</h1>
        </div>
      </header>

      <main className="flex-grow container-custom py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h2>
          <p className="text-xl mb-8">
            Full-stack Developer specializing in modern web technologies
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-600 transition">
              My Projects
            </button>
            <button className="px-6 py-2 border border-primary text-primary rounded hover:bg-blue-50 transition">
              Contact Me
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p>
              I'm a passionate developer with experience in React, TypeScript, and Next.js. I love
              creating beautiful, responsive, and user-friendly web applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li>React & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Tailwind CSS & SCSS</li>
              <li>Node.js & Express</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(item => (
              <div key={item} className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of the project and technologies used.
                </p>
                <div className="flex justify-end">
                  <a href="#" className="text-primary hover:underline">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow dark:bg-gray-800">
        <div className="container-custom py-6 text-center">
          <p>© {new Date().getFullYear()} Your Name | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
