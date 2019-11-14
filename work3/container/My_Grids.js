import React, { Component } from 'react';
import { Grid,Icon } from 'antd-mobile';

const data1 = [
    {icon:require('../imgs/ziyuan.png'),text:'购物车'},
    {icon:require("../imgs/youhuijuan.png"),text:'优惠卷'},
    {icon:require("../imgs/zaixiankefu.png"),text:'在线客服'},
    {icon:require("../imgs/shoucang.png"),text:'我的收藏'},
    {icon:require("../imgs/wodeguanzhu.png"),text:'我的关注'},
    {icon:require("../imgs/shouhuodizhi.png"),text:'收货地址'},
    {icon:require("../imgs/icon2-copy.png"),text:'历史订单'},
    {icon:require("../imgs/fukuanfangshi.png"),text:'付款方式'},
    {icon:require("../imgs/wodepingjia.png"),text:'我的评价'}
];
  

export default class My_Grids extends Component {
    render() {
        return (
            <div>
                <div style={{width:"100%",height:40,backgroundColor:"white",marginTop:10}}>
                    <img src={require('../imgs/icon-order.png')} style={{width:30,marginTop:5,marginLeft:10,float:"left"}}/>
                    <div style={{marginTop:9,float:"left",fontSize:15,marginLeft:10}}>我的订单</div>
                    <Icon key="0" type="right" style={{ color:'#000',float:"right",marginTop:10,marginRight:10}}/>
                    <div style={{marginTop:12,float:"right",fontSize:10,marginRight:5}}>查看全部订单</div>
                </div>
                <Grid data={data1}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{marginTop:20}}>
                            <img src={dataItem.icon} style={{ width: '40px', height: '40px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px'}}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                    />
            </div>
        )
    }
}
