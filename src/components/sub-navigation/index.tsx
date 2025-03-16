import styles from './index.module.scss';

export function SubNavigation() {
  const links = [
    {
      label: 'Customer Login',
      url: 'https://eaweb.multitechofficemachines.com/einfo/Gateway/Login?ReturnUrl=%2feinfo',
    },
    {
      label: 'New Customer Supply Orders',
      url: 'https://multitechofficemachines.isconnect.com/isc/Welcome.do',
    },
  ];
  return (
    <nav className={styles.subNavigation}>
      <div>
        {links.map(l => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
