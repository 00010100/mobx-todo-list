import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import { TodosProvider } from "./stores";

render(
  <TodosProvider>
    <App />
  </TodosProvider>,
  document.getElementById("root")
);
