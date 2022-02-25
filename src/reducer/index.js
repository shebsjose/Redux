import CounterReducer from "./CounterReducer";
import AsyncActionReducer from "./AsyncReducer";
import LoggedReducer from "./IsLoggedReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: CounterReducer,
  asyncAction: AsyncActionReducer,
  isLogged: LoggedReducer,
});

export default allReducer;
