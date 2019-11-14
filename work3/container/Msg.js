import React, { Component } from 'react';
import { NavBar, Icon,List} from 'antd-mobile';
import {Link} from 'react-router-dom';
import MsgCarousels from './Msg_Carousels';

export default class Msg extends Component {
    render() {
        return (
            <div>
                <NavBar
                rightContent={[<img src={require("../imgs/ziyuan(1).png")} style={{width:25}}/>]}
                style={{backgroundColor:'#3fcccb',color:'white'}}
                icon={<Link to='/home'><Icon type="left" style={{color:"white",marginTop:9}}/></Link>}
                >商品详情</NavBar>
                <MsgCarousels/>
                <div style={{backgroundColor:"white"}}>
                    <div style={{marginTop:10}}>
                        <h3>Top Art Studio欧式风格精细骨瓷混搭颜色咖啡杯碟</h3>
                        <p style={{marginLeft:10}}>经典之作，从每一个细节里都可以看出，精密的制作工艺，将图案颜色和釉彩骨瓷完美结合</p>
                    </div>
                    <div style={{color:"red",marginLeft:10,fontSize:20}}>
                        ￥39.95
                    </div>
                </div>
                <div style={{marginTop:20,backgroundColor:"white"}}>
                    <h3 style={{marginLeft:10}}>商品参数</h3>
                    <p style={{marginLeft:10}}>系列名称：卢加诺系列</p>
                    <p style={{marginLeft:10}}>单品名称：Top Art Studio欧式风格精细骨瓷混搭颜色咖啡杯碟</p>
                    <p style={{marginLeft:10}}>规格：咖啡杯：85*70；碟：直径160</p>
                    <p style={{marginLeft:10}}>商品编号：MH-卢加诺咖啡杯碟</p>
                    <p style={{marginLeft:10}}>商品颜色：混搭</p>
                </div>
                <div style={{height:45,backgroundColor:"white"}}>
                    <img src={require("../imgs/fenxiang.png")} style={{width:25,marginTop:12,marginLeft:15}}/>
                    <img src={require("../imgs/xin.png")} style={{width:25,marginTop:12,marginLeft:15}}/>
                    <button style={{float:"right",width:100,height:30,backgroundColor:"red",color:"white",border:"1px solid white",marginRight:10,marginTop:10}}>立即购买</button>
                    <button style={{float:"right",width:100,height:30,backgroundColor:"#3fcccb",color:"white",border:"1px solid white",marginRight:10,marginTop:10}}>加入购物车</button>
                </div>
            </div>
        )
    }
}

