import React, { CSSProperties } from 'react'
import Colors from '../Colors'
import HeaderLink from './HeaderLink'

let name = {
    fontSize : 30,
    fontWeight: 800,
    paddingTop: 10,
    paddingLeft: 30,
}
let root = {
    width : '100%',
    height: 60,
    background : Colors.medium
}
let links : CSSProperties = {
    position : 'absolute',
    right: 0,
    paddingTop: 10,
    paddingRight: 30,
    top : 0,
    fontSize : 30,
    textAlign: 'right',
    fontWeight: 800,
}

export default function () {
    return (
        <div style={root}> 
            <div style={name}>
                Eric Robertson
            </div>
            <div style={links}>
                e.robertson.js@gmail.com
            </div>
            
        </div>
    )
}