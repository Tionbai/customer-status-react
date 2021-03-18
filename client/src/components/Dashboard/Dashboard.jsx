import React from 'react';
import './Dashboard.scss';
import { useCustomers } from '../../contexts/CustomersProvider';
import {
  arrowBack,
  arrowForward,
  arrowPlay,
} from '../../contexts/IconsProvider';
import DashboardItem from './DashboardItem';

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
        <DashboardItem
          className={`Dashboard__action ${
            selectedCustomerIndex === 0 ? 'disabled' : ''
          }`}
          icon={arrowBack}
          text="Previous customer"
          handleClick={(e) => handleClick(e, selectedCustomerIndex - 1)}
        />
        <DashboardItem
          className={`Dashboard__action ${
            selectedCustomerIndex === lastIndex ? 'disabled' : ''
          }`}
          icon={arrowForward}
          text="Next customer"
          handleClick={(e) => handleClick(e, selectedCustomerIndex + 1)}
        />
      </div>
      <div className="Dashboard__container small">
        <DashboardItem
          className="Dashboard__action"
          icon={arrowPlay}
          text="Play loop"
          handleClick={handleClickPlay}
        />
      </div>
    </section>
  );
};

export default Dashboard;
