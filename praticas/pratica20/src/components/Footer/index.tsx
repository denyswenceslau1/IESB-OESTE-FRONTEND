import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='https://francescolanciani.com/technique/the-pomodoro-technique/' target='_blank' rel='noreferrer'>
        Entenda como funciona a técnica pomodoro
      </a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} — Feito com 💜
      </a>
    </footer>
  );
}
