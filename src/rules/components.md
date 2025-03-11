# Component Creation Standards

## Component Structure

- One component per file
- Use named exports for all components
- Place in appropriate subdirectory based on function:
  - `/common`: Reusable UI elements (Button, Card, etc.)
  - `/layout`: Layout components (Header, Footer, etc.)
  - `/sections`: Page section components

## Naming Conventions

- PascalCase for component names (e.g., `ProjectCard.tsx`)
- camelCase for instance variables and functions
- Use descriptive, specific names that indicate purpose

## Props

- Define TypeScript interfaces for props at the top of the file
- Use destructuring for props in function parameters
- Provide default props when appropriate
- Document complex props with JSDoc comments

## Styling

- Use Tailwind utility classes primarily
- Extract common patterns to component classes with @apply
- Follow responsive design principles from mobile-first
- Use CSS variables for theming when needed
