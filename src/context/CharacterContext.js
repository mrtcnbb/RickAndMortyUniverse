import { createContext, useCallback, useReducer } from 'react';

export const CharacterContext = createContext();

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CHARACTER':
      return { ...state, character: action.payload };
    default:
      return state;
  }
};

export function CharacterProvider({ children }) {
  const [state, dispatch] = useReducer(characterReducer, {
    character: null,
  });

  const getCharacter = useCallback((data) => {
    dispatch({ type: 'GET_CHARACTER', payload: data });
  }, []);

  return <CharacterContext.Provider value={{ ...state, getCharacter }}>{children}</CharacterContext.Provider>;
}
