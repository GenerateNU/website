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
        <a className="footer-link-text disabled-footer-text" href={link}>
          {name}
        </a>
      ) : isCurrentPage ? (
        <b>
          <a href={link} className="footer-link-bold">
            {name} {''}
          </a>
        </b>
      ) : (
        <a className="footer-link-text" href={link}>
          {name}
        </a>
      )}
    </div>
  );
};

export default FooterLink;
