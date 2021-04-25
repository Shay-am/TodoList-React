import React from "react";
import styles from "./ButtonFilter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const ButtonFilter = ({ ...props }) => (
  <button
    type="button"
    key={props.name}
    name={props.name}
    className={styles.buttonFilter}
    aria-pressed={props.isPressed}
    onClick={() => props.setFilter(props.name)}
  >
    <p>{props.name}</p>
    {checkIcon}
  </button>
);

export default ButtonFilter;
