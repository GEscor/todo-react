import React from "react";

import AppHeader from "../app-header";
import NewTask from "../new-task";
import Filter from "../filter";
import CurrentTasks from "../currrent-tasks";
import FinishedTasks from "../finished-tasks";

import "./App.css";

export default class App extends React.Component {
  currentTasks = [
    {
      id: 1,
      name: "купить еды",
      description: "хлеб, масло, молоко, вафли",
      priority: "med",
      endTime: "20:20",
      endDate: ""
    },
    {
      id: 2,
      name: "погулять с собакой",
      description: "",
      priority: "high",
      endTime: "",
      endDate: "2019-07-17"
    },
    {
      id: 3,
      name: "уборка дома",
      description: "помыть полы, протереть пыль, выкинуть мусор",
      priority: "low",
      endTime: "",
      endDate: ""
    },
    {
      id: 4,
      name: "почитать книгу",
      description: "",
      priority: "med",
      endTime: "16:30",
      endDate: "2019-07-25"
    }
  ];
  finishedTasks = [];
  emptyTask = {
    name: "",
    description: "",
    priority: "med",
    endTime: "",
    endDate: ""
  };

  state = {
    currentTime: "",
    currentDate: "",
    newTask: this.emptyTask,
    filter: "all",
    currentTasks: this.currentTasks,
    finishedTasks: this.finishedTasks
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    const newTask = { ...this.state.newTask, ...{ [id]: value } };
    this.setState({ newTask });
  };

  handlePriorityChange = e => {
    const newTask = { ...this.state.newTask, ...{ priority: e.target.value } };
    this.setState({ newTask });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { currentTasks, newTask } = this.state;
    newTask.id = +new Date();
    const taskList = [newTask, ...currentTasks];
    this.setState({ newTask: this.emptyTask, currentTasks: taskList });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    //const filteredList = this.filteredTasks();
    const { newTask, filter, currentTasks, finishedTasks } = this.state;

    return (
      <div className="app">
        <AppHeader />
        <NewTask
          newTask={newTask}
          handleInputChange={this.handleInputChange}
          handlePriorityChange={this.handlePriorityChange}
          handleSubmit={this.handleSubmit}
        />
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <CurrentTasks currentTasks={currentTasks} />
        <FinishedTasks finishedTasks={finishedTasks} />
      </div>
    );
    /*
  currentTasks = localStorage.getItem("taskList")
  ? JSON.parse(localStorage.getItem("taskList"))
  : [];
  
  finishedTasks = [];
  */
    /*
  handleTimerTick = data => {
    const { time, date } = data;
    this.setState({ currentTime: time, currentDate: date });
  };
  

  handleCompleteTask = data => {
    const newList = this.state.tasks.filter(item => {
      return item.id !== data.id;
    });
    data.doneTime = this.state.currentTime;
    data.doneDate = this.state.currentDate;
    const doneTasks = [data, ...this.state.donetasks];
    this.setState({ tasks: newList, donetasks: doneTasks });
  };

  handleModifyTaks = data => {
    const newList = this.state.tasks.filter(item => {
      return item.id !== data.id;
    });
    this.setState({
      id: data.id,
      taskName: data.taskName,
      description: data.description,
      priority: data.priority,
      endTime: data.endTime,
      endDate: data.endDate,
      tasks: newList
    });
  };
  handleDeleteTask = data => {
    const newList = this.state.tasks.filter(item => {
      return item.id !== data.id;
    });
    this.setState({ tasks: newList });
  };

  //Обновляет список задач при фильтрации и сверяет срок выполнения задачи
  filteredTasks = () => {
    localStorage.setItem("taskList", JSON.stringify(this.state.tasks));
    let list = this.state.tasks.map(item => {
      let elem = item;
      if (!item.endDate) {
        elem.failed = false;
        return elem;
      } else {
        const date = Date.parse(item.endDate + " " + item.endTime);
        const curdate = Date.parse(new Date());
        if (date < curdate) {
          elem.failed = true;
          return elem;
        } else {
          elem.failed = false;
          return elem;
        }
      }
    });
    if (this.state.filter === "all") {
      return list;
    } else {
      return list.filter(item => {
        return item.priority === this.state.filter;
      });
    }
  };
*/
    /*
      <div className="app">
        <h1>Список задач</h1>
        <Timer onTimerTick={this.handleTimerTick} />
        <NewTask
          taskName={this.state.taskName}
          description={this.state.description}
          priority={this.state.priority}
          endTime={this.state.endTime}
          endDate={this.state.endDate}
          onNameChange={this.handleNameChange}
          onDescriptionChange={this.handleDescriptionChange}
          onTimeChange={this.handleTimeChange}
          onDateChange={this.handleDateChange}
          onPriorityClick={this.handlePriorityClick}
          onButtonClick={this.handleButtonClick}
        />
        <Filter
          filter={this.state.filter}
          onFilterChange={this.handleFilterSelect}
        />
        <TaskList
          data={filteredList}
          onTaskComplete={this.handleCompleteTask}
          onTaskModify={this.handleModifyTaks}
          onTaskDelete={this.handleDeleteTask}
        />
        <TasksFinished data={this.state.donetasks} />
      </div>
      */
  }
}

/*

//Блок ввода для новой задачи

//Одиночная задача из списка

//Список текущих задач

//Список завершенных задач

// блок выбора филтра отображения задач


//встроенный таймер, взято из учебника по ReactJs
class Timer extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const hrs =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    const mins =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    const time = hrs + ":" + mins;
    const dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    const mm =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const date = dd + "-" + mm + "-" + yyyy;
    this.state = { currentTime: time, currentDate: date, seconds: 0 };
  }
  tick() {
    const today = new Date();
    const hrs =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    const mins =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    const time = hrs + ":" + mins;
    const dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    const mm =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const date = dd + "-" + mm + "-" + yyyy;
    this.setState(prevState => ({
      currentTime: time,
      currentDate: date,
      seconds: prevState.seconds + 1
    }));
    this.props.onTimerTick({ time, date });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="timer">
        <span>{this.state.currentTime}</span>
        <span>{this.state.currentDate}</span>
      </div>
    );
  }
}
*/
