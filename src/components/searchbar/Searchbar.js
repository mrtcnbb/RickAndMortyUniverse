import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

// styles
import styles from './Searchbar.module.css';

export default function Searchbar() {
  const { searchTerm } = useContext(CharacterContext);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    searchTerm(filter);
  }, [searchTerm, filter]);

  return (
    <div className={styles.searchbar}>
      <label htmlFor="search" className={styles.label}>
        Search:{' '}
      </label>
      <input
        type="text"
        id="search"
        className={styles.input}
        required
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
    </div>
  );
}
