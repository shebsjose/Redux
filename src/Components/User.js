import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../action';

const User = () => {
  const users = useSelector(state => state.asyncAction.users);
  const usersLoading = useSelector(state => state.asyncAction.loading);
  const dispatch = useDispatch();
  
  const handleClick =(loading) => {
 
        if (loading) {
          setTimeout(()=>{
               dispatch(fetchUser())
          },1000)
          return <div>Loading...</div>;
          
        }
     
  }
    return ( 
        <div className='m-4'>
             <button className="btn btn-warning"onClick={handleClick}> API Calling </button><br/>
              <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Id</th>
          </tr>
        </thead>
        <tbody>
        {usersLoading && "...loading"}
          {users && users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
        </tbody>
      </table>
        </div>
     );
}
 
export default User;