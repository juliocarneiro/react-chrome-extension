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
      <div className="fadeIn animated membros">
        <header>
          <nav className="text-right">
            <ul>
              <li><i className="fa fa-unlock"></i>&nbsp;  <a href="" onClick={this.logout}>Logout</a></li>
            </ul>
          </nav>
        </header>
        <div style={{padding:'30px'}}>
          <p>Área de membros</p>
        </div>
      </div>
    )
  }
}
