import React, { useState } from "react";
import { observer } from "mobx-react";

import { useTodosStore } from "../../stores";

const SearchPanel = observer(() => {
  const todosStore = useTodosStore();

  const [term, setTerm] = useState(todosStore.term);

  const onSearchChange = (event) => {
    const { value } = event.target;

    setTerm(value);
    todosStore.setTerm(value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search..."
      onChange={onSearchChange}
      value={term}
    />
  );
});

export default SearchPanel;
