import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useCharacterAxios } from '../../hooks/useCharacterAxios';

// styles
import styles from './Character.module.css';
const dead = '\u00D7';
const alive = '\u2713';

export default function Character() {
  const history = useHistory();
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const { data: char, isPending, error } = useCharacterAxios(url);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [error, history]);

  console.log(char);

  return (
    <div className={styles.character}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {char && (
        <div className={styles.card}>
          <div className={styles.image}>
            <img className={styles.pic} src={char.image} alt="pic" />
          </div>
          <div className={styles.details}>
            <p>
              <strong>Name: </strong>
              {char.name}
            </p>
            <p>
              <strong>Species: </strong>
              {char.species}
            </p>
            <p>
              <strong>Gender: </strong>
              {char.gender}
            </p>
            <p>
              <strong>Location: </strong>
              {char.location.name}
            </p>
            <p>
              <strong>Status: </strong>
              {char.status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
