import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class Carousels extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
      }
      render() {
        return (
          <Link to="/msg">
            <Carousel
              autoplay={true}
              infinite
              dots={false}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={require('../imgs/home0.png')}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
            </Link>
        );
      }
}
