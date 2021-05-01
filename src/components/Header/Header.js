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

  uptadeIdundText = () => {
    this.setState((prevState) => {
      return { id: prevState.id + 1, text: "" };
    });
  };

  handleChangeInputValue = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <header className={styles.wrraper}>
        <h1 className={styles.h1}>Todo List in React</h1>
        <form className={styles.form}>
          <input
            type="text"
            name="new Task"
            className={styles.inputNewTask}
            placeholder="Yours new Task"
            onChange={this.handleChangeInputValue}
            value={this.state.text}
          />

          <button
            type="submit"
            className={styles.buttonSubmit}
            onClick={(e) => {
              this.props.addItem(e, this.state);
              this.uptadeIdundText.call(this);
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
