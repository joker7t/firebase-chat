import { combineReducers } from 'redux';
import sideDrawer from './sideDrawerReducer';
import userReducer from './userReducer';
import messageReducer from './messageReducer';

export default combineReducers({
	sideDrawer: sideDrawer,
	auth: userReducer,
	message: messageReducer,
});
