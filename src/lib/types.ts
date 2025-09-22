// types for portfolio data

export interface Tag {
  name: string;
  icon?: string;
}

export interface ExperienceData {
  title: string;
  imagePath: string;
  tags: Tag[];
  description: string;
  link?: string;
}

export interface ProjectData {
  title: string;
  imagePath: string;
  githubLink: string;
  tags: string[];
  prize?: string;
  description: string;
}

export interface CaseData {
  title: string;
  imagePath: string;
  companyLogoPath: string;
  companyName: string;
  prize?: string;
  description: string;
}

export interface ExtracurricularData {
  title: string;
  description: string;
  imagePath: string;
  roles: string[];
}

export interface PortfolioData {
  experiences: ExperienceData[];
  projects: ProjectData[];
  cases: CaseData[];
  extracurriculars: ExtracurricularData[];
}