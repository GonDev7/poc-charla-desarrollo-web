import React from 'react';

import Header from '../../components/header/Header';
import Table from '../../components/table/Table';

const Users = ({ userList }) => {
  return (
    <div>
      <Header />
      <Table users={userList} />
    </div>
  );
};

export default Users;
