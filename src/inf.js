import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App1 from './containers/App1.jsx'
import reducer from './reducers'
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App1 />
    </Provider>,
    document.getElementById('mount-point')
);
