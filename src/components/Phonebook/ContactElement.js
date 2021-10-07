import s from "./Phonebook.module.css";
import PropTypes from "prop-types";

function ContactElement({ name, number }) {
  return (
    <p>
      <span className={s.name}>{name}</span>:
      <span className={s.number}>{number}</span>
    </p>
  );
}

ContactElement.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

PropTypes.checkPropTypes(ContactElement);

export default ContactElement;
