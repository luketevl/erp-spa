import React from 'react';
import style from './Button.css';
const Button = props => <button className={`Button Button--${props.btnClass}`} onClick={props.event}>{props.text}</button> 

export default Button;