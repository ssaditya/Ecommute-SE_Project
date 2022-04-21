import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className='jumbotron'>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6" style={{ marginLeft: 190 }}>
                                <h1>ECommute</h1>
                                <p>Welcome to the Eco-Friendly App ECommute!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Header;