import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../action";

const User = () => {
  const users = useSelector((state) => state.asyncAction.users);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <div className="m-4">
      <button
        className="btn btn-warning"
        onClick={() => {
          dispatch(fetchUser());
        }}
      >
        {" "}
        API Calling{" "}
      </button>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Id</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
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
};

export default User;
