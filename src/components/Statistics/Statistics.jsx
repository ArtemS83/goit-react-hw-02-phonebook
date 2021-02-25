import PropTypes from 'prop-types';
import style from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={style.item}>Good: {good}</p>
      <p className={style.item}>Neutral: {neutral}</p>
      <p className={style.item}>Bad: {bad}</p>
      <p className={style.item}>Total: {total}</p>
      <p className={style.item}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
