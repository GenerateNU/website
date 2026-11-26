import type { Project } from '@/data/projectData';

export type Discipline = 'software' | 'hardware' | 'both';

const disciplineLabels: Record<Discipline, string> = {
  software: 'Software',
  hardware: 'Hardware',
  both: 'Software + Hardware',
};

// Which branches built it; the card stock is coloured by this.
export const getDiscipline = (project: Project): Discipline => {
  const software = project.teams.includes('software');
  const hardware = project.teams.includes('hardware');

  if (software && hardware) {
    return 'both';
  }

  return hardware ? 'hardware' : 'software';
};

// Plain words for the back of the card, e.g. "Software + Hardware".
export const getDisciplineLabel = (project: Project): string => disciplineLabels[getDiscipline(project)];

// "2 Software Engineers" rather than the members' names: the names are placeholders, the roles are not.
export const summarizeRoles = (project: Project): string[] => {
  const counts = new Map<string, number>();

  for (const member of project.members) {
    counts.set(member.role, (counts.get(member.role) ?? 0) + 1);
  }

  return [...counts.entries()].map(([role, count]) => (count === 1 ? role : `${count} ${role}s`));
};

export const pluralizeCards = (count: number): string => `${count} card${count === 1 ? '' : 's'}`;
