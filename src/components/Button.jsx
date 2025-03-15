import React from 'react'
import './Button.css'

const props = props =>  <button 
                            data-qa ={`${props.label}`}
                            onClick = {e => props.click && props.click(props.label)}    
                            className={`button ${props.operation ? 'operation' : ''}${props.double ? 'double' : ''}${props.triple ? 'triple' : ''}`}>
                                
                                {props.label}
                        </button>
export default props 
   