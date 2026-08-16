export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  context: string;
  problem: string;
  actions: string[];
  tools: string[];
  outcome: string;
};

export type Writeup = {
  id: string;
  title: string;
  summary: string;
  tools: string[];
  sections: {heading: string;body: string;}[];
};

export type FeaturedReport = {
  title: string;
  summary: string;
  tools: string[];
  href: string;
};

export type Credential = {
  id: string;
  name: string;
  issuer: string;
  status: 'In Progress' | 'Completed';
};

export type NavItem = {
  label: string;
  href: string;
};