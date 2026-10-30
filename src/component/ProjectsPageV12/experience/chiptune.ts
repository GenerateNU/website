export type Sfx = 'move' | 'select' | 'start' | 'toggle';

// Each sound is a few square-wave notes: [frequency in Hz, length in seconds].
const tunes: Record<Sfx, [number, number][]> = {
  move: [[880, 0.035]],
  select: [
    [660, 0.05],
    [990, 0.07],
  ],
  // The classic coin pickup.
  start: [
    [988, 0.07],
    [1319, 0.2],
  ],
  toggle: [
    [523, 0.05],
    [784, 0.08],
  ],
};

// Quiet: square waves are harsh, and these only confirm what the visitor just did.
const VOLUME = 0.035;

// One context for the whole visit; it outlives the page, so the coin sound finishes after a project opens.
let context: AudioContext | null = null;

export const playSfx = (name: Sfx): void => {
  context ??= new AudioContext();
  // Browsers suspend audio until a click or key press; every sound here follows one.
  void context.resume().catch(() => undefined);

  let at = context.currentTime;

  for (const [frequency, length] of tunes[name]) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'square';
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(VOLUME, at);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + length);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(at);
    oscillator.stop(at + length);
    at += length;
  }
};
