import React, { Component } from 'react'
import { connect } from 'react-redux'

const App = React.createClass({
  render() {
      const login = window.localStorage.getItem('log');
      const pass = window.localStorage.getItem('pass');
      this.props.authorizatioin([this.log.value, this.pass.value]);
      if (this.props.testStore[1] != 'test') {
          window.location.href="index.html";
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
