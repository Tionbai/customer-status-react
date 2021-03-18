import React from 'react';
import './App.css';
import Progress from './components/Progress/Progress';
import Dashboard from './components/Dashboard/Dashboard';
import { CustomersProvider } from './contexts/CustomersProvider';

const App = () => {
  return (
    <CustomersProvider>
      <main className="App">
        <Dashboard />
        <Progress />
      </main>
    </CustomersProvider>
  );
};

export default App;
