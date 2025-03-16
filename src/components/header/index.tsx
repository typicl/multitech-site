import { Navigation } from '../navigation';
import { SubNavigation } from '../sub-navigation';
import styles from './index.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <SubNavigation />
    </header>
  );
}
