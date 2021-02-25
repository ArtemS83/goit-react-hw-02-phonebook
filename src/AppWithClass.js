import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import optionsData from './components/data/options.json';

class AppWithClass extends Component {
  state = optionsData;

  handelLeaveFeedback = ({ target }) => {
    const { name } = target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    let positiveFeedbackPercentage;
    if (countTotalFeedback > 0) {
      positiveFeedbackPercentage = (good * 100) / countTotalFeedback;
    } else {
      positiveFeedbackPercentage = 0;
    }
    if (positiveFeedbackPercentage < 1 && positiveFeedbackPercentage > 0) {
      positiveFeedbackPercentage = parseFloat(
        (Math.round(((good * 100) / countTotalFeedback) * 100) / 100).toFixed(
          2,
        ),
      );
    } else {
      positiveFeedbackPercentage = Math.round(
        (good * 100) / countTotalFeedback,
      );
    }

    return positiveFeedbackPercentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div style={{ backgroundColor: 'rgb(209, 201, 201)' }}>
        <Section title="Please leave feedback(class)">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handelLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}

export default AppWithClass;
