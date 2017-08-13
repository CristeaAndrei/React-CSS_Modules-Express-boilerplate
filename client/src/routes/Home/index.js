import React, { Component } from 'react';
import style from './style.css';

class Home extends Component {
 state = {users: []}
 componentDidMount() {
  fetch('/users')
  .then(res => res.json())
  .then(users => this.setState({ users }));
 }
 render() {
  return (
   <div className={style.App}>
    <div className={style.header}>
     <h2>Welcome to React</h2>
    </div>
    <p className={style.intro}>
     To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
   </div>
  );
 }
}

export default Home;
