// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import FeedbackButton from './FeedbackButton';
import style from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonArray = Object.keys(options);
  return (
    <div className={style.container}>
      {buttonArray.map(button => (
        <FeedbackButton
          key={shortid.generate()}
          buttonName={button}
          onFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
