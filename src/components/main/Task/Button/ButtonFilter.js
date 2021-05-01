import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonFilter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const ButtonFilter = ({ name, isPressed, setFilter }) => (
  <button
    type="button"
    key={name}
    name={name}
    className={styles.buttonFilter}
    aria-pressed={isPressed}
    onClick={() => setFilter(name)}
  >
    <p>{name}</p>
    {checkIcon}
  </button>
);

ButtonFilter.propsTypes = {
  name: PropTypes.string,
  isPressed: PropTypes.func,
  setFilter: PropTypes.func,
};

export default ButtonFilter;
