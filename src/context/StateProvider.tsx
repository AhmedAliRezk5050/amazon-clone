import { createContext, FC, useContext, useReducer, Dispatch } from 'react';
import { initialState } from './reducer';
import { Action, State } from './types';

const contextInitialValue: [State, Dispatch<Action>] = [initialState, () => {}];
const StateContext = createContext(contextInitialValue);

interface StateProviderProps {
  reducer(state: State, action: Action): State;
  initialState: State;
}

const StateProvider: FC<StateProviderProps> = ({
  children,
  reducer,
  initialState,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;

export const useStateValue = () => useContext(StateContext);
