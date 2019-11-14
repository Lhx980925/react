import React, { Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';
import BusinessCarousels from './Business_Carousels';
import BusinessGrids from './Business_Grids';
import {Link} from 'react-router-dom';

export default class Business extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}} rightContent={[
                        <img key="0" src={require('../imgs/ziyuan(1).png')} style={{width:23}} />,
                    ]}>
                    商城
                </NavBar>
                <BusinessCarousels/>
                <BusinessGrids/>
                <div style={{float:"left"}}>
                    <Link to='/msg'>
                    <div style={{marginTop:20,marginLeft:25,float:"left"}}>
                        <img src={require('../imgs/bus1.png')} style={{width:150}}/>
                    </div>
                    </Link>
                    <Link to='/msg'>
                    <div style={{marginTop:20,marginLeft:25,float:"left"}}>
                        <img src={require('../imgs/bus2.png')} style={{width:150}}/>
                    </div>
                    </Link>
                    <div style={{marginTop:10,float:"left",fontSize:2,marginLeft:20}}>
                        Top Art Studio 欧式风格精细...
                        <br/>￥39.95
                    </div>
                    <div style={{marginTop:10,float:"left",fontSize:2,marginLeft:20}}>
                        顺顺工艺欧式风格塑料外框黑...
                        <br/>￥83.99
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Link to='/msg'>
                            <img src={require("../imgs/business.png")} style={{width:"90%"}}/>
                        </Link>
                        <br/>预售中...
                    </div>
                </div>
            </div>
        )
    }
}
