import React from "react";

import "./filter.css";

const filterButtons = [
  { name: "all", label: "Все" },
  { name: "low", label: "Обычные" },
  { name: "med", label: "Важные" },
  { name: "high", label: "Очень важные" }
];

const Filter = props => {
  const { filter, handleFilterChange } = props;

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const className = `${name} ${isActive ? "active" : ""}`;

    return (
      <button
        key={name}
        type="button"
        onClick={e => {
          handleFilterChange(e);
        }}
        value={name}
        className={className}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="filter">{buttons}</div>
    /*  
    <div className="filter-field">
      <h2>Фильтр</h2>
      <label className="filter all">
        <input
          type="radio"
          name="filter"
          value="all"
          checked={props.filter === "all"}
          onChange={() => props.onFilterChange("all")}
        />
        Все
      </label>
      <label className="filter low">
        <input
          type="radio"
          name="filter"
          value="low"
          checked={props.filter === "low"}
          onChange={() => props.onFilterChange("low")}
        />
        Обычные
      </label>
      <label className="filter med">
        <input
          type="radio"
          name="filter"
          value="med"
          checked={props.filter === "med"}
          onChange={() => props.onFilterChange("med")}
        />
        Важные
      </label>
      <label className="filter high">
        <input
          type="radio"
          name="filter"
          value="high"
          checked={props.filter === "high"}
          onChange={() => props.onFilterChange("high")}
        />
        Очень важные
      </label>
    </div>
    */
  );
};

export default Filter;
