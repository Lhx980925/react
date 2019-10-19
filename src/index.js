import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ShowTime} from './ShowTime';
import Todolist from './Todolist/Todolist';
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import ParentPortal from './Portals/ParentPortal';

//ReactDOM.render(<App/>,document.getElementById('root'));

//let {Provider,Comsumer}=React.createContext();
//import {Provider} from './Context/Context';
//import {con} from './Context/Context';
//let color='red';
//redux

/*
ReactDOM.render(
    <con.Provider value={color}>
        <Hoc/>
    </con.Provider>,
    document.getElementById('root'));
*/

//ReactDOM.render(<Request/>,document.getElementById('root'));

ReactDOM.render(<Todolist/>,document.getElementById('root'));

//ReactDOM.render(<ShowTime word="react"/>,document.getElementById('root'));

//函数定义组件（无生命周期函数）
//当只是渲染结构
function Todo(props){
    return(
        <div>
            {/*条件渲染*/}
            {props.list.length>=6?<h1>todo</h1>:''}
            {props.list.length>=5 && <h1>todo</h1>}
            <ul>
                {/*循环渲染*/}
                {
                    props.list.map(function(item2,index){
                        if(index%2 === 0){
                            return <li key={index}>{item2}</li>;
                        }
                    })
                }
            </ul>
        </div>
    );
}
var item2=[1,2,3,4,5];
//ReactDOM.render(<Todo list={item2}/>,document.getElementById('root'));


//类定义组件
/*
class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    render(){
        console.log('render');

        return (
            <Fragment>
                <div>{this.state.time}</div>
                <div>hello{this.props.word}</div>
            </Fragment>
        );
    }
}
*/
//组件交互 父组件-->子组件 调用时在子组件上添加属性 在子组件中通过props获取数据
//ReactDOM.render(<Hello word="react"/>,document.getElementById('root'));



//var ele=React.createElement('div',{'id':'box'},'hello',React.createElement('h1',{'id':'h'},'react'));
//ReactDOM.render(ele, document.getElementById('root'));


//jsx表达式会被react转化为一个对象
var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react'
    )
);


var obj={
    type:'div',
    props:{
        id:'box',
        class:'box',
        children:['hello',{
            type:'h1',
            props:{
                id:'h',
                class:'h',
                children:['react']
            }
        }]
    }
}


//加载html文件、浏览器解析html生成DOM树
//link加载css文件、解析css规则、和DOM树结合生成渲染树（render tree）、浏览器渲染引擎渲染render tree

//页面回流（重排）
//页面重绘（把字体颜色、背景颜色等样式改变）

//node.offsetLeft  慎用
//node.offsetWidth  慎用

/*
var root=document.getElementById('root');
var width=root.offsetWidth
setInterval(function(){
    width+=1;
    root.style.width=width+'px';
},100);
*/


//display width height font-size 等会引起页面回流
//document.body.style.width='100px';
//document.body.style.height='100px';
//声明css的一个类
//.change{
    //width:100px;
    //height:100px;
//}
//document.body.className='change';


/*
对节点的操作先用变量代替
console.time('a');
var str = '';
for(var i=0;i<1000;i++){
    str += '<li>'+i+'</li>';
}
document.body.innerHTML = str;
console.timeEnd('a');
*/


/*
function render(obj,container){
    var {type,props}=obj;
    //文档碎片
    var fr=document.createDocumentFragment();
    var ele=document.createElement(obj.type);
    for(var item in obj.props){
        if(item==='class'){
            ele.className=props[item];
        }else if(item==='children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i]==='object'){
                    render(props[item][i],ele)
                }else{
                    var txt=document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item]=props[item];
        }
    }
    fr.appendChild(ele);
    container.appendChild(fr);
}
render(obj,document.getElementById('root'));
*/


//元素渲染
/*
function tick(){
    var e=<div>
              <p>当前时间</p>
              <h1>{new Date().toLocaleTimeString()}</h1>
          </div>;
    ReactDOM.render(e,document.getElementById('root'));
}
setInterval(tick,1000);
*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();