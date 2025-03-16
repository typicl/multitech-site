import styles from './index.module.scss';
import { ROUTES } from '../../constants/routes';
import logo from '../../assets/multitech-logo.svg'

export function Navigation() {
  const links = [
    { label: 'Solutions (MPS)', url: ROUTES.SOLUTIONS },
    { label: 'About', url: ROUTES.ABOUT },
    { label: 'Contact', url: ROUTES.CONTACT },
  ];
  return (
    <nav className={styles.navigation}>
      <div>
        <a className={styles.logo} href={ROUTES.HOME}>
          <img src={logo.src} />
        </a>
        <div>
          {links.map(l => (
            <a key={l.label} href={l.url}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
