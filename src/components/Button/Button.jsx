import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ title, type }) => {
  return (
    <button className={style.button} type={type}>
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: 'Button submit',
  type: 'submit',
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
