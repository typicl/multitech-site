import cx from 'classnames';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss';

type Props = {
  icon: IconDefinition;
  image: string;
  title: string;
  description: string;
  alternateColor?: boolean;
  flipped?: boolean;
  alignment?: 'top' | 'bottom';
};

export function SolutionItem({
  icon,
  image,
  title,
  description,
  alternateColor,
  alignment,
  flipped,
}: Props) {
  return (
    <div
      className={cx(styles.solution, {
        [styles.alternateColor]: alternateColor,
        [styles.topAligned]: alignment === 'top',
        [styles.flipped]: flipped,
      })}
    >
      <div className={styles.content}>
        <FontAwesomeIcon icon={icon} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.image}>
        <img src={image} alt="title" />
      </div>
    </div>
  );
}
