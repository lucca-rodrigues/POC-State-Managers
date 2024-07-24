import { Provider } from "react-redux";
import store from "./store";
import { Component } from "./component";
export function ReduxToolkit() {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}
