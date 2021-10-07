// import React from "react";
import s from "./Phonebook.module.css";

function Filter({ value, onChange }) {
  return (
    <label className={s.findLable}>
      Find contacts by name
      <input
        className={s.find}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}

export default Filter;
