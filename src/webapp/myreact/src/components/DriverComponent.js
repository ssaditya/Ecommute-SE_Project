import React, { Component } from 'react';
import ResponsiveDrawerDriver from './ResponsiveDrawerDriver';

class Driver extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <ResponsiveDrawerDriver />
                </div>
            </React.Fragment>
        );
    }
}
export default Driver;