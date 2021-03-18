import React from 'react';
import PropTypes from 'prop-types';

const DashboardItem = ({ handleClick, className, icon, text }) => {
  return (
    <div role="presentation" className={className} onClick={handleClick}>
      <svg>{icon}</svg>
      <p>{text}</p>
    </div>
  );
};

export default DashboardItem;

DashboardItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
