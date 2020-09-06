import { SET_SIDE_DRAWER } from '../actions/type';

const initialState = {
	isOpen: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_SIDE_DRAWER:
			return {
				...state,
				isOpen: action.payload,
			};

		default:
			return state;
	}
}
