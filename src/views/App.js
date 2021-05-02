import React from "react";
import AppContext from "../context";
import Header from "../components/Header/Header";
import Main from "../components/main/Main";

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
      addItem: this.addItem,
      isCompletedTask: this.isCompletedTask,
      deleteTask: this.deleteTask,
    };
    return (
      <AppContext.Provider value={contextElement}>
        <Header addItem={this.addItem} />
        <Main task={myData} />
      </AppContext.Provider>
    );
  }
}

export default App;
