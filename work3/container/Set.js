import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavBar, Icon,List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Set extends Component {
    state = {
        disabled: false,
      }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <NavBar
                icon={<Link to='/home'><Icon type="left" style={{color:"white",marginTop:7}}/></Link>}
                style={{backgroundColor:'#3fcccb',color:'white'}}
                >设置</NavBar>
                <List>
                    <Item
                    arrow="horizontal"
                    onClick={() => {}}
                    >
                        <img src={require("../imgs/xiugaiziliao.png")} style={{width:25,float:"left",marginTop:2}}/>                       
                        <div style={{float:"left",marginLeft:10}}>资料修改</div>
                    </Item>
                    <Item
                    onClick={() => {}}
                    arrow="horizontal"
                    >
                        <img src={require("../imgs/icon2.png")} style={{width:25,float:"left",marginTop:2}}/>                       
                        <div style={{float:"left",marginLeft:10}}>密码修改</div>
                    </Item>
                </List>
                <List style={{marginTop:10}}>
                    <Item
                    extra={'356M'}
                    onClick={() => {}}
                    >
                        <img src={require("../imgs/qingchuhuancun.png")} style={{width:25,float:"left",marginTop:2}}/>                       
                        <div style={{float:"left",marginLeft:10}}>清除缓存</div>
                    </Item>
                </List>
                <List style={{marginTop:10}}>
                    <Item
                    arrow="horizontal"
                    onClick={() => {}}
                    >
                        <img src={require("../imgs/guanyuwomen.png")} style={{width:25,float:"left",marginTop:2}}/>                       
                        <div style={{float:"left",marginLeft:10}}>关于我们</div>
                    </Item>
                </List>
                <button style={{width:200,height:40,marginTop:20,backgroundColor:"red",border:"1px solid #ddd"}}><Link to='/' style={{color:"white",fontSize:15}}>退出登录</Link></button>
            </div>
        )
    }
}
