import React from "react";
import styles from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../../context";

const buttonComplete = <FontAwesomeIcon icon={faCheck} />;
const buttonDelete = <FontAwesomeIcon icon={faTimesCircle} />;

const Task = ({ isCompleted, id, arrayLength, text }) => {
  let btnClass = isCompleted ? styles.isCompleted : styles.completed;

  return (
    <AppContext.Consumer>
      {(context) => (
        <section
          className={isCompleted ? styles.taskComplete : styles.wrapper}
          id={id}
        >
          <div className={styles.counter}>{arrayLength + 1}</div>
          <article className={styles.newTask} id={id}>
            {text}
          </article>
          <button
            className={btnClass}
            aria-pressed={id}
            id={id}
            onClick={(e) => {
              context.isCompletedTask(e, id);
            }}
          >
            {buttonComplete}
          </button>

          <button
            id={id}
            className={styles.deleted}
            onClick={(e) => context.deleteTask(e, id)}
          >
            {buttonDelete}
          </button>
        </section>
      )}
    </AppContext.Consumer>
  );
};

export default Task;
