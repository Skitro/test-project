import React, { Component } from 'react'
import { connect } from 'react-redux'

const App = React.createClass({
    render() {
        const login = window.localStorage.getItem('rr_login');
        localStorage.clear();
        if (login != 'admin') {
            window.location.href="index.html";
        }
        return (
            <div>
                lorem
            </div>
        );
    }
});

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD', payload: trackName})
        }
    })
)(App)