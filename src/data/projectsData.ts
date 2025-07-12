export interface Project {
  id: number;
  titleKey: string; // Translation key for title
  descriptionKey: string; // Translation key for description
  images: string[]; // Array of image paths for showcase
  tags: string[]; // Tags can remain as strings for now, or be keys if needed
  slug: string; // Slug for linking to project detail page
}

export const projectsData: Project[] = [
  {
    id: 1,
    titleKey: 'projects.project_1.title',
    descriptionKey: 'projects.project_1.description',
    images: ['/placeholder1.svg', '/placeholder2.svg', '/placeholder3.svg'], // Use SVG placeholders
    tags: ['React', 'Node.js', 'MongoDB'],
    slug: 'e-commerce-website',
  },
  {
    id: 2,
    titleKey: 'projects.project_2.title',
    descriptionKey: 'projects.project_2.description',
    images: ['/placeholder1.svg', '/placeholder2.svg'], // Use SVG placeholders
    tags: ['Next.js', 'Tailwind CSS'],
    slug: 'portfolio-site',
  },
  {
    id: 3,
    titleKey: 'projects.project_3.title',
    descriptionKey: 'projects.project_3.description',
    images: ['/placeholder1.svg', '/placeholder2.svg', '/placeholder3.svg'], // Use SVG placeholders
    tags: ['React', 'TypeScript', 'Firebase'],
    slug: 'task-management-app',
  },
  {
    id: 4,
    titleKey: 'projects.project_4.title',
    descriptionKey: 'projects.project_4.description',
    images: ['/placeholder1.svg'], // Use SVG placeholders
    tags: ['JavaScript', 'APIs', 'CSS Grid'],
    slug: 'weather-dashboard',
  },
  {
    id: 5,
    titleKey: 'projects.project_5.title',
    descriptionKey: 'projects.project_5.description',
    images: ['/placeholder1.svg', '/placeholder2.svg'], // Use SVG placeholders
    tags: ['Next.js', 'Markdown', 'Headless CMS'],
    slug: 'blog-platform',
  },
  {
    id: 6,
    titleKey: 'projects.project_6.title',
    descriptionKey: 'projects.project_6.description',
    images: ['/placeholder1.svg', '/placeholder2.svg', '/placeholder3.svg'], // Use SVG placeholders
    tags: ['React', 'Chart.js', 'REST APIs'],
    slug: 'social-media-dashboard',
  },
];

// Function to get featured projects (e.g., first 3)
export const getFeaturedProjects = (): Project[] => {
  return projectsData.slice(0, 3);
};
