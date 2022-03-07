import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/index';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

/**
 * @provider -
 *  we use this React-redux provider to open the access to the store.
 * anywhere it is wrapped, all nested components will have acess to the store.
 * the 'store={}' attribute is used to let the provider know about the store to use.
 * @store -
 * And then we need to import the store.
 */
