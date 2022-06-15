const initialState=0

const handleMyCounter=(state = initialState, action)=>{

    switch(action.type){
case 'AGE_UP_ASYNC':
    // return state +1
    return state + action.payload   //for api

    case 'AGE_DOWN_ASYNC':
        return state - 1
        default:
            return state
    }
}
export default handleMyCounter