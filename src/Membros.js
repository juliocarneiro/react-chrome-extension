import React, { Component } from 'react'
import fire from './config/Fire'

export default class Membros extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
      fire.auth().signOut();
  }
  render() {
    return (
      <div className="container">
        <p>lol membro</p>
        <a href="" onClick={this.logout}>Logout</a>
      </div>
    )
  }
}
