// src/App.tsx
import React from 'react';
import { useAppReducer } from '../redux/store';


function ReducerTutorial() {
  const [state, dispatch] = useAppReducer();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameInput = (document.getElementById('name') as HTMLInputElement).value.trim();
    if (nameInput) {
      dispatch({ type: 'SET_NAME', payload: nameInput });
      (document.getElementById('name') as HTMLInputElement).value = ''; // Clear the input
    }
  };

  return (
    <>
      <h1>Use Reducer</h1>
      <main style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button>{state.count}</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      </main>
      <div>
        <h2>Welcome {state.name === '' ? 'inconnu' : state.name}</h2>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="Mon name"
            placeholder="Enter your name here"
            style={{ padding: '10px' }}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
}

export default ReducerTutorial;