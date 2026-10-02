// The order of these is how they appear on the management expanded teams page
export const TEAMS = ['management', 'hardware', 'software', 'operations', 'engagement'] as const;

export type Team = (typeof TEAMS)[number];

export const isTeam = (value: string | undefined): value is Team => TEAMS.some(team => team === value);
