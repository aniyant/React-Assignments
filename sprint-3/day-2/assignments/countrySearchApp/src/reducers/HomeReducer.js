
export const HomeReducer = (state,{type,payload}) => {
    switch(type) {
        case "LOADING_DATA":
            return {
                loading:true,
                error:false,
                data:[]
            }
        case "LOADING_ERROR":
            return {
                loading:false,
                error:true,
                data:[]
            }
        case "LOADING_SUCCESS":
            return {
                loading:false,
                error:false,
                data:payload
            }
        default:
            return state;
    }
}