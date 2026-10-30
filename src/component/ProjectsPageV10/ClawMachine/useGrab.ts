import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';
import useMediaQuery from '@/shared/useMediaQuery';

export type Phase = 'idle' | 'aim' | 'drop' | 'grab' | 'lift';

type Step = {
  next: Phase | 'open';
  ms: number;
};

// One grab, step by step. The CSS transitions for each step use the same timings.
const steps = {
  aim: { next: 'drop', ms: 300 },
  drop: { next: 'grab', ms: 450 },
  grab: { next: 'lift', ms: 250 },
  lift: { next: 'open', ms: 450 },
} satisfies Record<Exclude<Phase, 'idle'>, Step>;

type Grab = {
  phase: Phase;
  // The path of the prize being grabbed, while a grab is under way.
  grabbedPath: string | undefined;
  // Whether the claw is shown at all; with reduced motion a grab just opens the project.
  animate: boolean;
  grab: (path: string) => void;
};

export default function useGrab(): Grab {
  const navigate = useNavigate();
  const animate = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const [phase, setPhase] = useState<Phase>('idle');
  const [grabbedPath, setGrabbedPath] = useState<string | undefined>(undefined);

  // Plays the grab one step at a time, then opens the prize once it has been lifted out.
  useEffect(() => {
    if (phase === 'idle' || grabbedPath === undefined) {
      return undefined;
    }

    const step = steps[phase];

    const timer = window.setTimeout(() => {
      if (step.next === 'open') {
        void navigate(grabbedPath, { state: FROM_PROJECT_LIST });
      } else {
        setPhase(step.next);
      }
    }, step.ms);

    return (): void => window.clearTimeout(timer);
  }, [phase, grabbedPath, navigate]);

  const grab = (path: string): void => {
    if (!animate) {
      void navigate(path, { state: FROM_PROJECT_LIST });

      return;
    }

    setGrabbedPath(path);
    setPhase('aim');
  };

  return { phase, grabbedPath: phase === 'idle' ? undefined : grabbedPath, animate, grab };
}
