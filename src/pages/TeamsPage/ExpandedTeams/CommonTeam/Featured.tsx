import type { Team } from '../../../../data/teams';
import useWebsite from '../../../../shared/useWebsite';
import FeatureTextRow from './featureTextRow';
import { ExpandedTeamsJSON } from './JSONFiles/ExpandedTeamsJSON';

type FeaturedProps = {
  team: Team;
};

export default function Featured({ team }: FeaturedProps) {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;
  const featured = ExpandedTeamsJSON[team].featured;

  if (!featured) {
    return null;
  }

  return (
    <>
      <div className={mobile ? 'paragraph-title-mobile' : 'paragraph-title'}>{featured.header}</div>
      {featured.items.map((value, index) => (
        <div
          key={index}
          className={`role-desc ${mobile ? 'paragraph-text-mobile' : 'paragraph-text'}`}
          style={{ marginBottom: '4vh' }}
        >
          <FeatureTextRow
            description={value.description}
            picture={value.image}
            reverse={value.invert}
            button={value.button}
          />
        </div>
      ))}
    </>
  );
}
