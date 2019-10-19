import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoing2 from './Todoing2';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        if(localStorage.length == 0){
            this.state={
                todo:[],
                todo2:[]
            }
        }else if(localStorage.length == 2 && localStorage.getItem('key') == ''){
            this.state={
                todo:[],
                todo2:[...localStorage.getItem('key2').split(',')]
            }
        }else if(localStorage.length == 2 && localStorage.getItem('key2') == ''){
            this.state={
                todo:[...localStorage.getItem('key').split(',')],
                todo2:[]
            }
        }else if(localStorage.length == 1 && localStorage.getItem('key2') == null){
            this.state={
                todo:[...localStorage.getItem('key').split(',')],
                todo2:[]
            }
        }else{
            this.state={
                todo:[...localStorage.getItem('key').split(',')],
                todo2:[...localStorage.getItem('key2').split(',')]
            }
        }
        /*
        var arr=[1,2,{a:100}];
        //浅拷贝
        var b=[...arr];
        b[2].a=200;
        console.log(arr);
        //深拷贝
        var c=JSON.parse(JSON.stringify(arr));
        c[2].a=300;
        console.log(arr);
        //对象的拷贝
        var a={a:400,b:500};
        var o=Object.assign({},a);
        console.log(o);
        console.log(o===a);
        //Object.keys返回由属性名组成的一个数组
        Object.keys(a).forEach((item)=>{
            console.log(item);
            console.log(a[item]);
        })
        //尽量不用for in
        for(var item in a){
            console.log(a);
        }
        */
    }
    addItem=(msg)=>{
        //this.state.todo.push(msg)
        //console.log(this.state.todo)
        this.setState({
            todo:[...this.state.todo,msg]
        },()=>{
            localStorage.setItem('key',this.state.todo);
        })
        console.log(msg);
    }
    delItem=(a)=>{
        //this.state.todo.splice(a,1)
        //深拷贝\浅拷贝
        //状态(state):1.不要直接改变、处理状态
        var todo=[...this.state.todo];
        todo.splice(a,1);
        //2.setState是异步的
        this.setState({
            //todo:this.state.todo
            todo:todo
        },()=>{
            localStorage.setItem('key',this.state.todo);
            console.log(localStorage.getItem('key').split(','));
            console.log(localStorage.getItem('key'));
        })
        console.log(a);
    }
    addItem2=(msg)=>{
        //this.state.todo.push(msg)
        //console.log(this.state.todo)
        this.setState({
            todo2:[...this.state.todo2,msg]
        },()=>{
            localStorage.setItem('key2',this.state.todo2);
        })
        console.log(msg);
    }
    delItem2=(a)=>{
        //this.state.todo.splice(a,1)
        //深拷贝\浅拷贝
        //状态(state):1.不要直接改变、处理状态
        var todo2=[...this.state.todo2];
        todo2.splice(a,1);
        //2.setState是异步的
        this.setState({
            //todo:this.state.todo
            todo2:todo2
        },()=>{
            localStorage.setItem('key2',this.state.todo2);
        })
        console.log(a);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo} addTodo2={this.addItem2}/>
                <Todoing2 delTodo2={this.delItem2} todo2={this.state.todo2} addTodo={this.addItem}/>
                <button onClick={()=>{localStorage.clear();window.location.reload(true);}}>clear</button>
            </div>
        )
    }
}
