import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './appReducer';
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";


import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};


const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo', 'tokenRedux']
}

const appPersistconfig = {
    ...persistCommonConfig,
    key: 'app',
    whitelist: ['language']
}


export default (history) => combineReducers({//hàm tổng hợp các reducer con
    router: connectRouter(history),

    user: persistReducer(userPersistConfig, userReducer),// thuộc tính user tương ứng với useReducer

    app: persistReducer(appPersistconfig, appReducer),// thuộc tính app tương ứng với appReducer
    admin: adminReducer
})