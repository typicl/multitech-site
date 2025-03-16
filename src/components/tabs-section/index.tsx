import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

type Props = { tabs: { label: string; description: string }[] };

export function TabsSection({ tabs }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleTabClick(index: number) {
    return function() {
      setActiveIndex(index);
    };
  }

  return (
    <div className={styles.tabsSection}>
      <div className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            className={cx({ [styles.active]: activeIndex === i })}
            key={t.label}
            onClick={handleTabClick(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p>{tabs[activeIndex].description}</p>
    </div>
  );
}
