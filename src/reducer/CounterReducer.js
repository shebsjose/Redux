// const counterReducer = (state = 0, action) =>{
//     console.log(action.type);
//     switch(action.type){
//         case 'INCREMENT' :
//             return state + 1
//         case 'DECREMENT' :
//             return state - 1
//             default :
//             return state;
//     }
// }
// export default counterReducer;

const initialState = { value: 5 }

function CounterReducer(state = initialState, action) {
  switch(action.type){
            case 'INCREMENT' :
              return {value:state.value + 1}
            case 'DECREMENT' :
              return {value:state.value - 1}
            default :
                return state;
  }
}
export default CounterReducer;
