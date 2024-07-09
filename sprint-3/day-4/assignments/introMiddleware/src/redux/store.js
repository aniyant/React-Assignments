import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/rootReducer';
import {actionTypeLogger} from '../middleware/actionTypeLogger';
import {payloadLogger} from '../middleware/payloadLogger';
import {logger} from 'redux-logger'


export const store = createStore(
  rootReducer,
  applyMiddleware(actionTypeLogger, payloadLogger,logger)
);

