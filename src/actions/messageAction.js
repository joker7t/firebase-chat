import { SET_MESSAGE_USER, SET_MESSAGES, ADD_MESSAGE } from './type';

export const setMessageUser = (user) => (dispatch) => {
	dispatch({
		type: SET_MESSAGE_USER,
		payload: user,
	});
};

export const setMessages = (messages) => (dispatch) => {
	dispatch({
		type: SET_MESSAGES,
		payload: messages,
	});
};

export const addMessage = (message) => (dispatch) => {
	dispatch({
		type: ADD_MESSAGE,
		payload: message,
	});
};
