import { createContext, useContext } from 'react';

import type { Sfx } from './chiptune';

export type Experience = {
  // The visitor's device allows animation (no "reduce motion" setting).
  motionAllowed: boolean;
  // A mouse or trackpad is in use, so a cursor wandering the grid on its own reads as a demo.
  canDemo: boolean;
  // The Pause button: stops everything that moves on its own.
  paused: boolean;
  setPaused: (paused: boolean) => void;
  sound: boolean;
  setSound: (sound: boolean) => void;
  sfx: (name: Sfx) => void;
  // No input for a while (never while paused or under reduced motion).
  idle: boolean;
  // The first few moments of the first visit this session, while the cabinet powers on.
  booting: boolean;
};

export const ExperienceContext = createContext<Experience | null>(null);

export function useExperience(): Experience {
  const experience = useContext(ExperienceContext);

  if (!experience) {
    throw new Error('useExperience must be used inside ExperienceProvider');
  }

  return experience;
}
