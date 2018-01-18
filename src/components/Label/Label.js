import React from 'react';
import './Label.css';
const Label = props => <label for={props.waiFor} className={`Label ${props.customClass ? 'Label--' + props.customClass : ''}`}>{props.text}</label>
export default Label;