import React from 'react';

import Button from './../Button/Button';
import GroupField from './../../presentations/GroupField/GroupField';

export default class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <GroupField 
          waiFor="usuário" 
          customClass="full" 
          text="Usuário"
          inputClass="" 
          event={() => alert('click')} 
          val="" 
          placeHolder="" />

        <GroupField
          waiFor="senha"
          customClass="full"
          text="Senha"
          inputClass=""
          event={() => alert('click')}
          val=""
          placeHolder="" />

        <Button
          btnClass="color-primary" 
          event={()=>alert('clicked!')}
          text="Entrar" 
        />
      </div>
    )
  }
}