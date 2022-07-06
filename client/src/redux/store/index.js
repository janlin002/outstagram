import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/index.js'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

export default store

// add saga
