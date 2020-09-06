import { SET_SIDE_DRAWER } from './type';

export const setSideDrawer = (isOpen) => (dispatch) => {
	dispatch({
		type: SET_SIDE_DRAWER,
		payload: isOpen,
	});
};
