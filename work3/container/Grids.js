import React, { Component } from 'react';
import { Grid} from 'antd-mobile';
import {Link} from 'react-router-dom';
  
const data1 = [{icon:require('../imgs/home1.png')},{icon:require("../imgs/home2.png")},{icon:require("../imgs/home3.png")}]
  
export default class Grids extends Component {
    render() {
        return (
            <div style={{marginTop:20}}>
                <Link to='/msg'>
                    <Grid data={data1}
                        columnNum={3}
                        hasLine={false} activeStyle={false}
                        renderItem={dataItem => (
                            <div style={{marginTop:-3}}>
                            <img src={dataItem.icon} style={{ width: '100px', height: '100px' }} alt="" />
                            </div>
                        )}
                        />
                </Link>
            </div>
        )
    }
}
