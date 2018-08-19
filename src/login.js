import React, { Component } from 'react';
import './index.css';

import fire from './config/Fire'

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: '',
      password: '',
      error:''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        //console.log(error);
        this.setState({error:error.message})
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        //console.log(error);
        this.setState({error:error.message})
      })
  }

  render() {
    return (
      <div className="">
        <div className="home">
          <div className="container" style={{margin:'50px'}}>
            <form className="col-lg-6 animated fadeInLeft">
              <div className="form-group">
                <h1 style={{marginTop:'0px'}}>Área para membros</h1>
                <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email..." required />
              </div>
              <div className="form-group">
                <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="" id="exampleInputPassword1" placeholder="Digite sua senha..." required />
                <p>{this.state.error}</p>
              </div>
              <button type="submit" onClick={this.login} style={{marginRight:"10px"}} className="">Login</button>
              <button onClick={this.signup} className="cadastrar">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
