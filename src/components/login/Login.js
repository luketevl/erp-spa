import React from 'react';

import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';

export default class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Label waiFor="usuário" customClass="full" text="Usuário" />
        <Input inputClass="" event={() => alert('click')} val="" placeHolder="" />

        <Label waiFor="senha" customClass="full" text="Senha" />
        <Input inputClass="" event={() => alert('click')} val="" placeHolder="" />

        <Button
          btnClass="color-primary" 
          event={()=>alert('clicked!')}
          text="Entrar" 
        />

      </div>
    )
  }
}