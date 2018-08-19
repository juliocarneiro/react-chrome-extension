import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import fire from './config/Fire'

import Login from './login'
import Membros from './Membros'

class App extends Component {
  state = {
      user:null,
      loading:true,
  }

  componentDidMount(){
    this.authListener()
  }

  componentWillMount(){
    setTimeout(function(){
      this.setState({
        loading:false,
      })
    }.bind(this), 500);
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user)
      if(user){
        this.setState({user})
        localStorage.setItem('user', user.uid)
      } else{
        this.setState({user: null})
        localStorage.removeItem('user')
      }
    })
  }

  render() {
    const loader = (
      <div className="load">
        <div id="space-loader"></div>
        <div id="loader"></div><br />
        <p style={{fontSize:'14px', color:'white'}}>Carregando...</p>
      </div>
    )
    const children = (
      <div style={{width:'400px', height:'400px'}}>
        <Switch>
            <Route path="/" component={this.state.user ? (Membros) : (Login)} />
        </Switch>
      </div>
    )
    return (
      <div className="">
        {this.state.loading ? loader : children}
      </div>
    );
  }
}

export default App;