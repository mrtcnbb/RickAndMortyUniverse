import { useAxios } from '../../hooks/useAxios';
import { CharacterList } from '../../components/characterList/CharacterList';
import { CharacterContext } from '../../context/CharacterContext';

// styles
import styles from './Home.module.css';
import { useContext, useEffect } from 'react';

export default function Home() {
  const url = 'https://rickandmortyapi.com/api/character';

  const { data, error, isPending } = useAxios(url);

  const { character, getCharacter } = useContext(CharacterContext);

  useEffect(() => {
    getCharacter(data);
  }, [data, getCharacter]);

  return (
    <div className={styles.home}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {character && (
        <>
          <h1 className={styles.title}>Rick and Morty Characters</h1>
          <CharacterList character={character} />
        </>
      )}
    </div>
  );
}
