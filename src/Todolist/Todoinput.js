import React, { Component } from 'react';
//子组件-->父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数

//受控组件和非受控组件
//受控组件：value值被react的状态控制
//实时获取或处理输入内容
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            val:''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
            this.state.val='';
        }
    }
    handleChange = (e)=>{
        this.setState({
            val:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>ToDoList</h1>
                <input id="inp" name="val" placeholder="添加ToDo" onChange={(e)=>this.handleChange(e)} value={this.state.val} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}

//非受控组件
//代码简单，比较适用于一次性获取表单的值
/*
export default class Todoinput extends Component{
    componentDidMount(){
        console.log(this.inp.value);
        //console.log(refs);
        //console.log(this);
    }
    search=()=>{
        console.log(this.inp.value);
    }
    render(){
        return(<div>
                   <input ref={(inp)=>this.inp=inp} type='text'/>
                   <button onClick={this.search}>查询</button>
               </div>)
    }
}
*/
