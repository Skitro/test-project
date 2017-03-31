import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/login.jsx'
import Rou from './containers/rou.jsx'
import App1 from './containers/information.jsx'
import { Router, Route, hashHistory } from 'react-router'

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
        <Route path="/" component={Rou}/>

        <Route path="/login" component={App}/>
        <Route path="/information" component={App1}/>
      </Router>
    </Provider>,
    document.getElementById('mount-point')
);
