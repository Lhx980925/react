import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>已经完成</h1>
                <p>已经完成的事项数量：{this.props.todo2.length}</p>
                <ul>
                    {
                        this.props.todo2.map((item,idx)=>{
                            return <li key={item}><input type="checkbox" checked="checked" onClick={()=>{this.props.delTodo2(idx);this.props.addTodo(item);}}/>
                            {item}<button onClick={()=>{this.props.delTodo2(idx)}}>删除</button></li> ;
                        })
                    }
                </ul>
            </div>
        )
    }
}