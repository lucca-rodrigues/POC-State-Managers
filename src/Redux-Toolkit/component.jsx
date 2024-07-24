import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "./store/counter.store";
import reactLogo from "../assets/react.svg";

export function Component() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Aumentar +
      </button>
      <span className="count-number">{count}</span>
      <button aria-label="Increment value" onClick={() => dispatch(decrement())}>
        Diminuir -
      </button>
    </>
  );
}
