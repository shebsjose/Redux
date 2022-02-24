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
    <h1 className='m-4'>Count { counter.value }</h1>
    <button className="btn btn-success m-2" onClick={() =>{dispatch(increment())}}> + </button>
    <button className="btn btn-danger" onClick={() =>{dispatch(decrement())}}> - </button><br /><br/>
    <button className="btn btn-primary"onClick={() =>{dispatch(fetchUser())}}> API Calling </button><br />
    </div>
  );
}

export default App;
