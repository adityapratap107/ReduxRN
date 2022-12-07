import {applyMiddleware, createStore} from 'redux';
import {Reducers} from '../reducer/Reducers';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

const middleware = [thunk];
const initialState = {};
export const myStore = createStore(Reducers);
// export const myStore = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware),
// );
