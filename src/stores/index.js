import React from "react";
import { useLocalStore } from "mobx-react";

import { createTodosStore } from "../createTodosStore";

const TodosContext = React.createContext();

export const TodosProvider = ({ children }) => {
  const todosStore = useLocalStore(createTodosStore);

  return (
    <TodosContext.Provider value={todosStore}>{children}</TodosContext.Provider>
  );
};

export const useTodosStore = () => {
  const _todosStore = React.useContext(TodosContext);
  if (!_todosStore) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return _todosStore;
};
