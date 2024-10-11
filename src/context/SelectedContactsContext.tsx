import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Contact } from '../models/Contact';
import {SelectedContactsState, ActionType} from '../models/SelectedContactsState'
import { updateSelectedContacts } from '../updates/SelectedContactsUpdate';

// Define the initial state
const initialState: SelectedContactsState = {
  selectedContacts: [],
};

// Create the context
const SelectedContactsContext = createContext<{
  state: SelectedContactsState;
  dispatch: React.Dispatch<ActionType>;
} | undefined>(undefined);

// Create a provider component
export const SelectedContactsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(updateSelectedContacts, initialState);

  return (
    <SelectedContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectedContactsContext.Provider>
  );
};

// Create a custom hook for using the context
export const useSelectedContacts = () => {
  const context = useContext(SelectedContactsContext);
  if (!context) {
    throw new Error('useSelectedContacts must be used within a SelectedContactsProvider');
  }
  return context;
};