import React, {CSSProperties, Component} from 'react';
import Colors from '../Colors'

let root = (hover:boolean) => {
    let data : CSSProperties = {
        marginBottom: 10,
        position: 'relative',
        width: 'calc(100% - 42px)',
        padding: 20,
        borderRadius: 5,
        height: 150,
        cursor: 'pointer',
        color: hover ? Colors.light : 'black',
        background: hover ? Colors.dark : Colors.light,
        border: hover ? `2px solid ${Colors.medium}` : `2px solid ${Colors.light}`
    }
    return data;
}
let img = {
    width: 150,
}
let imgContainer = {}

let text : CSSProperties= {
    position: 'absolute',
    left : 200,
    top: 20,
    height: 150,
    width: 'calc(100% - 240px)'
}
let date : CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    textAlign: 'right',
}

interface Props { img : string, title : string, description : string, link : string, date : string }
interface State { hover : boolean }


export default class extends Component <Props,State> {

    constructor (public props : Props ) {
        super( props );
        this.state = { hover : false }
    }

    setHover = ( hover : boolean ) => () => {
        this.setState({hover})
    }

    render () {
        return (
            <div 
                onMouseEnter={this.setHover(true)} 
                onMouseLeave={this.setHover(false)}
                style={root(this.state.hover)} 
                onClick={()=>window.location.href = this.props.link}> 

                <div style={imgContainer}>
                    <img src={this.props.img} style={img} />
                </div>
                <div style={text}>
                    <div style={{fontSize: 25, fontWeight: 600, marginBottom: 10 }}>
                        {this.props.title}
                    </div>
                    <div style={{fontSize: 15, fontWeight: 300, marginBottom: 10 }}>
                        {this.props.description}
                    </div>
                    <div style={date}>
                        {this.props.date}
                    </div>
                </div>
            </div>
        )
    }
}