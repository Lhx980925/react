import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className='headerwrap'>
                <header>
                    <div style={{float:"left"}}>
                    <Link to='/'><img src="http://static2.cnodejs.org/public/images/cnodejs_light.svg"/></Link>
                    </div>
                    <div style={{float:"left",marginLeft:30,marginTop:13}}><input type="text" style={{border:"1px solid white"}}/></div>
                    <div style={{float:'right',lineHeight:'50px'}}>
                        <Link to='/'>首页</Link>
                        <Link to='/start'>新手入门</Link>
                        <Link to='/api'>API</Link>
                        <Link to='/about'>关于</Link>
                        <Link>注册</Link>
                        <Link to='/login'>登录</Link>
                    </div>
                </header>
            </div>
        )
    }
}