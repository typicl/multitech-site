import cx from 'classnames';
import { Button } from '../components/button';
import { TabsSection } from '../components/tabs-section';
import { ROUTES } from '../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons/faFaceSmile';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons/faHeadphones';
import solutions from '../assets/solutions.jpg';
import assement from '../assets/print-assessment.jpg';
import styles from './page.module.scss';

export function Home() {
  const tabs = [
    {
      label: 'Just Add Paper',
      description:
        'We employ a quality assurance and control process that guarantees high quality products. Our service provides more than just a cartridge, too. Any qualified printer using cartridges purchased through us is guaranteed with a free repair and maintenance package. All you have to do is add your paper.',
    },
    {
      label: 'Cost Per Page',
      description:
        'Our MultiPrint MPS Cost per Page (CPP) Agreement is a pay for what you print per month, to include, support, maintenance, all parts, labor and MultiMax brand cartridges.',
    },
    {
      label: 'Pay One Price',
      description:
        'Our MultiPrint MPS Pay One Price (POP) Agreement is a fixed monthly price per month, to include, support, maintenance, all parts, labor and MultiMax brand cartridges. This program helps you budget for the year with no surprise additional cost.',
    },
  ];

  return (
    <div>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              All of your office equipment management handled in one place
              &mdash; none of the hassle.
            </h2>
            <p className={styles.paragraph}>
              As the largest independent office equipment dealer in the Gulf
              Coast area of Louisiana and Mississippi, we specialize in third
              party printer, copier, fax, and multi-function device maintenance.
            </p>
            <div className={styles.buttonWrapper}>
              <Button href={ROUTES.CONTACT}>Contact us</Button>
              <Button href={ROUTES.SOLUTIONS} useOutline>
                Learn about our solutions
              </Button>
            </div>
          </div>
        </section>

        <section className={cx(styles.multiPrintSolutions, styles.section)}>
          <div className={styles.content}>
            <h2>Multi-print Solutions</h2>
            <h3>How we can help</h3>
            <p>
              By streamlining the flow of information through all of your
              business processes, our services can help increase overall
              productivity. Our mission is a simple one: Helping you make your
              office technology an asset for your business.
            </p>
            <TabsSection tabs={tabs} />
            <Button href={ROUTES.SOLUTIONS}>
              Learn more about our solutions
            </Button>
          </div>
          <img src={solutions.src} />
        </section>

        <section className={cx(styles.section, styles.outline)}>
          <div className={styles.center}>
            <h2>What our customers love:</h2>
            <h3>Heading callout for recycling</h3>
          </div>
          <div>
            <p>
              Brief description of offer and benefits. Why customers choose this
              option and what it does for them.
            </p>
          </div>
          <div className={styles.center}>
            <Button href={ROUTES.SOLUTIONS} useOutlineDark>
              See all of our services
            </Button>
          </div>
        </section>

        <section className={cx(styles.qualityAssessments, styles.section)}>
          <div className={styles.content}>
            <h2>Quality assessments</h2>
            <h3>Increase your Productivity</h3>
            <p>
              Understanding how your business currently manages its print
              devices is the first step towards increased productivity. Our goal
              is to provide you and your employees with the right business tools
              allowing us to give your business maximum flexibility at the best
              possible price.
            </p>
          </div>
          <img src={assement.src} alt="" />
        </section>

        <section
          className={cx(
            styles.commitment,
            styles.section,
            styles.alt,
            styles.center
          )}
        >
          <h2>Our commitment</h2>
          <h3>Working with us</h3>
          <div>
            <div>
              <FontAwesomeIcon icon={faPrint} />
              <h4>Simplified Printing</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faAward} />
              <h4>Guaranteed Quality</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faFaceSmile} />
              <h4>Free Maintenance</h4>
            </div>
            <div>
              <FontAwesomeIcon icon={faHeadphones} />
              <h4>Full Support</h4>
            </div>
          </div>
          <Button href={ROUTES.ABOUT} useOutlineDark>
            About our company
          </Button>
        </section>

        <section className={cx(styles.printers, styles.section)}>
          <div className={styles.center}>
            <h2>Printers and Multifunction devices</h2>
            <h3>Our machines and capabilities</h3>
          </div>
          <div className={styles.half}>
            <div>
              <h5>Multifunction Devices</h5>
              <p>
                Understanding how your business currently manages its print
                devices is the first step towards increased productivity. Our
                goal is to provide you and your employees with the right
                business tools allowing us to give your business maximum
                flexibility at the best possible price.
              </p>
            </div>
            <div>
              <h5>Desktop Printers</h5>
              <p>
                We can help you determine not only what kind of printing device
                you need, but also which printer will work best for your
                business to ensure you are always getting the most reliable and
                affordable machine available. By working with you to evaluate
                the answers to these questions, we can provide printing
                solutions that are optimized for your functional needs, volume
                and budget. Call us today to start your free personalized
                assessment.
              </p>
            </div>
          </div>
          <div className={styles.half}>
            <div>
              <h5>New &amp; Refurbished Devices</h5>
              <p>
                When you partner with Multitech, you won't only be receiving the
                best service, you will also be receiving the best devices too!
                We offer a large range of new and refurbished HP printers and
                MFPs that are certain to fulfill your needs.
              </p>
            </div>
            <div>
              <h5>Assessments &amp; Technology</h5>
              <p>
                Keeping your office running smooth is no challenge with our line
                of HP printers and MFPs. Easily access, share, and print
                documents using integrated technology such as HP ePrint and
                Google Cloud Print services. We can help you identify challenges
                and opportunities in managing your print environment and provide
                you with practical methods to improve efficiency and
                cost-effectiveness with our free remote monitoring service.
              </p>
            </div>
          </div>
          <div className={cx(styles.center, styles.buttonWrapper)}>
            <Button href={ROUTES.CONTACT}>Contact us for an assessment</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home
