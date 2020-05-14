import React, { CSSProperties } from 'react';

import Header from './components/Header'
import ResumeHeader from './components/ResumeHeader';
import ResumeBody from './components/ResumeBody';
import Expierience from './components/Expierience';


export default function () {
    
    let x = window.innerWidth < 1000 ? window.innerWidth : 1000
    let root : CSSProperties = {
        width: x,
        marginLeft : `calc(50% - ${x/2}px)`,
        position: 'relative'
    }

    return (
        <div style={root}>
            <Header />
            <ResumeHeader />
            <Expierience />
            <ResumeBody />
        </div>
    )
}