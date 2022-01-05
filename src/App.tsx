import React, {HTMLAttributes, useEffect, useState} from 'react';
import './App.css';
import {Button} from 'my_buttons_story/src/Button'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size: 'xl' | 'l' | 's',
}

export function App({size = 'l'}: Props) {
  const [state, setState] = useState(false)
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setState(!state);
      }, 2000);
    }
  });
  return (
    <Button state={state} onClickFn={() => setState(!state)} size={size}/>
  );
}

export default App;
