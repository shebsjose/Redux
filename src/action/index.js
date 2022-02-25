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
}

export const fetchUser = () => {
    return async  dispatch => {
        try {
            dispatch(fetchUserRequest())
            console.log('request');
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(fetchUserSuccess(response.data));
          }
          catch(error) {
              console.log('error');
            dispatch(fetchUserFailure(error.message))
          }
          
}
}

