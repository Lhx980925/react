import React, { Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';
import {Link} from 'react-router-dom';
import MyGrids from './My_Grids';

export default class My extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}} rightContent={[
                        <Link to='/set'><img key="0" src={require('../imgs/shezhi(1).png')} style={{width:23}} /></Link>,
                    ]}>
                    我的
                </NavBar>
                <div>
                    <img src={require('../imgs/my1.png')} style={{width:"100%",height:200}}/>
                </div>
                <div>
                    <img src={require('../imgs/my2.png')} style={{width:"100%",height:80}}/>
                </div>
                <MyGrids/>
            </div>
        )
    }
}
