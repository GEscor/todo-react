import React from "react";

import Task from "../task";

import "./current-tasks.css";

const CurrentTaks = props => {
  const { currentTasks } = props;

  const renderTasks = currentTasks => {
    let taskTemplate = null;
    if (currentTasks.length) {
      taskTemplate = currentTasks.map(function(item) {
        return (
          <Task
            key={item.id}
            data={item}
            onTaskComplete={props.onTaskComplete}
            onTaskModify={props.onTaskModify}
            onTaskDelete={props.onTaskDelete}
          />
        );
      });
    } else {
      taskTemplate = (
        <li>
          <p>Текущих задач нет</p>
        </li>
      );
    }
    return taskTemplate;
  };

  return (
    <div className="current-tasks">
      <h2>Текущие задачи</h2>
      <ul>{renderTasks(currentTasks)}</ul>
    </div>
  );
};

export default CurrentTaks;
