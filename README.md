# React Use Mobx [![version](https://img.shields.io/npm/v/react-use-mobx.svg)](https://www.npmjs.com/package/react-use-mobx) [![minzipped size](https://img.shields.io/bundlephobia/minzip/react-use-mobx.svg)](https://www.npmjs.com/package/react-use-mobx) [![downloads](https://img.shields.io/npm/dt/react-use-mobx.svg)](https://www.npmjs.com/package/react-use-mobx) 

`useObservable` is a React Hook that help you use mobx and mobx-react.

`useObservable` use help update data automatically insteadof `setState`!

## Install

* `npm install mobx mobx-react react-use-mobx` or
* `yarn add mobx mobx-react react-use-mobx`

## Example
[Online Demo](https://stackblitz.com/edit/react-tupq9h)
```javascript
import React, { useState } from 'react';
import { useObservable, observer } from 'react-use-mobx';
import { render } from 'react-dom';

const App = observer(() => {
  const [ count1, setCount ] = useState({a: 1});
  /**
   * initialState must be Object!!!!!!
   */
  const count2 = useObservable({a: 1});
  return (
    <div>
    <h2>useState</h2>
    <button onClick={() => setCount({a: count1.a + 1})}>count: {count1.a}</button>
    <h2>react-use-mobx</h2>
    <button onClick={() => count2.a++}>count: {count2.a}</button>
    </div>
  );
});

render(<App />, document.getElementById('root'));
```