import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import Carousels from './Carousels';
import Grids from './Grids';
import {Link} from 'react-router-dom';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'white'}}>
                    住吧家居
                </NavBar>
                <Carousels/>
                <Grids/>
                <div style={{marginTop:5,height:40,backgroundColor:"white"}}>
                    <img src={require('../imgs/remen.png')} style={{width:20,float:"left",marginTop:10,marginLeft:10}}/>
                    <div style={{marginTop:9,float:"left",marginLeft:10,fontSize:15}}>热门推荐</div>
                </div>
                <div>
                    <Link to="/msg">
                        <img src={require('../imgs/home4.png')} style={{width:"100%"}}/>
                    </Link>
                </div>
            </div>
        )
    }
}
