import counterReducer from './counter';
import loggedReducer from './isLogged';
import whoAreYouReducer from './whoIsIt';
import clickCountReducer from './clickCount';
import locationReducer from './location-nav';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    logged : loggedReducer, 
    who: whoAreYouReducer, 
    clicks : clickCountReducer, 
    location: locationReducer, 
    
});

export default allReducers;