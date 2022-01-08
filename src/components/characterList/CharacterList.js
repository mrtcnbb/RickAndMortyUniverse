import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

import { Link } from 'react-router-dom';

// styles
import styles from './CharacterList.module.css';

export function CharacterList({ character }) {
  const { term } = useContext(CharacterContext);

  return (
    <div className={styles['character-list']}>
      {character
        .filter((cha) => {
          if (term === '') {
            return cha;
          } else if (cha.name.toLowerCase().includes(term.toLowerCase())) {
            return cha;
          }
        })
        .map((cha) => (
          <div key={cha.id} className={styles.card}>
            <img src={cha.image} className={styles.image} width="130" height="130" alt="chapic" />
            <h3>{cha.name}</h3>
            <p className={styles.species}>Species: {cha.species}</p>
            <Link to={`/character/${cha.id}`}>Character Details</Link>
          </div>
        ))}
    </div>
  );
}
