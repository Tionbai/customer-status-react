import React from 'react';
import './Dashboard.scss';
import { useCustomers } from '../../contexts/CustomersProvider';
import {
  arrowBack,
  arrowForward,
  arrowPlay,
} from '../../contexts/IconsProvider';

const Dashboard = () => {
  const {
    customers,
    selectedCustomerIndex,
    setSelectedCustomerIndex,
    lastIndex,
  } = useCustomers();

  const handleClick = (e, index) => {
    e.preventDefault();

    setSelectedCustomerIndex(index);
  };

  const handleClickPlay = (e) => {
    e.preventDefault();
    setSelectedCustomerIndex(0);

    for (let i = 0; i < customers.length; i += 1) {
      setTimeout(() => {
        setSelectedCustomerIndex(i);
      }, 2000 * i);
    }
  };

  return (
    <section className="Dashboard text">
      <div className="Dashboard__container large">
        <div
          role="presentation"
          className={`Dashboard__action ${
            selectedCustomerIndex === 0 ? 'disabled' : ''
          }`}
          onClick={
            selectedCustomerIndex > 0
              ? (e) => handleClick(e, selectedCustomerIndex - 1)
              : null
          }
        >
          <svg>{arrowBack}</svg>
          <p>Previous customer</p>
        </div>
        <div
          role="presentation"
          className={`Dashboard__action ${
            selectedCustomerIndex === lastIndex ? 'disabled' : ''
          }`}
          onClick={
            selectedCustomerIndex < lastIndex
              ? (e) => handleClick(e, selectedCustomerIndex + 1)
              : null
          }
        >
          <svg>{arrowForward}</svg>
          <p>Next customer</p>
        </div>
      </div>
      <div className="Dashboard__container small">
        <div
          role="presentation"
          className="Dashboard__action"
          onClick={handleClickPlay}
        >
          <svg>{arrowPlay}</svg>
          <p>Play loop</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
