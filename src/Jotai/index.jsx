import { Provider } from "jotai";
import { Component } from "./component";
import { store } from "./store";
export function Jotai() {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}
