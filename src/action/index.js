export const increment = () => {
    return {
        type : 'INCREMENT'
    };
};

 export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
          // You can invoke sync or async actions with `dispatch`
          dispatch(increment());
        }, 3000);
      };
}
 

export const decrement = () => {
    return {
        type : 'DECREMENT'
    };
};

export const singIn = () =>{
    return{
        type : 'SING_IN'
    }
}

export const singUp = () =>{
    return{
        type : 'SING_UP'
    }
}



