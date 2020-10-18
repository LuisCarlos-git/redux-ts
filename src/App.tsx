import React from "react";
import { Provider } from "react-redux";

import Repository from "./components/respository";
import store from "./store";

console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <Repository />
    </Provider>
  );
}

export default App;
