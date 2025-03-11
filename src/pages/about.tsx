import type { NextPage } from 'next';
import Head from 'next/head';

// eslint-disable-next-line comma-dangle
const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'SCSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL']
  },
  {
    category: 'Tools & Methods',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Responsive Design', 'Agile Development']
  }
];
const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me | SEB KAY</title>
        <meta name="description" content="Learn more about Seb Kay, web designer and developer" />
      </Head>

      <div className="container-custom py-20">
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-12">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <div className="blue-accent mb-6">
                <h2 className="text-2xl font-bold">My Background</h2>
              </div>
              <p className="text-gray-400 mb-6">
                I'm a passionate web designer and developer based in Southampton, UK with over 8 years of experience creating 
                beautiful, functional websites and applications.
              </p>
              <p className="text-gray-400 mb-6">
                After graduating with a degree in Computer Science, I worked with several agencies before deciding to focus on 
                creating bespoke websites for clients who need a unique online presence.
              </p>
              <p className="text-gray-400">
                I believe in clean, efficient code and thoughtful design that puts the user experience first. Every project 
                I take on receives my full attention and dedication to quality.
              </p>
            </div>
            
            <div className="relative h-80 bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with your actual about page image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="blue-accent mb-10">
            <h2 className="text-3xl font-bold">My Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="blue-accent mb-10">
            <h2 className="text-3xl font-bold">My Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">User-Centered Design</h3>
              <p className="text-gray-400">
                I create websites with the end user in mind, focusing on intuitive navigation, 
                accessibility, and engaging experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Modern Technologies</h3>
              <p className="text-gray-400">
                I stay up-to-date with the latest web technologies and best practices to deliver 
                cutting-edge solutions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Collaborative Process</h3>
              <p className="text-gray-400">
                I work closely with clients throughout the development process, ensuring their vision 
                is realized at every step.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;