import React from "react";
import Dashboard from "./views/dashboard/Dashboard";
import { Provider } from "react-redux";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
