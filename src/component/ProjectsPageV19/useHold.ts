import { useState } from 'react';
import type { FocusEvent } from 'react';

type Hold = {
  // True while the pointer rests on the area or keyboard focus is inside it.
  held: boolean;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: (event: FocusEvent<HTMLElement>) => void;
  };
};

// Whatever the visitor is pointing at or tabbing through holds still until they move away.
export default function useHold(): Hold {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const onBlur = (event: FocusEvent<HTMLElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocused(false);
    }
  };

  return {
    held: hovered || focused,
    handlers: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setFocused(true),
      onBlur,
    },
  };
}
