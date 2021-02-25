import PropTypes from 'prop-types';
import style from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
