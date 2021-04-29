import React from "react";
import AppContext from "../context";
import Header from "../components/Header/Header";
import Main from "../components/main/Main";
// import styles from "./App.module.scss";
// let counter = 0;

class App extends React.Component {
  state = {
    arrItem: [],
  };

  addItem = (e, item) => {
    e.preventDefault();
    this.setState((prevState) => ({
      arrItem: [...(prevState.arrItem || []), item],
    }));
  };

  deleteTask = (e, removeId) => {
    this.setState((prevState) => ({
      ...prevState.arrItem,
      arrItem: this.state.arrItem.filter((item) => item.id !== removeId),
    }));
  };

  incrementCounter = () => {
    this.state.arrItem.setState((prevState) => ({
      counter: [...prevState.counter, this.state.arrItem.length],
    }));
  };

  isCompletedTask = (e, completeTaskID) => {
    this.setState(() => ({
      isCompleted: this.state.arrItem.forEach((item) => {
        if (item.id === completeTaskID) {
          item.isCompleted = !item.isCompleted;
        }
      }),
    }));
  };

  render() {
    const myData = []
      .concat(this.state.arrItem)
      .sort((a, b) => (a.isCompleted > b.isCompleted ? 1 : -1));

    const contextElement = {
      state: this.state,
      addItem: this.addItem,
      isCompletedTask: this.isCompletedTask,
      deleteTask: this.deleteTask,
      showComplete: this.showComplete,
      incrementCounter: this.incrementCounter,
      showAllTask: this.showAllTask,
      clearComplete: this.clearComplete,
    };
    return (
      <AppContext.Provider value={contextElement}>
        <Header
          addItem={this.addItem}
          incementCounter={this.incrementCounter}
        />
        <Main task={myData} nameClass={myData.length} />
      </AppContext.Provider>
    );
  }
}

export default App;
