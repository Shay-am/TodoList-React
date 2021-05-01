import React from "react";
import styles from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../../context";

const buttonComplete = <FontAwesomeIcon icon={faCheck} />;
const buttonDelete = <FontAwesomeIcon icon={faTimesCircle} />;

const Task = (props) => {
  let btnClass = props.isCompleted ? styles.isCompleted : styles.completed;

  return (
    <AppContext.Consumer>
      {(context) => (
        <section
          className={props.isCompleted ? styles.taskComplete : styles.wrapper}
          id={props.id}
        >
          <div className={styles.counter}>{props.arrayLength + 1}</div>
          <article className={styles.newTask} id={props.id}>
            {props.text}
          </article>
          <button
            className={btnClass}
            aria-pressed={props.id}
            id={props.id}
            onClick={(e) => {
              context.isCompletedTask(e, props.id);
            }}
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
};

export default Task;
