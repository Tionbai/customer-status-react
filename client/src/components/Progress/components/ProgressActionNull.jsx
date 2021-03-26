import React from 'react';
import { useCustomers } from '../../../contexts/CustomersProvider';
import { pendingIcon } from '../../../contexts/IconsProvider';

const ProgressActionNull = () => {
  const { selectedCustomer } = useCustomers();
  const statusComplete = selectedCustomer.status.toLowerCase() === 'avsluttet';
  return (
    <>
      <svg className="Progress__icon">{pendingIcon}</svg>
      <div className="Progress__action">
        <h3 className="Progress__title">
          {statusComplete
            ? 'Saken din er avsluttet'
            : 'Saken din er til behandling'}
        </h3>
        <p className="Progress__text">
          {statusComplete
            ? 'Takk for samarbeidet!'
            : 'Takk for din tålmodighet mens våre eksperter behandler saken din.'}
        </p>
      </div>
    </>
  );
};

export default ProgressActionNull;
