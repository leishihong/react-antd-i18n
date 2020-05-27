/*
 * @Author: shihong.lei
 * @Date: 2019-06-21 16:47:37
 * @Last Modified by: shihong.lei
 * @Last Modified time: 2020-05-27 14:26:06
 */
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { routerMiddleware } from 'connected-react-router';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
// store
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(...middleware, routerMiddleware(createBrowserHistory()))
  )
);
window.store = store;
export const persistor = persistStore(store);
