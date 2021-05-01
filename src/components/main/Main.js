import React from "react";
import Task from "./Task/Task";
import styles from "./Main.module.scss";
import ButtonFilter from "./Task/Button/ButtonFilter";

const FILTER_MAP = {
  "Show All": () => true,
  "Show Active": (task) => !task.isCompleted,
  "Show Completed": (task) => task.isCompleted,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

class Main extends React.Component {
  state = {
    filter: "Show All",
  };
  setFilter = (e, name) => {
    this.setState(() => ({
      filter: name,
    }));
  };

  render() {
    const { task } = this.props;
    const { filter } = this.state;

    const filterList = FILTER_NAMES.map((name) => (
      <ButtonFilter
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={(e) => this.setFilter(e, name)}
      />
    ));

    return (
      <main className={styles.wrapper}>
        {task.length === 0 && (
          <div>
            <p className={styles.notTodo}>you do not have tasks yet. Add 👍</p>
          </div>
        )}
        {this.props.task.filter(FILTER_MAP[filter]).map((item, index) => (
          <Task key={item.id} {...item} arrayLength={index} />
        ))}
        <footer className={styles.filter}>{filterList}</footer>
      </main>
    );
  }
}

export default Main;
