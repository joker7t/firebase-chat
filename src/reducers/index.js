import { combineReducers } from 'redux';
import sideDrawer from './sideDrawerReducer';
import userReducer from './userReducer';

export default combineReducers({
	sideDrawer: sideDrawer,
	auth: userReducer,
});
