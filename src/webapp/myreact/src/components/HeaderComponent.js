import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    render(){
        return(
            <React.Fragment>
                <div className='jumbotron'>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>ECommute</h1>
                                <p>Welcome to the Eco-Friendly Travel App ECommute! Save fuel while you travel! A single drop can make a difference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default Header;

