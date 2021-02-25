import PropTypes from 'prop-types';
import style from './Notification.module.scss';

const Notification = ({ message }) => {
  return <p className={style.title}>{message}</p>;
};

Notification.defaultProps = {
  message: 'No feedback',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
