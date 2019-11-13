import React from "react";

const FinishedTasks = props => {
  const renderTasks = props => {
    const { finishedTasks } = props;
    let taskTemplate = null;
    if (finishedTasks.length) {
      taskTemplate = finishedTasks.map(function(item) {
        return (
          <li className="task passed" key={item.id}>
            <span style={{ width: 110 }}></span>
            <span className="name">{item.taskName}</span>
            <span className="end-time">{item.doneTime}</span>
            <span className="end-date">{item.doneDate}</span>
          </li>
        );
      });
    } else {
      taskTemplate = (
        <li className="empty">
          <p>Завершенных задач нет</p>
        </li>
      );
    }
    return taskTemplate;
  };
  return (
    <div className="task-list">
      <h2>Завершенные задачи</h2>
      <ul>{renderTasks(props)}</ul>
    </div>
  );
};

export default FinishedTasks;
