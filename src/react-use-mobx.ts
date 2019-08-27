import { useEffect, useState, useRef } from 'react';
import { observable, autorun } from 'mobx';

const useObservable = <T>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const value = useRef(observable(state));

  useEffect(() => {
    autorun(() => {
      setState(value.current);
    })
  }, [])
  return value.current as T;
};

export default useObservable;
export { observer } from 'mobx-react';