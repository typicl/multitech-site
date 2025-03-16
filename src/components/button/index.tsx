import cx from 'classnames';
import styles from './index.module.scss';
import { ROUTES } from '../../constants/routes';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode
  href: (typeof ROUTES)[keyof typeof ROUTES];
  useOutline?: boolean;
  useOutlineDark?: boolean;
};

export function Button({
  children,
  href,
  useOutline,
  useOutlineDark,
}: Props) {
  return (
    <a
      href={href}
      className={cx(styles.button, {
        [styles.outline]: useOutline,
        [styles.outlineDark]: useOutlineDark,
      })}
    >
      {children}
    </a>
  );
}

