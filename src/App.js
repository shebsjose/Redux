import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./action";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);
  console.log(users);

  return (
    <div className="App">
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch(getUsersFetch());
        }}
      >
        {" "}
        Get Users{" "}
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Id</th>
          </tr>
        </thead>
        <tbody>
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

export default App;
