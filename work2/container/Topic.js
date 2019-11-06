import React, {Component,useState,useEffect,useContext,useRef} from 'react';
import {Link,Route} from 'react-router-dom';

var arr=[];
export default class Topic extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            for(let i in res.data){
                let o={};
                o[i]=res.data[i];
                arr.push(o);
            }
            this.setState({
                data:[...arr]
            });
            console.log(this.state.data);
            //console.log(this.state.data[12].replies[0].content);
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
        let id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{ 
                for(let i in res.data){
                    let o={};
                    o[i]=res.data[i];
                    arr.push(o);
                }
                this.setState({
                    data:[...arr]
                });
                console.log(this.state.data);
            })
        }
    }
    render() {
        return (
            <div>
                <div className="topic-header">
                    {   
                        this.state.data.map((item)=>(
                            <div style={{backgroundColor:"white"}}>
                                <div style={{}}>
                                    <h1>{item.title}</h1>
                                    <h4>{item.create_at}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {   
                        this.state.data.map((item)=>(
                            <div style={{backgroundColor:"white"}} dangerouslySetInnerHTML={{__html:item.content}}></div>
                        ))
                    }
                </div>
            </div>
        )
    }
}