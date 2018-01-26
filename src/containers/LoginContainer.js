import React from 'react';

import Login from './../components/Login/Login';
import Card from './../components/Card/Card';
import  './LoginContainer.css';
import logo from './../assets/logo.png';
export default class LoginContainer extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <section className="LoginContainer">
        <img src={logo} className="LoginContainer__brand"/>
        <div className="LoginContainer__container">
          <Card>
            <Login />
          </Card>
          <div className="LoginContainer__links">
            <a href="http://ajuda.tagplus.com.br/" target="_blank">Precisando de Ajuda ?</a>
            &nbsp;&nbsp; <span>-</span> &nbsp;&nbsp;
            <a href="http://tagsoft.tagplus.com.br//sistema/recuperar_senha">Esqueceu a Senha ?</a>
          </div>
        </div>
      </section>
    );
  }
}