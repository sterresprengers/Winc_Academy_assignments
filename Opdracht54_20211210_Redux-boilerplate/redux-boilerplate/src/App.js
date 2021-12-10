// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./actions"

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux Boilerplate</h1>
      <p>Counter = {counter}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
{/* if you want the ACTION to take an argument, do it like so (and see payload in ACTION) */}
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      {isLogged ? <p>Valuable information</p> : <p>You're not logged in</p>}
    </div>
  );
}
export default App;
