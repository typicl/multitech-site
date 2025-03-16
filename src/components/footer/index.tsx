import { ROUTES } from '../../constants/routes';
import { Button } from '../button';
import styles from './index.module.scss';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h2>Contact us</h2>
        <h3>Start saving time and money. Quality service guaranteed.</h3>
        <Button href={ROUTES.CONTACT}>Contact us</Button>
      </div>
      <div className={styles.info}>
        <div>
          <h4>Contact</h4>
          <p>1-800-641-5291</p>
          <p>sales@multitechofficemachines.com</p>
        </div>
        <div>
          <h4>Slidell, LA</h4>
          <p>37363 Brownsvillage Road</p>
          <p>Slidell, LA 70460</p>
        </div>
        <div>
          <h4>Lafayette, LA</h4>
          <p>860 Ridge Road</p>
          <p>Duscon, LA 70529</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>&copy; {year} | Multitech office machines</span>
      </div>
    </footer>
  );
}
