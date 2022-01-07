import { Link } from 'react-router-dom';

// styles
import styles from './CharacterList.module.css';

export function CharacterList({ character }) {
  return (
    <div className={styles['character-list']}>
      {character.map((cha) => (
        <div key={cha.id} className={styles.card}>
          <img src={cha.image} className={styles.image} width="130" height="130" alt="chapic" />
          <h3>{cha.name}</h3>
          <p style={{ margin: '5px auto' }}>Species: {cha.species}</p>
          <Link>Character Details</Link>
        </div>
      ))}
    </div>
  );
}
