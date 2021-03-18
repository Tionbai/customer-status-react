import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import customerData from '../customerData.json';

const CustomersContext = React.createContext();

// Shorthand for using context in other parts of the application.
const useCustomers = () => {
  return useContext(CustomersContext);
};

const CustomersProvider = ({ children }) => {
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(0);

  const value = {
    customers: customerData,
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
