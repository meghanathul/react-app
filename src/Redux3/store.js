import { createStore , applyMiddleware } from "redux";
import rootReducer from "./Reducer/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { watchAgeDOWN, watchAgeUP } from "./sagas/saga";

const sagaMiddleware=createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware) )

sagaMiddleware.run(watchAgeUP)
sagaMiddleware.run(watchAgeDOWN)

export default store
