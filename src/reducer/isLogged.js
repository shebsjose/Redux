const loggedReducer =(state = false, action) => {
    switch(action.type){
        case 'SIGN_IN' :
            return !state;
         case 'SIGN_UP':
                return !state;
       default :
       return state;

    }
};
export default loggedReducer;



// const initialState = { value :false }

// const loggedReducer =(state = initialState, action) => {
//         switch(action.type){
//             case 'SING_IN' :
//                 return {value: value.!state};
//              case 'SING_UP':
//                     return !state;
//            default :
//            return state;
    
//         }
//     };
//     export default loggedReducer;