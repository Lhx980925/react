import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
  
const data1 = [
    {icon:require('../imgs/zhuozi.png'),text:'桌'},
    {icon:require("../imgs/chuang.png"),text:'床'},
    {icon:require("../imgs/yizi.png"),text:'椅'},
    {icon:require("../imgs/chaji.png"),text:'几'},
    {icon:require("../imgs/iconset0499.png"),text:'柜'},
    {icon:require("../imgs/shujia.png"),text:'书架'},
    {icon:require("../imgs/tubiaoCSban-.png"),text:'沙发'},
    {icon:require("../imgs/shanzi.png"),text:'家居饰品'},
    {icon:require("../imgs/svggeshi-.png"),text:'户外家具'},
    {icon:require("../imgs/fenlei.png"),text:'全部分类'}
];
  

export default class Business_Grids extends Component {
    render() {
        return (
            <div>
                <Grid data={data1}
                    columnNum={5}
                    renderItem={dataItem => (
                        <div style={{marginTop:-5}}>
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
