import React from 'react';
import './Progress.scss';
import ProgressAction from './components/ProgressAction';
import ProgressActionNull from './components/ProgressActionNull';
import { useCustomers } from '../../contexts/CustomersProvider';

const Progress = () => {
  const { selectedCustomer } = useCustomers();
  const customerStatus = selectedCustomer.status;
  const customerAction = selectedCustomer.kundeaksjonspunkt;

  return (
    <article className="Progress text">
      <div className="Progress__status">
        <h3 className="Progress__title">Din status</h3>
        <p className="Progress__text">{customerStatus}</p>
      </div>
      {customerAction ? (
        <ProgressAction customerAction={customerAction} />
      ) : (
        <ProgressActionNull />
      )}
    </article>
  );
};

export default Progress;
