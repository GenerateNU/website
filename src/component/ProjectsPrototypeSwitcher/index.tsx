import { Link, useLocation } from 'react-router-dom';

import './style.css';

type Version = { id: string; label: string; to: string; prefix: string };

const versions: Version[] = [
  { id: 'v1', label: 'V1', to: '/projects', prefix: '/projects' },
  { id: 'v2', label: 'V2', to: '/projects-v2', prefix: '/projects-v2' },
  { id: 'v3', label: 'V3', to: '/projects-v3', prefix: '/projects-v3' },
  { id: 'v4', label: 'V4', to: '/projects-v4', prefix: '/projects-v4' },
  { id: 'v5', label: 'V5', to: '/projects-v5', prefix: '/projects-v5' },
  { id: 'v6', label: 'V6', to: '/projects-v6', prefix: '/projects-v6' },
  { id: 'v7', label: 'V7', to: '/projects-v7', prefix: '/projects-v7' },
  { id: 'v8', label: 'V8', to: '/projects-v8', prefix: '/projects-v8' },
  { id: 'v9', label: 'V9', to: '/projects-v9', prefix: '/projects-v9' },
  { id: 'v10', label: 'V10', to: '/projects-v10', prefix: '/projects-v10' },
  { id: 'v11', label: 'V11', to: '/projects-v11', prefix: '/projects-v11' },
  { id: 'v12', label: 'V12', to: '/projects-v12', prefix: '/projects-v12' },
  { id: 'v13', label: 'V13', to: '/projects-v13', prefix: '/projects-v13' },
  { id: 'v14', label: 'V14', to: '/projects-v14', prefix: '/projects-v14' },
  { id: 'v15', label: 'V15', to: '/projects-v15', prefix: '/projects-v15' },
];

const isCurrent = (pathname: string, { to, prefix }: Version): boolean =>
  pathname === to || pathname.startsWith(`${prefix}/`);

// Prototype-only: links between the Projects page versions; remove once one version is chosen.
export default function ProjectsPrototypeSwitcher() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Projects prototypes" className="pps-group">
      <Link to="/projects" className="text-decoration-none">
        <span className="font-size text-uppercase menu-hover">Projects</span>
      </Link>
      {versions.map(version => {
        const current = isCurrent(pathname, version);

        return (
          <Link
            key={version.id}
            to={version.to}
            className={`pps-link${current ? ' pps-link-active' : ''}`}
            aria-current={current ? 'page' : undefined}
          >
            {version.label}
          </Link>
        );
      })}
    </nav>
  );
}
