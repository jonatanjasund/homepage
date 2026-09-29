export const site = {
  name: 'Jonatan Jasund',
  title: 'jasund.dev',
  description: 'Portfolio, hobby projects, tools and games by Jonatan Jasund.',
  github: 'https://github.com/jonatanjasund',
};

export const nav = [
  { href: '/projects/', label: 'Projects' },
  { href: '/tools/', label: 'Tools' },
  { href: '/play/', label: 'Play' },
];

export type CatalogItem = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

// Small tools that live on this site. Add a page under src/pages/tools/ and list it here.
export const tools: CatalogItem[] = [
  {
    title: 'JSON formatter',
    description: 'Pretty-print, minify and validate JSON. Runs entirely in your browser.',
    href: '/tools/json/',
    tags: ['react'],
  },
];

// Games. Small ones live under src/pages/play/; bigger ones can link to their own subdomain.
export const games: CatalogItem[] = [
  { title: 'yaniv', description: '...', href: 'https://jasund.dev/games/yaniv/' },
];
