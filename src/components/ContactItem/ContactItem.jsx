import PropTypes from 'prop-types';
import { MdPhoneAndroid } from 'react-icons/md';
import style from './ContactItem.module.scss';

const ContactItem = ({ name, number, id, onDelete }) => {
  const handleDelete = () => onDelete(id);
  return (
    <li className={style.item}>
      <MdPhoneAndroid />
      <span className={style.name}>{name}:</span>
      <span className={style.number}>{number}</span>
      <button
        className={style.buttonDelete}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
