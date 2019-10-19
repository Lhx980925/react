import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行</h1>
                <p>正在进行的事项数量：{this.props.todo.length}</p>
                <ul>
                    {
                        this.props.todo.map((item,idx)=>{
                            return <li key={item}><input type="checkbox" onClick={()=>{this.props.delTodo(idx);this.props.addTodo2(item);}}/>
                            {item}<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li> ;
                        })
                    }
                </ul>
            </div>
        )
    }
}

/*
Todoing.propTypes={
    todo:PropTypes.array
}
Todoing.defaultProps={
    todo:[2,3,4],
    a:100
}
*/
