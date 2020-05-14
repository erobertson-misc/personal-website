import React, {CSSProperties, Component} from 'react';
import Colors from '../Colors'

let style = {
    padding: '3px 10px',
    borderRadius: 5,
    background: Colors.dark,
    color: Colors.light,
    display: 'inline-block',
    margin: 5,
    fontWeight: 400,
}

export default function ( props : { name : string}) {
    return (
        <div style={style}>
            {props.name} 
        </div>
    )
}