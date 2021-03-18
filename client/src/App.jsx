import React from 'react';
import './App.scss';
import { useCustomers } from './contexts/CustomersProvider';
import Dashboard from './components/Dashboard/Dashboard';
import Progress from './components/Progress/Progress';

const App = () => {
  const { customers } = useCustomers();

  return !customers || !customers.length > 0 ? (
    <main className="App loading">
      <div className="loading-bar">Loading...</div>
    </main>
  ) : (
    <main className="App">
      <Dashboard />
      <Progress />
    </main>
  );
};

export default App;
