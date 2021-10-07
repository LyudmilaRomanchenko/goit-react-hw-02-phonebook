import s from "./Phonebook.module.css";

function ContactElement({ name, number }) {
  return (
    <p>
      <span className={s.name}>{name}</span>:
      <span className={s.number}>{number}</span>
    </p>
  );
}

export default ContactElement;
