import { useRef } from 'react';

import { useExperience } from '@/component/ProjectsPageV12/experience/experience';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import Scene from './Scene';
import Stage from './Stage';
import useActiveScene from './useActiveScene';

type StoryProps = {
  projects: Project[];
  basePath: string;
};

// The featured projects as scenes. Wide screens: the stories scroll down the left while the monitor holds
// still on the right. Narrow screens: the monitor pins to the top and the stories scroll up under it.
export default function Story({ projects, basePath }: StoryProps) {
  const { motionAllowed, sfx } = useExperience();
  const stacked = useMediaQuery('(max-width: 899px)');
  const stageRef = useRef<HTMLDivElement>(null);
  const { sceneRefs, active } = useActiveScene();

  // Brings a scene's story into view; when the monitor is pinned on top, the story lands just below it.
  const goTo = (index: number): void => {
    const scene = sceneRefs.current[index];

    if (!scene) {
      return;
    }

    sfx('select');

    const covered = stacked ? (stageRef.current?.offsetHeight ?? 0) : 0;

    window.scrollTo({
      top: scene.getBoundingClientRect().top + window.scrollY - covered,
      behavior: motionAllowed ? 'smooth' : 'instant',
    });
  };

  return (
    <section className="pp13-story" aria-labelledby="pp12-attract-heading">
      <Stage ref={stageRef} projects={projects} active={active} basePath={basePath} onPick={goTo} />
      <ol className="pp13-scenes">
        {projects.map((project, index) => (
          <Scene
            key={project.slug}
            ref={element => {
              sceneRefs.current[index] = element;
            }}
            project={project}
            index={index}
            total={projects.length}
            basePath={basePath}
          />
        ))}
      </ol>
    </section>
  );
}
