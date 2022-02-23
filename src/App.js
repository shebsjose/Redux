import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement, fetchUser} from './action';


function App() {
  const counter = useSelector(state => state.counter);
  const userApi = useSelector(state => state.asyncAction);
  const dispatch = useDispatch();
  return (  
    <div className="App">
    <h1>Count { counter.value }</h1>
    <button onClick={() =>{dispatch(increment())}}> + </button>
    <button onClick={() =>{dispatch(decrement())}}> - </button><br />
    <button onClick={() =>{dispatch(fetchUser())}}> API Calling </button><br />
    </div>
  );
}

export default App;
