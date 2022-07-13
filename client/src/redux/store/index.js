import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/index.js'

import saga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))

sagaMiddleware.run(saga)

export default store

// add saga
