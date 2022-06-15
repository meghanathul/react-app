import axios from 'axios'
import { takeEvery, put, delay, call } from 'redux-saga/effects'

function fetchTheUser(id) {
    return axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
}

//FOR INCREMENT

function* ageUpAsync() {         //0 sec     generator function
    // yield delay(5000)          //5 sec  -imp 

    const data = yield fetchTheUser(10)
    console.log(data)

    // yield put({ type: 'AGE_UP_ASYNC', payload: 1 })       //pass this object to reducer
    yield put({ type: 'AGE_UP_ASYNC', payload: data.data.id })
}

export function* watchAgeUP() {
    yield takeEvery('AGE_UP', ageUpAsync)
}

//FOR DECREMENT

function* ageDownAsync() {         //0 sec     generator function
    yield delay(2000)        //2 sec  -imp 


    yield put({ type: 'AGE_DOWN_ASYNC', payload: 1 })  //pass this object to reducer

}

export function* watchAgeDOWN() {
    yield takeEvery('AGE_DOWN', ageDownAsync)
}