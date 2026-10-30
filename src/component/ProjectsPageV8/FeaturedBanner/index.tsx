import './style.css';
import useMediaQuery from '@/shared/useMediaQuery';

import CompactBanner from './CompactBanner';
import type { BannerProps } from './types';
import WideBanner from './WideBanner';

// Phones, a single Surface Duo screen and portrait tablets get a swipeable version built for touch;
// wider screens (laptops, landscape tablets, a spanned Duo) get the billboard with tabs.
export default function FeaturedBanner(props: BannerProps) {
  const compact = useMediaQuery('(max-width: 899px)');

  return compact ? <CompactBanner {...props} /> : <WideBanner {...props} />;
}
