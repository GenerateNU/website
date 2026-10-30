import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import useMediaQuery from '@/shared/useMediaQuery';

import { playSfx } from './chiptune';
import type { Sfx } from './chiptune';
import { ExperienceContext } from './experience';
import useIdle from './useIdle';

const IDLE_AFTER = 25_000;

const BOOT_LENGTH = 1600;

const SOUND_KEY = 'pp12-sound';

// Each prototype version powers on once per session on its own.
const DEFAULT_BOOT_KEY = 'pp12-booted';

// Storage can be blocked (private windows, strict settings); the page then just forgets.
const readStorage = (storage: () => Storage, key: string): string | null => {
  try {
    return storage().getItem(key);
  } catch {
    return null;
  }
};

const writeStorage = (storage: () => Storage, key: string, value: string): void => {
  try {
    storage().setItem(key, value);
  } catch {
    // Not remembered; nothing else depends on it.
  }
};

type ExperienceProviderProps = {
  children: ReactNode;
  bootKey?: string;
};

export default function ExperienceProvider({ children, bootKey = DEFAULT_BOOT_KEY }: ExperienceProviderProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [paused, setPaused] = useState(false);
  // Off until the visitor asks for it: sound nobody expected is the fastest way to lose them.
  const [sound, setSoundState] = useState(() => readStorage(() => localStorage, SOUND_KEY) === 'on');
  // Coming back from a project (or reloading) shouldn't replay the intro.
  const [booting, setBooting] = useState(() => motionAllowed && readStorage(() => sessionStorage, bootKey) === null);
  const idle = useIdle(IDLE_AFTER, motionAllowed && !paused);

  useEffect(() => {
    if (!booting) {
      return undefined;
    }

    writeStorage(() => sessionStorage, bootKey, '1');
    const timer = window.setTimeout(() => setBooting(false), BOOT_LENGTH);

    return () => window.clearTimeout(timer);
  }, [booting, bootKey]);

  const setSound = (next: boolean): void => {
    setSoundState(next);
    writeStorage(() => localStorage, SOUND_KEY, next ? 'on' : 'off');

    // Turning sound on answers with a sound, so the visitor knows it worked.
    if (next) {
      playSfx('toggle');
    }
  };

  const sfx = (name: Sfx): void => {
    if (sound) {
      playSfx(name);
    }
  };

  return (
    <ExperienceContext
      value={{
        motionAllowed,
        canDemo: motionAllowed && canHover,
        paused,
        setPaused,
        sound,
        setSound,
        sfx,
        idle,
        booting,
      }}
    >
      {children}
    </ExperienceContext>
  );
}
