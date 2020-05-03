import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from '../redux/user/user.reducer';
import CartReducer from '../redux/cart/cart.redux';
import directoryReducer from '../redux/directory/directory.reducer';
import ShopPageReducer from '../redux/shop_Page/shopPage.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart :CartReducer,
    directory:directoryReducer,
    Shop: ShopPageReducer
})

export default persistReducer(persistConfig, rootReducer);