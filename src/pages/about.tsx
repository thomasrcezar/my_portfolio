import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Timeline from '../components/sections/Timeline'; // Import the Timeline component
// Define the About page component
const About: NextPage = () => {
  const { t } = useTranslation('common');

  // Safely access nested translation keys
  const backgroundContentKeys = ['about.background_content_1', 'about.background_content_2', 'about.background_content_3'];
  const skills = [
    { categoryKey: 'about.skills_frontend_category', itemsKey: 'about.skills_frontend_items' },
    { categoryKey: 'about.skills_backend_category', itemsKey: 'about.skills_backend_items' },
    { categoryKey: 'about.skills_tools_category', itemsKey: 'about.skills_tools_items' },
  ];
  const approach = [
    { titleKey: 'about.approach_user_centered_title', contentKey: 'about.approach_user_centered_content' },
    { titleKey: 'about.approach_modern_tech_title', contentKey: 'about.approach_modern_tech_content' },
    { titleKey: 'about.approach_collaborative_title', contentKey: 'about.approach_collaborative_content' },
  ];

  // Fetch timeline items, ensuring it's treated as an array
  const timelineItems = t('about.timeline_items', { returnObjects: true }) as Array<{ type: 'education' | 'experience'; date: string; title: string; institution: string; description: string; }> || [];


  return (
    <>
      {/* Define the page metadata */}
      <Head>
        <title>{t('about.title')} | Thomas Cezar</title>
        <meta name="description" content={t('about.meta_description')} />
      </Head>

      {/* Main container for the About page */}
      <div className="container-custom py-20">
        {/* Section for the About Me content */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-12">{t('about.title')}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {/* Section for My Background */}
              <div className="blue-accent mb-6">
                <h2 className="text-2xl font-bold">{t('about.background_title')}</h2>
              </div>
              {backgroundContentKeys.map((key, index) => (
                <p key={index} className="text-gray-400 mb-6">
                  {t(key)}
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
            <h2 className="text-3xl font-bold">{t('about.skills_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through skills data to display each skill group */}
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{t(skillGroup.categoryKey)}</h3>
                <ul className="space-y-2">
                  {/* Map through each skill in the skill group */}
                  {(t(skillGroup.itemsKey, { returnObjects: true }) as string[]).map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill} {/* Display the translated skill */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section for Education & Experience Timeline */}
        <section className="mb-20">
          <div className="blue-accent mb-10">
            <h2 className="text-3xl font-bold">{t('about.timeline_title')}</h2>
          </div>
          <Timeline items={timelineItems} />
        </section>

        {/* Section for My Approach */}
        <section className="mb-20"> {/* Added mb-20 for spacing */}
          <div className="blue-accent mb-10">
            <h2 className="text-3xl font-bold">{t('about.approach_title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through approach data to display each section */}
            {approach.map((approachItem, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{t(approachItem.titleKey)}</h3>
                <p className="text-gray-400">
                  {t(approachItem.contentKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section for Download Resume Button */}
        <section className="text-center">
            <a
              href="#" // Placeholder link - needs actual resume path
              download // Suggests download, but needs a real file
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              {t('about.resume_button')}
            </a>
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
export default About;
