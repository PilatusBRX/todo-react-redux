import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; 
import rootReducer from './reducers'; 

const persistConfig = {
  key: 'root',
  storage,
} 
const persistedReducer = persistReducer(persistConfig, rootReducer); 

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor};



// const store = createStore(
//   reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

