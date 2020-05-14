import React, { Component, CSSProperties } from 'react';
import Colors from '../Colors'
import { Link } from 'react-router-dom';

interface Props { text : String, redirect : string, page : string }
interface State { hover : boolean }

let root : CSSProperties = {
    cursor : 'pointer',
    padding : 10,
}
let removeLink : CSSProperties = {
    textDecoration: 'none',
    color : Colors.dark,
    display: 'inline-block',
    marginLeft: 20,
}
let active : CSSProperties = {
    borderBottom: '2px solid ' + Colors.dark
}
let hover : CSSProperties = {
    background : Colors.dark,
    color : Colors.light,
    borderBottom: '2px solid ' + Colors.light
}

export default class extends Component <Props,State> {

    constructor (public props : Props ) {
        super( props );
        this.state = { hover : false }
    }

    setHover = ( hover : boolean ) => () => {
        this.setState({hover})
    }

    render () {
        let activeState = this.props.page == this.props.redirect
        return (
            <Link style={removeLink} to={this.props.redirect}>
                <div style={{...root, ... (activeState?active: {}), ... (this.state.hover?hover:{}) }}
                    onMouseEnter={this.setHover(true)} 
                    onMouseLeave={this.setHover(false)} 
                    > 
                        {this.props.text}
                </div>
            </Link>
        )
    }


}