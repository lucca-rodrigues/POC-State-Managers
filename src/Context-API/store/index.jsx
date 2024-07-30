/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  function updateCounter(value = 1) {
    setCounter((prev) => prev + value);
  }
  return (
    <CounterContext.Provider
      value={{
        counter,
        updateCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

function useCounter() {
  const context = useContext(CounterContext);
  return context;
}

export { CounterProvider, useCounter };
