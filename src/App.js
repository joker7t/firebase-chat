import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { LANDING_PATH, CHAT_PATH, REGISTER } from './asserts/links';
import Landing from './components/landing/Landing';
import Chat from './components/chat/Chat';
import store from './store';
import { Provider } from 'react-redux';
import style from './App.module.scss';
import firebase from './firebase';
import Register from './components/auth/Register';

const App = () => {
	useEffect(() => {
		firebase.auth().onAuthStateChanged((signedInUser) => {
			console.log(signedInUser);
		});
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<div className={style.App}>
					<div className={style.AppContent}>
						<Switch>
							<Route exact path={LANDING_PATH} component={Landing} />
							<Route exact path={CHAT_PATH} component={Chat} />
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
