const INITIAL_STATE = {
   users: [],
   current_user:{}
}

export default (state=INITIAL_STATE,actions) => {
    switch(actions.type){
        case 'SETUSER':
            return ({
                ...state,
                current_user:actions.payload

            })
            case 'SETFIREBASEUSERS':
                return ({
                    ...state,
                    users:actions.payload
    
                })
                
    }
    return state;
}