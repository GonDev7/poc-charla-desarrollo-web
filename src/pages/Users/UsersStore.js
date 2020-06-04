import React, { createContext, useReducer } from 'react';

// Creating context state
export const UsersContext = createContext();

// Defining initial state
const initialState = {
  load: false,
  userList: [],
  error: '',
};

// Defining action types
export const USERS = 'users_data';
export const LOAD = 'users_load';
export const ERROR = 'users_error';
export const RESET = 'users_reset';

// Defining action reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS:
      return { ...state, userList: action.payload };

    case LOAD:
      return { ...state, load: action.payload };

    case ERROR:
      return { ...state, error: action.payload };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

// Defining state provider
const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { Provider } = UsersContext;
  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export default UsersProvider;
