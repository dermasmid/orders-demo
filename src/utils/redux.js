import { createStore } from 'redux';
import ordersReducer from '../reducers/orders';



let store = createStore(ordersReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
