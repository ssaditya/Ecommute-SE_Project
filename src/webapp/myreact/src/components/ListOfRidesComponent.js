import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class ListOfRides extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button style={{ marginRight: 20 }}><Link style={{ textDecoration: "none", color: "white" }} to="/riderconfirmation">
                    Temporary Next
                </Link></Button>
                <Button style={{ marginRight: 20 }}><Link style={{ textDecoration: "none", color: "white" }} to="/rider">
                    Back
                </Link></Button>
            </div>
        );
    }
}

export default ListOfRides;