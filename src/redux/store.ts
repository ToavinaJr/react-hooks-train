import { useReducer } from 'react';
import { State, Action } from '../types';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, name: state.name };

    case 'DECREMENT':
      return { count: state.count - 1, name: state.name };

    case 'SET_NAME':
      return { count: state.count, name: action.payload || state.name };

    default:
      return state;
  }
};

export const initialState: State = {
  count: 0,
  name: 'inconnu'
};

export const useAppReducer = () => {
  return useReducer(reducer, initialState);
};