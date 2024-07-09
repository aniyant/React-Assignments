
export const AuthReducer = (state,{type,payload}) => {
    switch(type) {
        case 'LOGIN':
            return {
                isAuthenticated:true,
                user:payload
            };
        case 'LOGOUT':
            return {
                isAuthenticated:false,
                user:{
                    username:"",
                    password:""
                }
            };
        default:
            return state;
    }
}