import type { BannerProps } from '@/component/ProjectsPageV8/FeaturedBanner/types';
import useMediaQuery from '@/shared/useMediaQuery';

import CompactAttract from './CompactAttract';
import WideAttract from './WideAttract';

// Same split as V8: touch and narrow screens swipe through cards, wider screens get the rotating monitor.
export default function AttractMode(props: BannerProps) {
  const compact = useMediaQuery('(max-width: 899px)');

  return compact ? <CompactAttract {...props} /> : <WideAttract {...props} />;
}
