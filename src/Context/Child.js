import React, { Component } from 'react'
import {con} from './Context'
//import {Comsumer} from './Context'
//let {Provider,Comsumer}=React.createContext();

export default class child extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <h1>Context</h1>
                <div>{this.context}</div>
                {/*
                <Comsumer>
                    {
                        (data)=><div>{data}</div>
                    }
                </Comsumer>
                */}
            </div>
        )
    }
}
child.contextType=con;
