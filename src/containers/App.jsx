
import React, { Component } from 'react'
import { connect } from 'react-redux'


const App = React.createClass({
    click:function(state) {
        this.props.onAddTrack([this.log.value, this.pas.value]);
        const link = window.location.hash.replace("#","");
        window.localStorage.setItem('rr_login', 'admin');
        window.location.href="inf.html#" + link;
    },

    render() {
        return (
            <div>
                Логин
                <input type="text" ref={(input) => { this.log = input}}/>
                Пароль
                <input type="text" ref={(input) => { this.pas = input}}/>
                <input className="button" type="button" onClick={this.click.bind(this)} value="Вход"/>
            </div>
        );
    }
});

export default connect(
    (state) => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (inf) => {
            dispatch({type: 'ADD', payload: inf})
        }
    })
)(App)
