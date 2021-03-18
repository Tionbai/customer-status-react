import React from 'react';
import './App.scss';
import { CustomersProvider } from './contexts/CustomersProvider';
import Dashboard from './components/Dashboard/Dashboard';
import Progress from './components/Progress/Progress';

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
