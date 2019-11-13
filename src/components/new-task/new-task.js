import React from "react";

import "./new-task.css";

const NewTask = props => {
  const { name, description, priority, endTime, endDate } = props.newTask;
  const { handleInputChange, handlePriorityChange, handleSubmit } = props;

  const priorityButtons = [
    { name: "low", label: "Обычная" },
    { name: "med", label: "Важная" },
    { name: "high", label: "Очень важная" }
  ];

  const buttons = priorityButtons.map(({ name, label }) => {
    const isActive = name === priority;
    const className = `new-task-priority ${name} + ${isActive ? "active" : ""}`;

    return (
      <button
        key={name}
        type="button"
        className={className}
        value={name}
        onClick={e => handlePriorityChange(e)}
      >
        {label}
      </button>
    );
  });

  return (
    <form className="new-task" onSubmit={e => handleSubmit(e)}>
      <h2>Новая задача</h2>
      <input
        id="name"
        className={`${priority}`}
        onChange={e => handleInputChange(e)}
        type="text"
        placeholder="Название задачи"
        autoComplete="off"
        value={name}
      />
      <input
        id="description"
        className={`new-task-description ${priority}`}
        onChange={e => handleInputChange(e)}
        placeholder="Описание задачи"
        autoComplete="off"
        value={description}
      />
      <label className={`new-task-time ${priority}`}>
        Время окончания
        <input
          id="endTime"
          className="new-task-clock"
          onChange={e => handleInputChange(e)}
          type="time"
          value={endTime}
        />
      </label>
      <label className={`new-task-date  ${priority}`}>
        Дата окончания
        <input
          id="endDate"
          className="new-task-calendar"
          onChange={e => handleInputChange(e)}
          type="date"
          min="2019-07-17"
          max="2100-12-31"
          value={endDate}
        />
      </label>
      <div className="new-task-priority-bar">{buttons}</div>
      <button
        className="new-task-submit"
        type="submit"
        disabled={name.trim() ? false : true}
      >
        Добавить
      </button>
    </form>
  );
};
export default NewTask;
