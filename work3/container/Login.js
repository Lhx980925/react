import React, { Component } from 'react';
import { NavBar,Icon,List,InputItem } from 'antd-mobile';
import {Link} from 'react-router-dom';


export default class Login extends Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
      }
    handleClick = () => {
        this.inputRef.focus();
      }
    render() {
        return (
            <div style={{textAlign:"center",backgroundColor:"white"}}>
                <NavBar
                mode="light"
                icon={<Link to="/home"><Icon type="left" style={{color:"black",marginTop:9}}/></Link>}
                >登录</NavBar>
                <List>
                <InputItem
                    type="text"
                    placeholder="手机/邮箱"
                ><img src={require('../imgs/denglu.png')} style={{width:25}}/></InputItem>
                <InputItem
                    type="password"
                    placeholder="密码"
                ><img src={require('../imgs/denglumima.png')} style={{width:25}}/></InputItem>
                </List>
                
                <button type="primary" style={{width:200,height:40,marginTop:30,backgroundColor:"#3fcccb",border:"1px solid #ddd"}}><Link to='/home' style={{color:"white",fontSize:15}}>登录</Link></button>
                <div style={{color:"#3fcccb",marginTop:10}}>
                    新用户注册  |  忘记密码?
                </div>
                <div class="box">
                    <span class="line"></span>
                    <span class="text">第三方登录</span>
                    <span class="line"></span>
                </div>
                <div style={{textAlign:"center",marginTop:20}}>
                    <img src={require('../imgs/qq.png')} style={{width:30,}}/>
                    <img src={require('../imgs/weibo.png')} style={{width:30,marginLeft:40}}/>
                    <img src={require('../imgs/weixin.png')} style={{width:30,marginLeft:40}}/>
                </div>
                <div style={{marginTop:5}}>
                    <span style={{marginLeft:3}}>QQ</span>
                    <span style={{marginLeft:45}}>微博</span>
                    <span style={{marginLeft:43}}>微信</span>
                </div>
            </div>
        )
    }
}