import { Component } from "./component";
import { CounterProvider } from "./store";
export function ContextAPI() {
  return (
    <CounterProvider>
      <Component />
    </CounterProvider>
  );
}
