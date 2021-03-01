import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { updateSaga, saga } from './sagas'
import dataReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ data: dataReducer })
const storeConfig = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)
sagaMiddleware.run(updateSaga)

export default storeConfig
