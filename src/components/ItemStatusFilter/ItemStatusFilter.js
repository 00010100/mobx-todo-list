import React, { useState } from "react";
import { observer } from "mobx-react";
import classNames from "classnames";

import { useTodosStore } from "../../stores";

const btns = [
  {
    name: "all",
    label: "All",
  },
  {
    name: "active",
    label: "Active",
  },
  {
    name: "done",
    label: "Done",
  },
];

const ItemStatusFilter = observer(() => {
  const todosStore = useTodosStore();

  const [filter, setFilter] = useState(todosStore.filter);

  const onFilterChange = (value) => {
    setFilter(value);
    todosStore.setFilter(value);
  };

  const buttons = btns.map(({ name, label }) => (
    <button
      type="button"
      className={classNames(
        `btn ${filter === name ? "btn-info" : "btn-outline-secondary"}`
      )}
      key={name}
      onClick={() => onFilterChange(name)}
    >
      {label}
    </button>
  ));

  return <div className="btn-group">{buttons}</div>;
});

export default ItemStatusFilter;
