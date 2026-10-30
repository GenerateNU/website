import { useState } from 'react';
import type { KeyboardEvent } from 'react';

import './style.css';
import { featuredProjects } from '@/data/projectData';

import CarouselControls from './CarouselControls';
import CarouselDots from './CarouselDots';
import CarouselSlide from './CarouselSlide';
import useCarouselDrag from './useCarouselDrag';
import useCarouselScroll from './useCarouselScroll';

type FeaturedCarouselProps = {
  onOpen: (slug: string) => void;
  // True while something covers the carousel (the project sheet), so it holds still underneath.
  suspended: boolean;
};

export default function FeaturedCarousel({ onOpen, suspended }: FeaturedCarouselProps) {
  const [paused, setPaused] = useState(false);

  const { trackRef, activeIndex, reducedMotion, handleScroll, goTo, settleDrag } = useCarouselScroll(
    featuredProjects.length
  );

  const { isDragging, ...dragHandlers } = useCarouselDrag(trackRef, settleDrag);

  const rotating = !paused && !reducedMotion;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  };

  return (
    <section
      className={`pp2-carousel ${rotating ? 'is-rotating' : ''} ${suspended ? 'is-suspended' : ''}`}
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <div className="pp2-carousel-header">
        <h2 className="pp2-carousel-heading">Featured</h2>
        <CarouselControls
          activeIndex={activeIndex}
          total={featuredProjects.length}
          rotating={rotating}
          canRotate={!reducedMotion}
          onToggleRotation={() => setPaused(!paused)}
          onGoTo={goTo}
        />
      </div>
      {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions -- scrollable region needs focus, arrow keys and mouse dragging. */}
      <div
        ref={trackRef}
        className={`pp2-carousel-track ${isDragging ? 'is-dragging' : ''}`}
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- scrollable region needs keyboard focus.
        tabIndex={0}
        aria-label="Featured project slides"
        // Screen readers announce slide changes only when the user drives them, not on every auto-rotation.
        aria-live={rotating ? 'off' : 'polite'}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        {...dragHandlers}
      >
        {featuredProjects.map((project, index) => (
          <CarouselSlide
            key={project.slug}
            project={project}
            position={index + 1}
            total={featuredProjects.length}
            active={index === activeIndex}
            playVideo={index === activeIndex && !reducedMotion && !suspended}
            onOpen={onOpen}
          />
        ))}
      </div>
      <CarouselDots projects={featuredProjects} activeIndex={activeIndex} rotating={rotating} onSelect={goTo} />
    </section>
  );
}
