import React from 'react';
import './GroupField.css';
import Input from './../../components/Input/Input';
import Label from './../../components/Label/Label';

const GroupField = (props) => {
  return (
    <div className={`GroupField GroupField--mode-${props.inline ? 'inline':'block' }`} inline={props.inline}>
      <Label waiFor={props.waiFor} customClass={props.customClass} text={props.text} />
      <Input inputClass={[props.inputClass]} event={props.event} val={props.val} placeHolder={props.placeHolder} />
   </div> 
  )
}

export default GroupField;