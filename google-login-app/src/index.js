import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import rootReducer from './reducers/authReducer';
import { createStore } from 'redux';
export const store = createStore(rootReducer);
export { store };
export { myAction } from './actions/authActions';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
