import React, { Component } from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';

class Rider extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <ResponsiveDrawer />
                </div>
            </React.Fragment>
        );
    }
}
export default Rider;