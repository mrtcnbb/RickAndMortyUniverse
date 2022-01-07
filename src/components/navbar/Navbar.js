import { Link } from 'react-router-dom';

// svg
import RickMorty from '../../assets/RickandMorty.svg';

// styles
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link exact to="/">
            <img src={RickMorty} className={styles.image} alt="pic" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
