import reactLogo from "../assets/react.svg";
import { useStore } from "./store";

export function Component() {
  const { counter, incrementCounter, decrementCounter } = useStore();
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux Toolkit</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <button aria-label="Increment value" onClick={() => incrementCounter()}>
        Aumentar +
      </button>
      <span>{counter}</span>
      <button aria-label="Increment value" onClick={() => decrementCounter()}>
        Diminuir -
      </button>
    </>
  );
}
