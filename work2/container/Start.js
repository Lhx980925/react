import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Start extends Component {
    render() {
        return (
            <div style={{height:300}}>
                <h3 style={{marginLeft:30,marginTop:20}}><Link to='/' style={{textDecoration:"none"}}>主页</Link>/Node.js新手入门</h3>
                <h1 style={{marginLeft:30,marginTop:20}}>Node.js新手入门</h1>
                <p style={{marginLeft:30,marginTop:20}}>《快速搭建 Node.js 开发环境以及加速 npm》</p>
                <p style={{marginLeft:30,marginTop:20}}>http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</p>
                <p style={{marginLeft:30,marginTop:20}}>《Node.js 包教不包会》</p>
                <p style={{marginLeft:30,marginTop:20}}>https://github.com/alsotang/node-lessons</p>
            </div>
        )
    }
}
