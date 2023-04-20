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
        "Chakra UI",
        "Material UI",
        "Tailwind",
        "DaisyUI",
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
        "Supabase",
        "Firebase",
        "Strapi",
        "Google Sheets",
        "Redux",
        "Zod",
        "Jotai",
        "React Router",
        "TanStack Query",
        "TanStack Virtual",
        "TanStack Table",
        "React Hook Form",
        "NextAuthJS",
        "CodeMirror",
        "Nivo Charts",
        "Vercel",
        "Railway",
        "Netlify",
        "GitHub Pages",
        "Figma",
        "Vite",
      ])
    ),
    links: z.object({
      github: z.string().url().nullable(),
      site: z.string().url().nullable(),
    }),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    isFeatured: z.boolean(),
    shouldShow: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
