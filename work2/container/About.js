import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <div style={{height:340}}>
                <h3 style={{marginLeft:30,marginTop:20}}><Link to='/' style={{textDecoration:"none"}}>主页</Link>/关于</h3>
                <h1 style={{marginLeft:30,marginTop:20}}>关于</h1>
                <p style={{marginTop:20,marginLeft:20}}>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p style={{marginTop:20,marginLeft:20}}>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                <p style={{marginTop:20,marginLeft:20}}>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p style={{marginTop:20,marginLeft:20}}>社区目前由 @alsotang 在维护，有问题请联系：https://github.com/alsotang</p>
                <p style={{marginTop:20,marginLeft:20}}>请关注我们的官方微博：http://weibo.com/cnodejs</p>
            </div>
        )
    }
}
