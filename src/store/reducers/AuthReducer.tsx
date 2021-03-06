const INITIAL_STATE = {
    auth:{
        token:'',
        auth: false
    }
}

function authReducer(state = INITIAL_STATE , action:any) {
    if(action.type === 'SET_TOKEN') {
        return {
            ...state,
            auth:{
                token: action.token,
                auth: action.auth
            }
        }
    }
    return state
}

export default authReducer