export interface Education {
  name: string;
  start: string;
  end: string;
  description: string;
};

export interface Experience {
  name: string;
  start: string;
  end: string;
  description: string;
};

export interface Skill {
  name: string;
  logo: string;
  level: string;
  tagClass: string;
};

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Metric {
  title: string,
  img: string,
  url: string,
  description: string,
};

export interface Project {
  title: string;
  category: string;
  img: string;
  alt: string;
  url: string;
};

export interface Service {
  icon: string;
  alt: string;
  title: string;
  text: string;
};