import styles from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
   return (
      <header className={styles.header}>
           <Link className={styles.logo} to="/">Prime Flix</Link>
           <Link className={styles.favoritos} to="/favoritos">Meus Filmes</Link>
      </header>
   );
};
