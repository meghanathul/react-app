
export const increment=()=>{
    return{
        type:'AGE_UP',
        // payload:10000 //Api data
        payload:1
    }
}

export const decrement=()=>{
    return{
        type:'AGE_DOWN'
    }
}