import React from 'react';
import PropTypes from 'prop-types';
import { chevronRight, feedbackIcon } from '../../../contexts/IconsProvider';

const ProgressAction = ({ customerAction }) => {
  return (
    <>
      <svg className="Progress__icon">{feedbackIcon}</svg>
      <div className="Progress__action">
        <h3 className="Progress__title">Handling gjenstår</h3>
        <p className="Progress__text--action">
          {customerAction}
          <svg className="icon">{chevronRight}</svg>
        </p>
      </div>
    </>
  );
};

export default ProgressAction;

ProgressAction.propTypes = {
  customerAction: PropTypes.string,
};

ProgressAction.defaultProps = {
  customerAction: PropTypes.string,
};
