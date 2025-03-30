export interface Project {
  id: number;
  titleKey: string; // Translation key for title
  descriptionKey: string; // Translation key for description
  image: string; // Keep image path for now
  tags: string[]; // Tags can remain as strings for now, or be keys if needed
  slug: string; // Slug for linking to project detail page
}

export const projectsData: Project[] = [
  {
    id: 1,
    titleKey: 'projects.project_1.title',
    descriptionKey: 'projects.project_1.description',
    image: '/placeholder.jpg', // Replace with actual image paths later
    tags: ['React', 'Node.js', 'MongoDB'],
    slug: 'e-commerce-website',
  },
  {
    id: 2,
    titleKey: 'projects.project_2.title',
    descriptionKey: 'projects.project_2.description',
    image: '/placeholder.jpg',
    tags: ['Next.js', 'Tailwind CSS'],
    slug: 'portfolio-site',
  },
  {
    id: 3,
    titleKey: 'projects.project_3.title',
    descriptionKey: 'projects.project_3.description',
    image: '/placeholder.jpg',
    tags: ['React', 'TypeScript', 'Firebase'],
    slug: 'task-management-app',
  },
  {
    id: 4,
    titleKey: 'projects.project_4.title',
    descriptionKey: 'projects.project_4.description',
    image: '/placeholder.jpg',
    tags: ['JavaScript', 'APIs', 'CSS Grid'],
    slug: 'weather-dashboard',
  },
  {
    id: 5,
    titleKey: 'projects.project_5.title',
    descriptionKey: 'projects.project_5.description',
    image: '/placeholder.jpg',
    tags: ['Next.js', 'Markdown', 'Headless CMS'],
    slug: 'blog-platform',
  },
  {
    id: 6,
    titleKey: 'projects.project_6.title',
    descriptionKey: 'projects.project_6.description',
    image: '/placeholder.jpg',
    tags: ['React', 'Chart.js', 'REST APIs'],
    slug: 'social-media-dashboard',
  },
];

// Function to get featured projects (e.g., first 3)
export const getFeaturedProjects = (): Project[] => {
  return projectsData.slice(0, 3);
};
