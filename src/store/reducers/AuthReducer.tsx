const INITIAL_STATE = {
    auth:{
        token:''
    }
}

function authReducer(state = INITIAL_STATE , action:any) {
    if(action.type === 'SET_TOKEN') {
        return {
            ...state,
            auth:{
                token:action.token
            }
        }
    }
    return state
}

export default authReducer