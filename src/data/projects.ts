export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Mijn persoonlijke portfolio gebouwd met Astro, TypeScript en Tailwind CSS.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
    image: '/images/project-images/project_portfolio.png',
    url: 'https://kevintobben.nl',
  },
  {
    title: 'RentopBouw',
    description: 'Simpele bedrijfswebsite voor een dak- en wandmontage bedrijf',
    tags: ['HTML', 'CSS', 'Responsive'],
    image: '/images/project-images/project_rentopbouw.png',
    url: 'https://rentopbouw.kevintobben.nl',
  },
  {
    title: 'Hekwerkmeesters',
    description: 'Wordpress website gemaakt voor een hekwerk bedrijf',
    tags: ['Wordpress'],
    image : '/images/project-images/project_hekwerkmeesters.png',
    url: 'https://hekwerkmeesters.nl',
  },
];
