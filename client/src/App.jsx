import React from 'react';
import './App.scss';
import { useCustomers } from './contexts/CustomersProvider';
import Dashboard from './components/Dashboard/Dashboard';
import Progress from './components/Progress/Progress';

const App = () => {
  const { customers } = useCustomers();

  return !customers.length ? (
    <main>Loading...</main>
  ) : (
    <main className="App">
      <Dashboard />
      <Progress />
    </main>
  );
};

export default App;
