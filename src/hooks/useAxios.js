import { useEffect, useState } from 'react';

import axios from 'axios';
const initialState = { data: null, isPending: false, error: null };
export const useAxios = (url) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let isMounted = false;
    const getData = async () => {
      setState((prevState) => ({ ...prevState, isPending: true }));

      try {
        const res = await axios(url);
        setState((prevState) => ({ ...prevState, isPending: false, data: res.data.results, error: null }));
      } catch (err) {
        console.log('hata: ', err.message);
        setState((prevState) => ({ ...prevState, isPending: false, data: null, error: err.message }));
      }
    };

    if (!isMounted && !state.data) {
      getData();
      isMounted = true;
    }

    return () => (isMounted = true);
  }, [url, state.data]);

  return state;
};
