import { combineReducers } from 'redux';
import sideDrawer from './sideDrawerReducer';

export default combineReducers({
	sideDrawer: sideDrawer,
});
