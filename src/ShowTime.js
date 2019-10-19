import React,{Component,Fragment} from 'react';

//类定义组件
class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        this.handleClick=this.handleClick.bind(this);
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
        return true;
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    handleClick= (num,e) =>{
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render');

        return (
            <Fragment>
                <div onClick={(ev)=>this.handleClick(1,ev)}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,2)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}

//默认导出 只能导出一次
//export default ShowTime;
//命名导出 
export {ShowTime};