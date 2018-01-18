import React from 'react';

import Login from './../components/Login/Login';
import Card from './../components/Card/Card';
import  './LoginContainer.css';

export default class LoginContainer extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <section className="LoginContainer">
        <img src="http://tagsoft.tagplus.com.br/resources/images/temas/tagplus/logo_login.png" />
        <Card>
          <Login />
        </Card>
      </section>
    );
  }
}