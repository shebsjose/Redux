import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../action';

const User = ({users}) => {
    const userApi = useSelector(state => state.asyncAction);
  const dispatch = useDispatch();
    return ( 
        <div className='m-4'>
             <button className="btn btn-warning"onClick={() =>{dispatch(fetchUser())}}> API Calling </button><br/>
             
        </div>
     );
}
 
export default User;