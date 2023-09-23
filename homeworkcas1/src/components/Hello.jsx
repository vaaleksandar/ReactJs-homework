import React from 'react';
import {Goodbye} from './Goodbye';

export class Hello extends React.Component{

    render(){
        return(
            <>
            <p style={{color:'blue',backgroundColor:'yellow'}}>RACING CARS</p>
            <h2>RACING CARS 500HP</h2>
            <Goodbye/>
            </>
        )
    }
}

