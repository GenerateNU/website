import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';

type ProjectLinkProps = Omit<LinkProps, 'to' | 'state'> & {
  basePath: string;
  slug: string;
};

// Opens a project's own page, flagged so its back link returns to this list at the same scroll position.
export default function ProjectLink({ basePath, slug, ...props }: ProjectLinkProps) {
  return <Link to={`${basePath}/${slug}`} state={FROM_PROJECT_LIST} {...props} />;
}
