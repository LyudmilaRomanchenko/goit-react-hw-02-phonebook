import ContactElement from "./ContactElement";
import s from "./Phonebook.module.css";
// import PropTypes from "prop-types";

function ContactList({ contacts, deleteContact }) {
  console.log(contacts);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactElement name={name} number={number} />
          <button
            className={s.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.prototype = {
//   friends: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
//   }),
// };

export default ContactList;
