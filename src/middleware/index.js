import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import asyncDispatchMiddleware from './asyncDispatcher';

const middleware = composeWithDevTools(applyMiddleware(thunk, asyncDispatchMiddleware));
export default middleware;
