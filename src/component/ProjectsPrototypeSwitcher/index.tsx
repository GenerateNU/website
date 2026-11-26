import { Link, useLocation } from 'react-router-dom';

import './style.css';

type Version = { id: string; label: string; to: string; prefix: string };

const versions: Version[] = [
  { id: 'v2', label: 'V2', to: '/projects-v2', prefix: '/projects-v2' },
  { id: 'v4', label: 'V4', to: '/projects-v4', prefix: '/projects-v4' },
  { id: 'v8', label: 'V8', to: '/projects-v8', prefix: '/projects-v8' },
  { id: 'v9', label: 'V9', to: '/projects-v9', prefix: '/projects-v9' },
  { id: 'v10', label: 'V10', to: '/projects-v10', prefix: '/projects-v10' },
  { id: 'v12', label: 'V12', to: '/projects-v12', prefix: '/projects-v12' },
  { id: 'v13', label: 'V13', to: '/projects-v13', prefix: '/projects-v13' },
  { id: 'v14', label: 'V14', to: '/projects-v14', prefix: '/projects-v14' },
  { id: 'v15', label: 'V15', to: '/projects-v15', prefix: '/projects-v15' },
  { id: 'v16', label: 'V16', to: '/projects-v16', prefix: '/projects-v16' },
  { id: 'v17', label: 'V17', to: '/projects-v17', prefix: '/projects-v17' },
  { id: 'v18', label: 'V18', to: '/projects-v18', prefix: '/projects-v18' },
  { id: 'v19', label: 'V19', to: '/projects-v19', prefix: '/projects-v19' },
  { id: 'v20', label: 'V20', to: '/projects-v20', prefix: '/projects-v20' },
  { id: 'v21', label: 'V21', to: '/projects-v21', prefix: '/projects-v21' },
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
