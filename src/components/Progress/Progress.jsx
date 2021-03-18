import React from 'react';
import './Progress.scss';
import ProgressAction from './components/ProgressAction';
import { useCustomers } from '../../contexts/CustomersProvider';

const Progress = () => {
  const { selectedCustomer } = useCustomers();
  const customerStatus = selectedCustomer.status;

  return (
    <article className="Progress text">
      <div className="Progress__status">
        <h3 className="Progress__title">Din status</h3>
        <p className="Progress__text">{customerStatus}</p>
      </div>
      <ProgressAction />
    </article>
  );
};

export default Progress;
