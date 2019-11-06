import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Api extends Component {
    render() {
        return (
            <div style={{height:200}}>
                <h3 style={{marginLeft:30,marginTop:20}}><Link to='/' style={{textDecoration:"none"}}>主页</Link>/API</h3>
                <h1 style={{marginLeft:30,marginTop:20}}>主题</h1>
                <h4 style={{marginLeft:30,marginTop:20}}>get /topics 主题首页</h4>
                <h4 style={{marginLeft:30,marginTop:20}}>get /topic/:id 主题详情</h4>
            </div>
        )
    }
}
