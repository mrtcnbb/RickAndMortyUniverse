import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';

export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if (context === undefined) {
    throw new Error('useTheme() must be used inside a ThemeProvider');
  }

  return context;
};
