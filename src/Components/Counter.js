import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../action';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log(counter);
    return (
        <div className="App">
        <h1 className='m-3'>Count { counter.value }</h1>
        <button className="btn btn-success m-2" onClick={() =>{dispatch(increment())}}> + </button>
        <button className="btn btn-danger" onClick={() =>{dispatch(decrement())}}> - </button><br/><br/>
        </div>
      );
}
 
export default Counter;