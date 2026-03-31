import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' title='Início'>
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href='#' title='Histórico'>
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href='#' title='Configurações'>
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} href='#' title='Tema'>
        <SunIcon />
      </a>
    </nav>
  );
}
