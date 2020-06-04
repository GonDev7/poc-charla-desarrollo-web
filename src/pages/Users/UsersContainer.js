import React, { useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

import { UsersContext, USERS, LOAD, ERROR, RESET } from './UsersStore';
import Users from './Users';

const UsersContainer = () => {
  const [state, dispatch] = useContext(UsersContext);
  const { load, userList, error } = state;

  // Get user list
  const handleUserList = useCallback(() => {
    dispatch({ type: LOAD, payload: true });
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(({ data: response }) => {
        dispatch({ type: RESET });
        dispatch({
          type: USERS,
          payload: response,
        });
      })
      .catch(({ message: error }) => {
        dispatch({ type: RESET });
        dispatch({ type: ERROR, payload: error });
      });
  }, [dispatch]);

  // ComponentDidMount - Get user list
  useEffect(() => handleUserList(dispatch), [handleUserList, dispatch]);

  return <Users load={load} userList={userList} error={error} />;
};

export default UsersContainer;
