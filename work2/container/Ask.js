import React, {Component,useState,useEffect,useContext,useRef} from 'react';
import {Link,Route} from 'react-router-dom';
import Topic from './Topic';

export default class Ask extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page4;
        console.log(this.props);
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log(this.state.data);
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page4!==this.props.match.params.page4){
        let page = this.props.match.params.page4;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            })
        }
    }
    new=()=>{
        window.location.reload();
    }
    render() {
        return (
            <div>
                <div className="home-header">
                    <Link to={'/'} className="home-choice" style={{marginLeft:20}}>全部</Link>
                    <Link to={'/home/good'} className="home-choice" style={{marginLeft:40}}>精华</Link>
                    <Link to={'/home/share'} className="home-choice" style={{marginLeft:40}}>分享</Link>
                    <Link to={'/home/ask'} className="home-choice" style={{marginLeft:40}}>问答</Link>
                    <Link to={'/home/job'} className="home-choice" style={{marginLeft:40}}>招聘</Link>
                </div>
                <div className="home-body">
                {   
                    this.state.data.map((item)=>(
                        <div key={item} className="home-value">
                            <img src={item.author.avatar_url} style={{height:35,width:35,float:"left",marginTop:7.5,marginLeft:5}}/>
                            <div style={{float:"left",marginTop:17,marginLeft:5,fontSize:5,color:"purple"}}>{item.reply_count}</div>
                            <div style={{float:"left",marginTop:17,marginLeft:5,fontSize:1}}>/{item.visit_count}</div>
                            <div style={{float:"left",marginTop:17,marginLeft:5,backgroundColor:"green",color:"white",fontSize:2,width:30,height:18,textAlign:"center"}}>置顶</div>
                            <Link to={'/work/'+item.id} className="home-title" onClick={this.new}>{item.title}</Link>
                            <div style={{float:"right",marginTop:17,fontSize:2}}>8个月前</div>
                            <div style={{marginTop:16,float:"right",marginRight:3}}><img src={item.author.avatar_url} style={{height:20,width:20}}/></div>
                        </div>
                    ))
                }
                </div>
                <div className="home-bottom">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <div key={item} className="home-key"><Link to={'/topic4/'+item} className="home-page">{item}</Link></div>   
                        ))
                    }
                </div>
            </div>
        )
    }
}