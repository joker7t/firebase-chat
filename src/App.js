import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LANDING_PATH } from './asserts/links';
import Landing from './components/landing/Landing';
import style from './App.module.scss';

function App() {
	return (
		<div className={style.App}>
			<Router>
				<div className={style.AppContent}>
					<Route exact path={LANDING_PATH} component={Landing} />
				</div>
			</Router>
		</div>
	);
}

export default App;
