import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import pageTransition from './pages/Reducer';

const store = createStore(
    pageTransition,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
    </Provider>,document.getElementById('root')
);

store.subscribe(root.render);
export default store;