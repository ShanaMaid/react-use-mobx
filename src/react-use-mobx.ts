import { useEffect, useState, useRef } from 'react';
import { observable, autorun } from 'mobx';

/**
 * observable state, when state change, auto setState
 * @param initialState it must be object!
 */
export const useObservable = <T extends Object>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const value = useRef(observable(state));

  useEffect(() => {
    autorun(() => {
      setState(value.current);
    })
  }, [])
  return value.current as T;
};

export { observer } from 'mobx-react';