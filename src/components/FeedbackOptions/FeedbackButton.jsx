import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackButton.module.scss';

const FeedbackButton = ({ buttonName, onFeedback }) => (
  <button
    className={style.button}
    type="button"
    name={buttonName}
    onClick={onFeedback}
  >
    {buttonName}
  </button>
);

FeedbackButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackButton;
