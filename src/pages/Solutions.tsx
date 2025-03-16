import { Button } from '../components/button';
import { ROUTES } from '../constants/routes';
import styles from './page.module.scss';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi';
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { SolutionItem } from '../components/solution';
import printAssessment from '../assets/fleet-optimization.jpg';
import fleetOptimization from '../assets/extra-fleet-optimization.jpg';
import remoteMonitoring from '../assets/remote-monitoring.jpg';
import justInTimeSupplies from '../assets/just-in-time-supplies.jpg';
import consolidatedInvoice from '../assets/consolidated-invoicing.jpg';
import ongoingFleetOptimization from '../assets/ongoing-fleet-optimization.jpg';

export function Solutions() {
  return (
    <div>
      <main className={styles.page}>
        <section className={styles.section}>
          <h2>Managed print solutions</h2>
          <h3>
            Increase your document output. Lower your total operating cost.
          </h3>
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
            <h2>Our solution</h2>
            <h3>See how we can help</h3>
          </div>
          <p>
            We'll help you analyze your entire print fleet operation, keeping
            your efficiency up, and most importantly &mdash; your costs down.
          </p>
        </section>
        <div className={styles.solutions}>
          <section className={styles.section}>
            <SolutionItem
              icon={faThumbsUp}
              image={printAssessment.src}
              title="Print Assessment & Recommendation"
              description="Your entire print fleet operation will be analyzed using industry proven methodology. Replacements will be OEM-agnostic and recommendations will be based on your environment to maximize productivity and decrease output costs."
            />
            <SolutionItem
              icon={faPrint}
              image={fleetOptimization.src}
              title="Initial Fleet Optimization"
              description="Hardware and supplies will be installed or redployed to consolidate under-utilized devices, maximize productivity and lower operating costs."
              alternateColor
              alignment="top"
            />
          </section>
          <section className={styles.section}>
            <SolutionItem
              icon={faWifi}
              image={remoteMonitoring.src}
              title="Remote Monitoring & Management"
              description="Devices will be automatically monitored for consumable usage, service alerts, and life cycle asset management. This frees up internal IT resources to focus on other business needs."
              flipped
            />
            <SolutionItem
              icon={faTruck}
              image={justInTimeSupplies.src}
              title='"Just in Time" Supplies & Service'
              description="Based on remote monitoring, supplies and service is automatically dispatched to your location as needed. As a result, productivity and employee satisfaction increases and downtime decreases!"
              alternateColor
              alignment="top"
              flipped
            />
          </section>
          <section className={styles.section}>
            <SolutionItem
              icon={faFileInvoice}
              image={consolidatedInvoice.src}
              title="Consolidated Invoice"
              description="Manage your print budget with one consolidated invoice based on per-page costs to remove unexpected expenses."
            />
            <SolutionItem
              icon={faChartLine}
              image={ongoingFleetOptimization.src}
              title="Ongoing Fleet Optimization"
              description="Continuous fleet monitoring will uncover additional cost-saving opportunities. Optimized services include usage tracking and strategic recommendations to ensure ongoing improvements to your fleet."
              alternateColor
              alignment="top"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Solutions
