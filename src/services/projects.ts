import { useMemo } from 'react';

import type { ProjectTeam } from '@/component/ProjectsPage/AllProjects/Project/Project';

import { useSanity } from './useSanity';

export type ProjectData = {
  name: string;
  teams: ProjectTeam[];
  description: string;
  // Undefined when the project has no logo yet; the page shows a branch placeholder instead.
  image?: string;
  // Card-sized images (334×180) get the framed look; other images show at their natural size.
  framed: boolean;
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
  imageWidth?: number;
  imageHeight?: number;
};

const projectsQuery = `*[_type == "pastProject" && defined(name)] | order(name asc) {
  _id,
  name,
  description,
  semester,
  featured,
  teams,
  roundedPopupImage,
  "imageUrl": image.asset->url,
  "imageWidth": image.asset->metadata.dimensions.width,
  "imageHeight": image.asset->metadata.dimensions.height
}`;

const toProjectData = (doc: SanityProject): ProjectData => ({
  name: doc.name,
  teams: doc.teams ?? [],
  description: doc.description ?? '',
  image: doc.imageUrl ?? undefined,
  framed: doc.imageWidth === 334 && doc.imageHeight === 180,
  semester: doc.semester,
  featured: doc.featured ?? false,
  rounded: doc.roundedPopupImage ?? false,
});

export function useProjects(): ProjectData[] {
  const docs = useSanity<SanityProject>(projectsQuery);

  return useMemo(() => docs.map(toProjectData), [docs]);
}
