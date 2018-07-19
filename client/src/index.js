import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import materialize from './helpers/materialize';
import registerServiceWorker from './registerServiceWorker';

// import React from 'react'
//
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
// import store, { history } from './store'
// import App from './App'
// import './index.css'
//
// const target = document.querySelector('#root');
//
// render(
// 	<Provider store={store}>
// 		<ConnectedRouter history={history}>
// 			<div>
// 				<App />
// 			</div>
// 		</ConnectedRouter>
// 	</Provider>,
// 	target
// );

ReactDOM.render(<App />, document.getElementById('root'));

materialize(window);
registerServiceWorker();
