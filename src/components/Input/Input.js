import React from 'react';
import './Input.css';
const Input = props => <input type={props.mode} placeholder={props.placeHolder} className={`Input ${props.btnClass ? 'Input--' + props.inputClass : ''}`} value={props.val} onChange={props.event} />
export default Input;