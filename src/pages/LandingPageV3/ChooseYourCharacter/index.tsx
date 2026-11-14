import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import ArcadeMachine from '@/assets/images/landingpage-v3/DynamicArcadeMachine';
import ArcadeText from '@/assets/images/landingpage-v3/DynamicArcadeText';
import { branchesOptions, directorsOptions } from '@/sanity/options';
import type { Branch, Director } from '@/sanity/options';

import Mascot from './Mascot';

type MascotRadioButtonProps = {
  color: string;
  index: number;
  isFullOpacity: boolean;
  handleMouseEnter: (index: number) => void;
};

type DirectorsListProps = {
  directors: Director[];
  coloredIndex: number;
  handleSelect: (index: number) => void;
};

type ArcadeMachineWrapperProps = {
  directors: Director[];
  directorToTeam: Map<string, Branch | undefined>;
  coloredIndex: number;
};

const MascotRadioButton = ({ color, index, isFullOpacity, handleMouseEnter }: MascotRadioButtonProps) => {
  return (
    <div className={`mascot-button mascot-button-${index}`} onMouseEnter={() => handleMouseEnter(index)}>
      <Mascot
        color={color}
        className="colored-mascot"
        style={{
          opacity: isFullOpacity ? 1 : 0.3,
        }}
      />
    </div>
  );
};

const DirectorsList = ({ directors, coloredIndex, handleSelect }: DirectorsListProps) => {
  return (
    <div className="mascot-row">
      {directors.map((director, index) => (
        <MascotRadioButton
          key={director.team}
          index={index}
          color={director.color}
          isFullOpacity={index === coloredIndex}
          handleMouseEnter={handleSelect}
        />
      ))}
    </div>
  );
};

const ArcadeMachineWrapper = ({ directors, directorToTeam, coloredIndex }: ArcadeMachineWrapperProps) => {
  const director = directors[coloredIndex];

  if (!director?.name) {
    return <></>;
  }

  const currentTeam = directorToTeam.get(director.name);

  return <ArcadeMachine color={currentTeam?.color} text={currentTeam?.teamAbbreviation} imgUrl={director.image} />;
};

export default function ChooseYourCharacter() {
  const { data: directors = [] } = useQuery(directorsOptions());
  const { data: branches = [] } = useQuery(branchesOptions());

  // Warm the cache with every director image (already sized for the arcade screen) so hovering is instant.
  useEffect(() => {
    for (const director of directors) {
      new Image().src = director.image;
    }
  }, [directors]);

  const [coloredIndex, setSelected] = useState(0);

  const directorToTeam = new Map(
    directors.map(director => {
      const branch = branches.find(candidate => candidate.team.toUpperCase() === director.team.toUpperCase());

      return [director.name, branch];
    })
  );

  const selectedDirector = directors[coloredIndex];

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="bg-row" id="directors">
      <div id="choose-container">
        <h2 className="white-header-text" id="choose-text">
          Choose Your Character
        </h2>
        <div id="choose-grid">
          <div id="choose-flex-wrapper">
            <div id="text-mascots">
              <DirectorsList coloredIndex={coloredIndex} directors={directors} handleSelect={handleSelect} />
              {selectedDirector && (
                <ArcadeText id="text-arcade" color={selectedDirector.color} director={selectedDirector} />
              )}
            </div>
            <ArcadeMachineWrapper coloredIndex={coloredIndex} directors={directors} directorToTeam={directorToTeam} />
          </div>
        </div>
        <div id="rainbow-trim" />
      </div>
    </div>
  );
}
