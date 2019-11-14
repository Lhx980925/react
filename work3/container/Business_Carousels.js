import React, { Component } from 'react';
import { Carousel,SearchBar } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Business_Carousels extends Component {
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 150,
      }
      render() {
        return (
          <div>
            <Carousel
              autoplay={true}
              infinite
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                > 
                  <img src={require('../imgs/list.png')} style={{width:20,float:"left",marginTop:13,marginLeft:20}}/>
                  <div style={{float:"left",width:300}}>
                  <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{backgroundColor:"white"}}/>
                  </div>
                  <Link to='/msg'>
                  <img
                    src={require('../imgs/timg.jpg')}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top',height:200 }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                  </Link>
                </a>
              ))}
            </Carousel>
            </div>
        );
      }
}
