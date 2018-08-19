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
    }.bind(this), 1000);
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

    const children = (
      <div>
        <Switch>
            <Route path="/" component={this.state.user ? (Membros) : (Login)} />
            <Route path="/membros" component={Membros}/>
        </Switch>
      </div>
    )
    return (
      <div className="">
        {children}
      </div>
    );
  }
}

export default App;