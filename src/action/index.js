import axios from "axios";

export const increment = () => {
    return {
        type : 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type : 'DECREMENT'
    };
};
 
export const fetchUserRequest = () => {
    return {
        type : 'FETCH_USER_REQUEST'
    };
};

export const fetchUserSuccess  = users => {
    return {
        type : 'FETCH_USER_SUCCESS', 
        payload : users
    };
};

export const fetchUserFailure = error => {
    return {
        type : 'FETCH_USER_FAILURE',
        payload : error
    };
};

// export const fetchUser = () => {
//     return function (dispatch) {
//         dispatch(fetchUserRequest())
//          axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response =>{
//             // response.data is the array of users
//             dispatch(fetchUserSuccess(response.data))
//         })
//         .catch(error => {
//             // error.message is the description
//           dispatch(fetchUserFailure(error.message))
//         })
        
//     }
// }

export const fetchUser = () => {
    return async function (dispatch) {
        dispatch(fetchUserRequest())
         const response = await axios.get('https://jsonplaceholder.typicode.com/users123')
        if(response.data) {
            dispatch(fetchUserSuccess(response.data))
        } else {
      dispatch(fetchUserFailure(response.error.data))
      console.log('hello sheba',response.error.data); 
        }
    }
}

