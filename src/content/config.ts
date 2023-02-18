import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(
      z.enum([
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Sass",
        "ChakraUI",
        "Tailwind",
        "Radix",
        "Cypress",
        "Jest",
        "React Testing Library",
        "React",
        "NextJS",
        "Astro",
        "NodeJS",
        "Express",
        "GraphQL",
        "REST API",
        "tRPC",
        "Git",
        "Docker",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "PlanetScale",
        "Firebase",
        "Strapi",
        "Google Sheets",
        "Redux",
        "Zod",
        "Jotai",
        "React Router",
        "TanStack Query",
        "React Hook Form",
        "Vercel",
        "Railway",
        "Netlify",
        "GitHub Pages",
        "Figma",
        "Vite",
      ])
    ),
    links: z.object({
      github: z.string().url(),
      site: z.string().url(),
    }),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    isFeatured: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
