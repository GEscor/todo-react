import React from "react";

import "./task.css";

export default class Task extends React.Component {
  state = {
    visible: false
  };
  handleTaskClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  /*
  handleDoneClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
    const {
      id,
      taskName,
      description,
      priority,
      endTime,
      endDate
    } = this.props.data;
    this.props.onTaskComplete({
      id,
      taskName,
      description,
      priority,
      endTime,
      endDate
    });
  };
  handleModifyClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
    const {
      id,
      taskName,
      description,
      priority,
      endTime,
      endDate
    } = this.props.data;
    this.props.onTaskModify({
      id,
      taskName,
      description,
      priority,
      endTime,
      endDate
    });
  };
  handleDelClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
    const {
      id,
      taskName,
      description,
      priority,
      endTime,
      endDate
    } = this.props.data;
    this.props.onTaskDelete({
      id,
      taskName,
      description,
      priority,
      endTime,
      endDate
    });
  };
  */
  render() {
    const {
      name,
      description,
      priority,
      endTime,
      endDate,
      failed
    } = this.props.data;
    const ddmmyyyy = endDate
      ? endDate[8] +
        endDate[9] +
        "-" +
        endDate[5] +
        endDate[6] +
        "-" +
        endDate[0] +
        endDate[1] +
        endDate[2] +
        endDate[3]
      : "----------";
    const { visible } = this.state;
    return (
      <li
        className={failed ? "task failed" : "task " + priority}
        onClick={this.handleTaskClick}
        title="Нажмите на задачу чтобы увидеть полное описание"
      >
        <span className="task-end-time">{endTime ? endTime : "--:--"}</span>
        <span className="task-end-date">{ddmmyyyy}</span>
        <span className="task-name">{name}</span>

        <button
          className="done"
          onClick={this.handleDoneClick}
          disabled={failed}
        >
          Готово
        </button>

        {visible && (
          <React.Fragment>
            <span className="task-description">
              {description ? description : "Нет описания"}
            </span>
            <button className="modify" onClick={this.handleModifyClick}>
              Редактировать
            </button>
            <button className="delete" onClick={this.handleDelClick}>
              Удалить
            </button>
          </React.Fragment>
        )}
      </li>
    );
  }
}
