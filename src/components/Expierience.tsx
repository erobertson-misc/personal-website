import React, {CSSProperties, Component} from 'react';
import Colors from '../Colors'
import TechExpierience from './TechExpierience';
import Breakup from './Breakup';

let root : CSSProperties= {
        marginBottom: 10,
        position: 'relative',
        width: 'calc(100% - 40px)',
        padding: 20,
        borderRadius: 5,
        height: 200,
        cursor: 'pointer',
        background: Colors.light
}
let img = {
    width: 150,
    height : 150,
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



export default function(){
    return (
        <div style={root} > 

            <div style={{fontSize: 25, fontWeight: 600, marginBottom: 10 }}>
                Expierience in many technologies
            </div>
            <div style={{fontSize: 15, fontWeight: 600, marginBottom: 10 }}>
                <Breakup name="Web">
                    <TechExpierience name="Typescript"/>
                    <TechExpierience name="React"/>
                    <TechExpierience name="Angular"/>
                    <TechExpierience name="Socket.io"/>
                    <TechExpierience name="Beautiful Soup"/>
                </Breakup>
                <Breakup name="AI">
                    <TechExpierience name="Python"/>
                    <TechExpierience name="Keras"/>
                    <TechExpierience name="Jupyter"/>
                </Breakup>
                <Breakup name="Server">
                    <TechExpierience name="Node.js"/>
                    <TechExpierience name="Linux"/>
                    <TechExpierience name="Mongo"/>
                    <TechExpierience name="AWS"/>
                    <TechExpierience name="Express"/>
                </Breakup>
                <Breakup name="Mobile">
                    <TechExpierience name="React-Native"/>
                    <TechExpierience name="Cordova"/>
                    <TechExpierience name="Ionic"/>
                </Breakup>
                <Breakup name="Games">
                    <TechExpierience name="Unity"/>
                    <TechExpierience name="Three.js"/>
                    <TechExpierience name="Minecraft Spigot"/>
                </Breakup>
                <Breakup name="Other">
                    <TechExpierience name="Java"/>
                    <TechExpierience name="O-Caml"/>
                    <TechExpierience name="Bash"/>
                    <TechExpierience name="Ruby"/>
                </Breakup>
            </div>
        </div>
    )
}