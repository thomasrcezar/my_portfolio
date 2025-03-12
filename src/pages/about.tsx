import type { NextPage } from 'next';
import Head from 'next/head';

// Import the dynamic content from aboutData.json
import aboutData from '../data/aboutData.json';
// Define the About page component
const About: NextPage = () => {
  return (
    <>
      {/* Define the page metadata */}
      <Head>
        <title>About Me | Thomas Cezar</title>
        <meta name="description" content="Learn more about Thomas Cezar, a passionate web designer and developer with over 8 years of experience in creating beautiful, functional websites and applications." />
      </Head>

      {/* Main container for the About page */}
      <div className="container-custom py-20">
        {/* Section for the About Me content */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-12">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                {/* Section for My Background */}
                <div className="blue-accent mb-6">
                <h2 className="text-2xl font-bold">{aboutData.background.title}</h2>
              </div>
              {aboutData.background.content.map((paragraph, index) => (
                <p key={index} className="text-gray-400 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Image section */}
            <div className="relative h-80 bg-gray-800 rounded-lg overflow-hidden">
              <img src="/profile.jpg" alt="Thomas Cezar Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Section for My Skills */}
        <section className="mb-20">
          <div className="blue-accent mb-10">
            <h2 className="text-3xl font-bold">My Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through skills data to display each skill group */}
            {aboutData.skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {/* Map through each skill in the skill group */}
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

        {/* Section for My Approach */}
        <section>
          <div className="blue-accent mb-10">
            <h2 className="text-3xl font-bold">My Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through approach data to display each section */}
            {aboutData.approach.map((approachItem, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{approachItem.title}</h3>
                <p className="text-gray-400">
                  {approachItem.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
