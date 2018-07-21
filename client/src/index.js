import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import materialize from './helpers/materialize';

import './index.css';
import App from './App';

const target = document.getElementById('root');

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(<Root />, target);

materialize(window);
registerServiceWorker();
