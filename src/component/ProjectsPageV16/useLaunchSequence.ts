import { useState } from 'react';
import type { FocusEvent } from 'react';

import useMediaQuery from '@/shared/useMediaQuery';

import type { RocketState } from './LaunchPad';

type HoldHandlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: (event: FocusEvent<HTMLElement>) => void;
};

type LaunchSequence = {
  activeIndex: number;
  nextIndex: number;
  // Whether this screen and visitor get the countdown and liftoff at all.
  canSequence: boolean;
  // Whether the countdown is shown (not yet stopped for good), and whether it is moving right now.
  sequences: boolean;
  running: boolean;
  launched: boolean;
  paused: boolean;
  togglePaused: () => void;
  launch: (index: number) => void;
  pick: (index: number) => void;
  rocketState: (index: number) => RocketState;
  holdHandlers: HoldHandlers;
};

// The launch order: which project is on stage, which pad counts down next, and what holds or stops it.
// Like V8's billboard it only runs on its own for a hovering mouse with motion allowed (and a window wide
// enough that the pads aren't a swipe strip), holds under the pointer or keyboard focus, can be paused,
// and stops for good once the visitor picks a pad.
export default function useLaunchSequence(total: number): LaunchSequence {
  const canSequence = useMediaQuery(
    '(min-width: 900px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
  );

  const [activeIndex, setActiveIndex] = useState(0);
  // False until the first launch, so the opening project is simply on stage rather than flying in.
  const [launched, setLaunched] = useState(false);
  const [picked, setPicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const sequences = canSequence && !picked && total > 1;

  const launch = (index: number): void => {
    setActiveIndex(index);
    setLaunched(true);
  };

  return {
    activeIndex,
    nextIndex: (activeIndex + 1) % total,
    canSequence,
    sequences,
    running: sequences && !paused && !hovered && !focused,
    launched,
    paused,
    togglePaused: () => setPaused(!paused),
    launch,
    pick: index => {
      launch(index);
      setPicked(true);
    },
    // The rocket of the project on stage has flown; it is seen lifting off only where motion is welcome.
    rocketState: index => {
      if (index !== activeIndex) {
        return 'standing';
      }

      return launched && canSequence ? 'lifting' : 'gone';
    },
    holdHandlers: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setFocused(true),
      onBlur: event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      },
    },
  };
}
