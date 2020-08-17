import {createStore, combineReducers} from 'redux'
import cartItems from '../reducers/cartItems';
import orderItems from '../reducers/orderItems';

const rootReducer = combineReducers({  
    cartItems,   
    orderItems  
})  
const store = createStore(rootReducer);

export default store;