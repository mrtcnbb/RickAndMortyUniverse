import Searchbar from '../searchbar/Searchbar';
import { Link } from 'react-router-dom';

// styles
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">
            <h1 className={styles.title}>Rick and Morty</h1>
          </Link>
        </li>
        <li>
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
}
