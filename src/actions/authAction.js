import { SET_USER } from './type';

export const setUser = (user) => (dispatch) => {
	dispatch({
		type: SET_USER,
		payload: user,
	});
};
