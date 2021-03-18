import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import customerData from '../customerData.json';

const CustomersContext = React.createContext();

// Shorthand for using context in other parts of the application.
const useCustomers = () => {
  return useContext(CustomersContext);
};

const CustomersProvider = ({ children }) => {
  const [lastIndexIsTrue, setLastIndexIsTrue] = useState(false);
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(0);

  useEffect(() => {
    const lastIndexIsTrueFn = () => {
      return selectedCustomerIndex === customerData.length - 1;
    };
    setLastIndexIsTrue(lastIndexIsTrueFn);
  }, [selectedCustomerIndex]);

  const value = {
    customers: customerData,
    lastIndexIsTrue,
    lastIndex: customerData.length - 1,
    selectedCustomer: customerData[selectedCustomerIndex],
    selectedCustomerIndex,
    setSelectedCustomerIndex,
  };
  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};

export { useCustomers, CustomersProvider };

CustomersProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
