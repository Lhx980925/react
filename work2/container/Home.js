import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import All from './All';
import Good from './Good';
import Share from './Share';
import Job from './Job';
import Ask from './Ask';
import Topic from './Topic';
import { whileStatement } from 'create-react-app/my-app/node_modules/@babel/types';

export default class Home extends Component {
    render() {
        var url=this.props.match.url;
        return (
            <div className="home">
                <div>
                    <Route exact path={'/'} component={All}/>
                    <Route path={'/home/good'} component={Good}/>
                    <Route path={'/home/share'} component={Share}/>
                    <Route path={'/home/ask'} component={Ask}/>
                    <Route path={'/home/job'} component={Job}/>
                </div>
            </div>
        )
    }
}
