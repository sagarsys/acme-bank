import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import App from './App';

import './index.css';

import materialize from './helpers/materialize';
import registerServiceWorker from './registerServiceWorker';


const target = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	target
);

materialize(window);
registerServiceWorker();
