import React, { Component } from 'react';
import { NavBar, Icon, Tabs} from 'antd-mobile';
import {Link} from 'react-router-dom';

const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
    { title: '大户型' },
    { title: '夏季' },
    { title: '春季' },
    { title: '秋季' }
  ];

export default class Think extends Component {
    renderContent = tab =>
    (<div>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think1.png")} style={{width:150}}/>
        </div>
        </Link>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think2.png")} style={{width:150}}/>
        </div>
        </Link>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think1.png")} style={{width:150}}/>
        </div>
        </Link>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think2.png")} style={{width:150}}/>
        </div>
        </Link>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think1.png")} style={{width:150}}/>
        </div>
        </Link>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think2.png")} style={{width:150}}/>
        </div>
        </Link>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think3.png")} style={{width:150}}/>
        </div>
        </Link>
        <Link to="/msg">
        <div style={{float:"left",marginTop:25,marginLeft:25}}>
            <img src={require("../imgs/think4.png")} style={{width:150}}/>
        </div>
        </Link>
        
        
        
    </div>);

    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}} rightContent={[
                        <Icon key="0" type="search" style={{ color:'#000' }} />,
                    ]}>
                    灵感
                </NavBar>
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />} tabBarActiveTextColor="#3fcccb">
                    {this.renderContent}
                </Tabs>
            </div>
        )
    }
}
