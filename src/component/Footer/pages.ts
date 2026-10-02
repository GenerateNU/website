export type FooterPage = {
  name: string;
  link: string;
  disabled?: boolean;
};

export const pages: FooterPage[] = [
  // { name: 'Generate', link: '/' },
  { name: 'Apply', link: '/apply' },
  { name: 'About', link: '/' },
  // { name: 'Culture', link: '/culture' },
  // { name: 'Teams', link: '/teams' },
  // { name: "People", link: "/", disabled: true },
  { name: 'Projects', link: '/projects' },
];
