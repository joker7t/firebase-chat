import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LANDING_PATH, CHAT_PATH } from './asserts/links';
import Landing from './components/landing/Landing';
import Chat from './components/chat/Chat';
import store from './store';
import { Provider } from 'react-redux';
import style from './App.module.scss';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className={style.App}>
					<div className={style.AppContent}>
						<Route exact path={LANDING_PATH} component={Landing} />
						<Route exact path={CHAT_PATH} component={Chat} />
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
