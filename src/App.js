import React, { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import AppWithClass from './AppWithClass';
import optionsData from './components/data/options.json';

const App = () => {
  const [options, setOptions] = useState(optionsData);
  const { good, neutral, bad } = options;

  const handelLeaveFeedback = ({ target }) => {
    const { name } = target;
    setOptions(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage;
    if (countTotalFeedback() > 0) {
      positiveFeedbackPercentage = (good * 100) / countTotalFeedback();
    } else {
      positiveFeedbackPercentage = 0;
    }
    if (positiveFeedbackPercentage < 1 && positiveFeedbackPercentage > 0) {
      positiveFeedbackPercentage = parseFloat(
        (Math.round(((good * 100) / countTotalFeedback()) * 100) / 100).toFixed(
          2,
        ),
      );
    } else {
      positiveFeedbackPercentage = Math.round(
        (good * 100) / countTotalFeedback(),
      );
    }

    return positiveFeedbackPercentage;
  };

  return (
    <>
      <Section title="Please leave feedback(hooks)">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handelLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
      <AppWithClass />
    </>
  );
};

export default App;
