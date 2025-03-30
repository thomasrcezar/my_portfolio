import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { TFunction } from 'i18next';
import type { Project } from '../../data/projectsData'; // Use relative path

interface ProjectCardProps {
  project: Project;
  t: TFunction;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, t }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
    >
      <div className="h-48 bg-gray-700 relative">
        {/* Placeholder for project image */}
        <Image
          src={project.image}
          alt={t(project.titleKey)}
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{t(project.titleKey)}</h3>
        <p className="text-gray-400 mb-4 text-sm line-clamp-3">
          {t(project.descriptionKey)}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`} // Link to project detail page using slug
          className="text-primary hover:text-primary-focus font-semibold text-sm"
        >
          {t('projects.view_project')} →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
