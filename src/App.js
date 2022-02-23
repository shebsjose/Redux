import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement} from './action';
import { signIn,signUp } from './action/auth'


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  console.log(counter);
  return (  
    <div className="App">
    <h1>Count { counter.value }</h1>
    <button onClick={() =>{dispatch(increment())}}> + </button>
    <button onClick={() =>{dispatch(decrement())}}> - </button><br />
    <button onClick={()=>{dispatch(signIn())}}>LogIn</button>
    <button onClick={()=>{dispatch(signUp())}}>LogOut</button><br />
    {isLogged ? <h3>Your are Logged In</h3> : ''}
    </div>
  );
}

export default App;
