import React from 'react';
import { chevronRight } from '../../../contexts/IconsProvider';
import { useCustomers } from '../../../contexts/CustomersProvider';

const ProgressAction = () => {
  const { selectedCustomer } = useCustomers();

  const customerAction = selectedCustomer.kundeaksjonspunkt;
  return customerAction ? (
    <div className="Progress__action">
      <h3 className="Progress__title">Handling gjenstår</h3>
      <p className="Progress__text--action">
        {customerAction}
        <svg className="icon">{chevronRight}</svg>
      </p>
    </div>
  ) : (
    <div className="Progress__action">
      <h3 className="Progress__title">Saken din er til behandling</h3>
      <p className="Progress__text">
        Takk for din tålmodighet mens våre eksperter behandler saken din.
      </p>
    </div>
  );
};

export default ProgressAction;
