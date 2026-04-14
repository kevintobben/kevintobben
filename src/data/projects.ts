export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  github?: string;
  longDescription?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: 'kevintobben',
    title: 'Portfolio Website',
    description: 'Mijn persoonlijke portfolio gebouwd met Astro, TypeScript en Tailwind CSS.',
    longDescription: 'Dit is mijn portfolio website om mijn werken te laten zien en ook mijn skills. Ik werk voornamelijk met Astro en Tailwind CSS',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
    image: '/images/project-images/project_portfolio.png',
    screenshots: [
      '/images/PSI_kevintobben.png',
    ],
    url: 'https://kevintobben.nl',
    github: 'https://github.com/kevintobben/kevintobben',
  },
  {
    slug: 'rentopbouw',
    title: 'Rentop Bouw',
    description: 'Simpele bedrijfswebsite voor een dak- en wandmontage bedrijf',
    longDescription: 'Een website voor mijn vaders dak- en wandmontage bedrijf. De website is gemaakt met HTML en CSS aangezien de website op het momoment van maken niet meer dan dat nodig was',
    tags: ['HTML', 'CSS', 'Responsive'],
    image: '/images/project-images/project_rentopbouw.png',
    screenshots: [
      '/images/project-images/project_rentopbouw.png',
      '/images/project-images/project_rentopbouw.png',
      '/images/psi_rentopbouw.png',
    ],
    url: 'https://rentopbouw.kevintobben.nl',
    github: 'https://github.com/kevintobben/rentop-bouw-vanilla',
  },
  {
    slug: 'hekwerkmeesters',
    title: 'Hekwerkmeesters',
    description: 'Wordpress website gemaakt voor een hekwerk bedrijf',
    longDescription: 'Ik heb deze website gemaakt voor mijn neefje zijn eigen bedrijf in hekwerken. ' +
        'Ik heb deze website gemaakt in Wordpress, omdat dit voor hem makkelijk te beheren is.',
    tags: ['Wordpress'],
    image : '/images/project-images/project_hekwerkmeesters.png',
    screenshots: [
      '/images/psi_hekwerkmeesters.png',
    ],
    url: 'https://hekwerkmeesters.nl',
  },
];
