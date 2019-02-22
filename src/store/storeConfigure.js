import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore() {
	const composeEnhancers = composeWithDevTools({
		name: 'nativestarterkit',
		realtime: true
	});
	const enhancer = composeEnhancers(
		applyMiddleware(thunk)
	);
	const store = createStore(reducer, enhancer);
	return store;
}
