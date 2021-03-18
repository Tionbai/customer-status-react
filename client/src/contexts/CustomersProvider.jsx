import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const CustomersContext = React.createContext();

// Shorthand for using context in other parts of the application.
const useCustomers = () => {
  return useContext(CustomersContext);
};

const CustomersProvider = ({ children }) => {
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(0);
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch('/data', {
          method: 'GET',
        });
        const data = await res.json();
        return setCustomersData(data);
      } catch (err) {
        return err;
      }
    };

    fetchCustomers();
  }, []);

  const value = {
    customers: customersData,
    lastIndex: customersData.length - 1,
    selectedCustomer: customersData[selectedCustomerIndex],
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
