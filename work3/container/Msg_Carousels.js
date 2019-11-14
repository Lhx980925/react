import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

export default class Msg_Carousels extends Component {
    state = {
        data: ['1', '2', '3','4','5'],
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
                  <img
                    src={require('../imgs/msg.png')}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top',height:200 }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
            </div>
        );
      }
}
