import { useSelector, useDispatch } from "react-redux";
import { signIn, signUp } from "../action/auth";

const Login = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="'m-4'">
      <button
        className="btn btn-lg btn-primary m-2"
        onClick={() => {
          dispatch(signIn());
        }}
      >
        LogIn
      </button>
      <button
        className="btn btn-secondary btn-lg"
        onClick={() => {
          dispatch(signUp());
        }}
      >
        LogOut
      </button>
      <br />
      {isLogged ? <h3>Your are Logged In</h3> : ""}
      <br />
    </div>
  )
};

export default Login;
