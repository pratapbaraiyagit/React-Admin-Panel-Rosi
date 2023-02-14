import { combineReducers } from 'redux';

import api from './api';
import auth from './auth';
import ChairtyReducer from './charity';
import CauseReducer from './cause';
import RegistrationReducer from './Registration'
import CmsReducer from './cms';
import metaReducer from './meta';
import charityCategoryReducer from './charityCategory';

const rootReducer = combineReducers({
    api,
    auth,
    RegistrationReducer,
    ChairtyReducer,
    CauseReducer,
    CmsReducer,
    metaReducer,
    charityCategoryReducer
})

export default rootReducer;