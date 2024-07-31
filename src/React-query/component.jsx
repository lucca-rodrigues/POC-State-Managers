import { useCounter } from "./store/counter";
import reactLogo from "../assets/react.svg";

export function Component() {
  const { counter, incrementCounter, decrementCounter } = useCounter();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + React Query</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <button aria-label="Increment value" onClick={() => incrementCounter(1)}>
        Aumentar +
      </button>
      <span>{counter}</span>
      <button aria-label="Decrement value" onClick={() => decrementCounter(1)}>
        Diminuir -
      </button>
    </>
  );
}
