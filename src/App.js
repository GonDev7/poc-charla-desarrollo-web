import React from 'react';
import './App.css';

import { Users, UsersProvider } from './pages/Users';

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <Users />
      </UsersProvider>
    </div>
  );
}

export default App;
