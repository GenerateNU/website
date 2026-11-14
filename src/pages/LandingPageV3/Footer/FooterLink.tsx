import { Link } from 'react-router';

import type { FooterPage } from './pages';

type FooterLinkProps = {
  page: FooterPage;
  currentPage: string;
};

const FooterLink = ({ page, currentPage }: FooterLinkProps) => {
  const { name, link, disabled } = page;
  const isCurrentPage = currentPage === link;

  return (
    <div className="footer-padding">
      {disabled ? (
        <Link className="footer-link-text disabled-footer-text" to={link}>
          {name}
        </Link>
      ) : isCurrentPage ? (
        <b>
          <Link to={link} className="footer-link-bold">
            {name} {''}
          </Link>
        </b>
      ) : (
        <Link className="footer-link-text" to={link}>
          {name}
        </Link>
      )}
    </div>
  );
};

export default FooterLink;
