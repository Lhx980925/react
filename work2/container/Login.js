import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div style={{height:200}}>
                <h3 style={{marginLeft:30,marginTop:20}}><Link to='/' style={{textDecoration:"none"}}>主页</Link>/登录</h3>
                <form>
                    <div style={{marginLeft:70,marginTop:30}}>用户名 <input type="text" style={{marginLeft:10,border:"2px solid white",width:200}}/></div>
                    <div style={{marginLeft:86,marginTop:20}}>密码 <input type="password" style={{marginLeft:10,border:"2px solid white",width:200}}/></div>
                    <div style={{marginLeft:170,marginTop:25}}><Link to='/'><button style={{width:70,height:30,backgroundColor:"blue",color:"white",border:"2px solid white"}}>登录</button></Link></div>
                </form>
            </div>
        )
    }
}
