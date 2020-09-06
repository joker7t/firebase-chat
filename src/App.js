import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LANDING_PATH } from './asserts/links';
import Landing from './components/landing/Landing';

function App() {
	return (
		<div className="App">
			<Router>
				<div className="main">
					<Route exact path={LANDING_PATH} component={Landing} />
				</div>
			</Router>
		</div>
	);
}

export default App;
