import React from "react";
import styles from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../../context";

const buttonComplete = <FontAwesomeIcon icon={faCheck} />;
const buttonDelete = <FontAwesomeIcon icon={faTimesCircle} />;
let btnClass = styles.completed ? styles.completed : styles.isCompleted;

const Task = (props) => (
  <AppContext.Consumer>
    {(context) => (
      <section className={styles.wrapper} id={props.id}>
        <div className={styles.counter}>1</div>
        <article className={styles.newTask} id={props.id}>
          {props.text}
        </article>
        <button
          className={btnClass}
          id={props.id}
          onClick={(e) => context.isCompletedTask(e, props.id)}
        >
          {buttonComplete}
        </button>

        <button
          id={props.id}
          className={styles.deleted}
          onClick={(e) => context.deleteTask(e, props.id)}
        >
          {buttonDelete}
        </button>
      </section>
    )}
  </AppContext.Consumer>
);

export default Task;
