import React, { Component } from 'react';
import Header from './components/Header';
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import NoMatch from './NoMatch';
import Topic from './container/Topic';
import All from './container/All';
import Good from './container/Good';
import Share from './container/Share';
import Ask from './container/Ask';
import Job from './container/Job';
import Login from './container/Login';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content">
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/home' component={Home}/>
                                <Route path='/api' component={Api}/>
                                <Route path='/start' component={Start}/>
                                <Route path='/about' component={About}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/topic1/:page1' component={All}/>
                                <Route path='/topic2/:page2' component={Good}/>
                                <Route path='/topic3/:page3' component={Share}/>
                                <Route path='/topic4/:page4' component={Ask}/>
                                <Route path='/topic5/:page5' component={Job}/>
                                <Route path='/work/:id' component={Topic}/>
                                <Route path='*' component={NoMatch}/>
                            </Switch>
                        </div>
                        <div className="sider">
                            <div style={{marginLeft:15,marginTop:15}}>
                                <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
                                    <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" style={{width:240}}/>
                                </a>
                                <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs">
                                    <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" style={{width:240}}/>
                                </a>
                                <a href="https://www.qiniu.com/events/cdn-package?code=cnode">
                                    <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" style={{width:240}}/>
                                </a>
                            </div>
                            <div style={{marginTop:30,marginLeft:10}}>
                                <p>友情社区</p>
                                <a href="https://ruby-china.org/">
                                    <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" style={{width:240}}/>
                                </a>
                                <a href="http://golangtc.com/">
                                    <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" style={{width:240}}/>
                                </a>
                                <a href="http://phphub.org/">
                                    <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" style={{width:240}}/>
                                </a>
                                <a href="https://testerhome.com/">
                                    <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" style={{width:240}}/>
                                </a>
                            </div>
                            <div style={{textAlign:"center",marginTop:30}}>
                                <p>客户端二维码</p>
                                <img style={{width:200,marginTop:10}} src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/><br />
                                <a href="https://github.com/soliury/noder-react-native" style={{textDecoration:"none"}}>客户端源码地址</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
