import React, { Component } from 'react'
import { connect } from 'react-redux'

const App = React.createClass({
  render() {
      const login = window.localStorage.getItem('login');
      const pass = window.localStorage.getItem('pass');
      // this.props.authorizatioin([login, pass]);
      console.log(login, pass);
      // window.localStorage.clear();
      if (pass != 'test') {
        window.location.href="#/login";
      }
      return (
          <div>
              Авторизация прошла успешно
          </div>
      );
  }
});

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        authorizatioin: (inf) => {
            dispatch({type: 'ADD', payload: inf})
        }
    })
)(App)
