import React, { Component } from 'react'
import { connect } from 'react-redux'

const App = React.createClass({
  click:function(state) {
    if (this.pass.value == "test") {
      this.props.authorizatioin([this.log.value, this.pass.value]);
      window.localStorage.setItem('login', this.log.value);
      window.localStorage.setItem('pass', this.pass.value);
      window.location.href="#/information";
    } else {
      alert("Введены неправильные данные. Проверьте Ваш логин и пароль");
    }
  },

  render() {
    console.log(this.props.testStore);
    return (
        <div>
            Логин
            <input type="text" ref={(input) => { this.log = input}}/>
            Пароль
            <input type="text" ref={(input) => { this.pass = input}}/>
            <input className="button" type="button" onClick={this.click.bind(this)} value="Вход"/>
        </div>
    );
  }
});

const Rou = React.createClass({

  render() {
    const login = window.localStorage.getItem('log');
    const pass = window.localStorage.getItem('pass');
    this.props.authorizatioin([this.log.value, this.pass.value]);
    if (this.props.testStore[1] != 'test') {
      window.location.href="index.html/login";
    } else {
      window.location.href="index.html/information";
    }
    return ();
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
