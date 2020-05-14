import React, {CSSProperties} from 'react';
import Colors from '../Colors'

let head : CSSProperties = {
    position: 'relative',
    width: '100%',
    height: 340,
}
let portrait : CSSProperties = {
    position: 'absolute',
    top: 20,
    left : 20,
    width: 300,
    height: 300,
}
let title : CSSProperties = {
    position: 'absolute',
    top: 50,
    left : 400,
    width: 450,
    height: 100,
    fontSize: 50,
    fontWeight: 800,
    textAlign: 'left'
}
let subtitle : CSSProperties = {
    position: 'absolute',
    top: 120,
    left : 400,
    width: 450,
    height: 40,
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'left',
    borderBottom: '1px solid'
}
let information : CSSProperties = {
    position: 'absolute',
    top: 170,
    left : 400,
    width: 450,
    height: 150,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 400,
    lineHeight: 2,
}

let img = { 
    width : '100%', 
    height : '100%',
    borderRadius: 5,
}
let root: CSSProperties = {
    width: '100%',
    top: 60,
    background: Colors.light,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginBottom: 10,
}

export default function () {
    return (
        <div style={root}>

            <div style={head}>
                <div style={portrait}>
                    <img style={img} src='./portrait.jpg' />
                </div>
                <div style={title}>
                    Eric Robertson
                </div>
                <div style={subtitle}>
                    Software Engineer
                </div>
                <div style={information} >
                    Junior at University of Maryland <br/>
                    3.8 GPA <br/>
                    10+ Years coding expierience <br/>
                    Open to contracting work of any kind <br/>
                </div>
            </div>

        </div>
    )
}