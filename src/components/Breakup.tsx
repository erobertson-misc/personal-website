import React, {CSSProperties, Component} from 'react';
import Colors from '../Colors'

let style = {
    padding: '3px 10px',
    borderRadius: 5,
    background: Colors.medium,
    color: Colors.dark,
    display: 'inline-block',
    margin: 5,
    fontWeight: 800,
}

export default function ( props : { name : string, children : any}) {
    return (
        <div style={style}>
            {props.name}  
            <div style={{display:'inline-block', height: 10, margin: '0px 5px'}}> </div> 
            {props.children}
        </div>
    )
}