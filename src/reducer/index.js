import counterReducer from './counter';
import AyncActionReducer from './asyncAction';
import { combineReducers} from 'redux';

const allReducer = combineReducers({
    counter : counterReducer,
    asyncAction : AyncActionReducer
});

export default allReducer;