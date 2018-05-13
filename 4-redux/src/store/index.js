import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
