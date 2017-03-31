import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/login.jsx'
import App1 from './containers/information.jsx'
import { Router, Route, hashHistory } from 'react-router'
//import { syncHistoryWithStore } from 'react-router-redux'

function myReducer(state = [], action) {
  if (action.type == 'ADD') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(myReducer);


ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/information" component={App1}/>
      </Router>
    </Provider>,
    document.getElementById('mount-point')
);
