import { useState } from 'react';
import type { FocusEvent } from 'react';

import type { SheetTimer } from './TitleBlock';

type HoldHandlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: (event: FocusEvent<HTMLElement>) => void;
};

type AutoTurn = {
  // The countdown the top sheet shows, while the stack still turns on its own.
  timer: SheetTimer | undefined;
  paused: boolean;
  togglePause: () => void;
  // Spread on the region that holds the countdown while the pointer or keyboard focus is inside it.
  hold: HoldHandlers;
};

// The automatic turning's countdown: it holds still under the pointer or keyboard focus and while a sheet
// is still flying off, and the Pause button stops it until pressed again. `onEnd` turns to the next sheet.
export default function useAutoTurn(enabled: boolean, settled: boolean, onEnd: () => void): AutoTurn {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const onBlur = (event: FocusEvent<HTMLElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocused(false);
    }
  };

  return {
    timer: enabled && settled ? { running: !paused && !hovered && !focused, onEnd } : undefined,
    paused,
    togglePause: () => setPaused(!paused),
    hold: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setFocused(true),
      onBlur,
    },
  };
}
