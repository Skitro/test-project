import React, { Component } from 'react'
import { connect } from 'react-redux'

const Rou = React.createClass({

  render() {
    const login = window.localStorage.getItem('login');
    const pass = window.localStorage.getItem('pass');
    // this.props.authorizatioin([login, pass]);
    console.log(login, pass);
    if (pass != 'test') {
      window.location.href="#/login";
    } else {
      window.location.href="#/information";
    }
    return (
      <p>123431</p>
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
)(Rou)
