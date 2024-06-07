import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "./store/store";
import { decrement, increment } from "./slice/counterSlice";

function App() {
  const count = useSelector((state: ReduxState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default App;
