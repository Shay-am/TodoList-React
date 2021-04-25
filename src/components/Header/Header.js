import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";

const checkIcon = <FontAwesomeIcon icon={faShareSquare} />;

class Header extends React.Component {
  state = {
    text: "",
    isCompleted: false,
    id: 0,
  };

  newTimeId = () => {
    this.setState((prevState) => {
      return { id: prevState.id + 1 };
    });
  };

  handleChangeInputValue = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  handleTwoFn = () => {};

  render() {
    return (
      <header className={styles.wrraper}>
        <h1 className={styles.h1}>Todo List in React</h1>
        <form className={styles.form}>
          <label>
            <input
              type="text"
              className={styles.inputNewTask}
              placeholder="Yours new Task"
              onChange={this.handleChangeInputValue}
              autoComplete="off"
            />
          </label>
          <button
            type="submit"
            className={styles.buttonSubmit}
            onClick={(e) => {
              this.props.addItem(e, this.state);
              this.newTimeId.call(this);
              // this.props.incementCounter.call(this);
            }}
          >
            {checkIcon}
          </button>
        </form>
      </header>
    );
  }
}

export default Header;
