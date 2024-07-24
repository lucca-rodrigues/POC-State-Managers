import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment } from "./store";
function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <>
      <span>{count}</span>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}></button>
    </>
  );
}

export default App;
