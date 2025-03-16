import { Button } from '../components/button';
import { ROUTES } from '../constants/routes';
import mike from '../assets/mike.jpg';
import chris from '../assets/chris.jpg';
import octavian from '../assets/octavian.jpg';
import styles from './page.module.scss';

export function About() {
  return (
    <div>
      <main className={styles.page}>
        <section className={styles.section}>
          <h2>About us</h2>
          <h3>Guaranteed quality. Expert customer service.</h3>
          <p>
            Multitech's mission is on a simple one: make technology an "asset"
            for your business and not a "problem". We want to be your technology
            partner.
          </p>
          <div className={styles.buttonWrapper}>
            <Button href={ROUTES.CONTACT}>Contact us</Button>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.center}>
            <h2>Our team</h2>
            <h3>Industry Leaders</h3>
          </div>
          <p>
            One of the industry-leading office equipment dealers in the
            Louisiana and Mississippi Gulf Coast area for more than 25 years.
            Our management team has nearly 50 years of combined experience in
            the office equipment industry.
          </p>
          <div className={styles.team}>
            <div>
              <img src={mike.src} />
              <h2>Mike Danna</h2>
              <p>Vice President</p>
            </div>
            <div>
              <img src={chris.src} />
              <h2>Christ Desoto</h2>
              <p>Vice President of Sales</p>
            </div>
            <div>
              <img src={octavian.src} />
              <h2>Octavian Pasa</h2>
              <p>Sales Representative</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About
