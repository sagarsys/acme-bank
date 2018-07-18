import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {users: []};

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="App">

                <form action="">
                    <label>Email</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                    <input type="submit" value="Login"/>
                </form>

                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>User: {user.name} <br/> Password: {user.password}<br/><br/></div>
                )}
            </div>
        );
    }
}

export default App;
