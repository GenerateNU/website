export type FooterPage = {
  name: string;
  link: string;
  disabled?: boolean;
};

export const pages: FooterPage[] = [
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Apply', link: '/apply' },
];
