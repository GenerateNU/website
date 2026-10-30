import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';

// Parks the claw over the prize under the cursor, and works out how far it has to drop to reach it.
// Written straight to CSS variables and a data attribute on the glass, and measured again whenever the machine changes size.
export default function useClawAim(
  glassRef: RefObject<HTMLDivElement | null>,
  prizeRefs: RefObject<(HTMLAnchorElement | null)[]>,
  cursor: number
): void {
  useLayoutEffect(() => {
    const glass = glassRef.current;

    if (glass === null) {
      return undefined;
    }

    const aim = (): void => {
      const prize = prizeRefs.current[cursor];

      if (!prize) {
        return;
      }

      // The claw is positioned inside the glass's border, so measure from there.
      const glassBox = glass.getBoundingClientRect();
      const prizeBox = prize.getBoundingClientRect();
      const left = glassBox.left + glass.clientLeft;
      const top = glassBox.top + glass.clientTop;

      const x = prizeBox.left + prizeBox.width / 2 - left;

      glass.style.setProperty('--pp10-claw-x', `${x}px`);
      // Lets the "Got it!" sign sit on the other side of the glass from the claw.
      glass.dataset.clawSide = x > glass.clientWidth / 2 ? 'right' : 'left';
      glass.style.setProperty('--pp10-claw-reach', `${prizeBox.top - top + prizeBox.height * 0.3}px`);
    };

    aim();

    const observer = new ResizeObserver(aim);

    observer.observe(glass);

    return (): void => observer.disconnect();
  }, [glassRef, prizeRefs, cursor]);
}
