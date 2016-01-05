import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { GrowlerReducer } from 'flash-notification-react-redux';

const rootReducer = combineReducers({
  routing: routeReducer,
  growler: GrowlerReducer,
});

export default rootReducer;
