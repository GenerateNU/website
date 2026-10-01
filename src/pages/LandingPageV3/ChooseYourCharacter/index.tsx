import React, { useEffect, useState } from 'react';

import ArcadeMachine from '../../../assets/images/landingpage-v3/DynamicArcadeMachine';
import ArcadeText from '../../../assets/images/landingpage-v3/DynamicArcadeText';
import { urlFor } from '../../../client';
import { useSanity } from '../../../services/useSanity';
import type { Branch, Director, SanityBranch, SanityDirector } from '../types';
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
      {directors &&
        directors.map((director, index) => (
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
  if (!directors[coloredIndex]?.name) {
    return <></>;
  }

  const currentTeam = directorToTeam.get(directors[coloredIndex].name);

  return (
    <>
      {directors && directorToTeam && directors[coloredIndex] && (
        <ArcadeMachine
          color={currentTeam?.color.hex}
          text={currentTeam?.teamAbbreviation}
          imgUrl={directors[coloredIndex].image}
        />
      )}
    </>
  );
};

export default function ChooseYourCharacter() {
  const directorsQuery = `*[_type == "director"] | order(zIndex)`;
  const branchQuery = `*[_type == "team"] {team,team_abbreviation,color,zIndex} | order(zIndex)`;

  const directors = useSanity<SanityDirector, Director>(directorsQuery, {}, data =>
    data
      ? data.map(director => ({
          ...director,
          color: director.color.hex,
          image: urlFor(director.image).url(),
        }))
      : []
  );

  const branches = useSanity<SanityBranch, Branch>(branchQuery, {}, data =>
    data
      ? data.map(branch => ({
          ...branch,
          team: branch.team.toUpperCase(),
          teamAbbreviation: (branch.team_abbreviation || '').toUpperCase(),
        }))
      : []
  );

  useEffect(() => {
    if (branches.length === 0 || directors.length === 0) {
      return;
    } else {
      const newDirectorMapping = new Map(
        directors.map(director => {
          const branch = branches.find(branch => branch.team.toUpperCase() === director.team.toUpperCase());

          return [director.name, branch];
        })
      );

      setDirectorToTeam(newDirectorMapping);
    }
  }, [branches, directors]);

  const [coloredIndex, setSelected] = useState(0);
  let [directorToTeam, setDirectorToTeam] = useState(new Map<string, Branch | undefined>());

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
              {directors && directors[coloredIndex] && (
                <ArcadeText id="text-arcade" color={directors[coloredIndex].color} director={directors[coloredIndex]} />
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
