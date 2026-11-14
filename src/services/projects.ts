import { useMemo } from 'react';

import type { ProjectTeam } from '@/component/ProjectsPage/AllProjects/Project/Project';

import { useSanity } from './useSanity';

export type ProjectData = {
  name: string;
  teams: ProjectTeam[];
  description: string;
  // Undefined when the project has no logo yet; the page shows a branch placeholder instead.
  image?: string;
  semester?: string;
  featured: boolean;
  rounded: boolean;
};

type SanityProject = {
  _id: string;
  name: string;
  description?: string;
  semester?: string;
  featured?: boolean;
  teams?: ProjectTeam[];
  roundedPopupImage?: boolean;
  imageUrl?: string;
};

const projectsQuery = `*[_type == "pastProject" && defined(name)] | order(name asc) {
  _id,
  name,
  description,
  semester,
  featured,
  teams,
  roundedPopupImage,
  "imageUrl": image.asset->url
}`;

const toProjectData = (doc: SanityProject): ProjectData => ({
  name: doc.name,
  teams: doc.teams ?? [],
  description: doc.description ?? '',
  image: doc.imageUrl,
  semester: doc.semester,
  featured: doc.featured ?? false,
  rounded: doc.roundedPopupImage ?? false,
});

export function useProjects(): ProjectData[] {
  const docs = useSanity<SanityProject>(projectsQuery);

  return useMemo(() => docs.map(toProjectData), [docs]);
}
