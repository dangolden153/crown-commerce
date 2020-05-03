const INITIAL_STATE ={
    CurrentUser: null
}

const UserReducer = (state= INITIAL_STATE, action )=>{
switch (action.type){
 case 'SET_USER':
     return {
         ...state,
         CurrentUser:action.payload
     };
     default:
         return state;
};
}

export default UserReducer;