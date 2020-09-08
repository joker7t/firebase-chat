import { SET_MESSAGES, SET_MESSAGE_USER, ADD_MESSAGE } from '../actions/type';

const initialState = {
	toUser: null,
	messages: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_MESSAGE_USER:
			return {
				...state,
				toUser: action.payload,
			};
		case SET_MESSAGES:
			return {
				...state,
				messages: action.payload,
			};
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, action.payload],
			};

		default:
			return state;
	}
}
