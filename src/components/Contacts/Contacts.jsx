import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import style from './Contacts.module.scss';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <>
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        </>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Contacts;
