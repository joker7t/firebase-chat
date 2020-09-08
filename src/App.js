import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { LANDING_PATH, CHAT_PATH, REGISTER } from './asserts/links';
import Landing from './components/landing/Landing';
import Chat from './components/chat/Chat';
import store from './store';
import { Provider } from 'react-redux';
import style from './App.module.scss';
import firebase from './firebase';
import Register from './components/auth/Register';
import { SET_USER } from './actions/type';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (signedInUser) => {
			store.dispatch({
				type: SET_USER,
				payload: signedInUser,
			});
			setIsLoading(false);
		});

		//eslint-disable-next-line
	}, []);

	return isLoading ? (
		<div></div>
	) : (
		<Provider store={store}>
			<Router>
				<div className={style.App}>
					<div className={style.AppContent}>
						<Switch>
							<Route exact path={LANDING_PATH} component={Landing} />
							<Route exact path={`${CHAT_PATH}/:toUserId`} component={Chat} />
							<Route exact path={REGISTER} component={Register} />
							<Redirect to="/" />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
