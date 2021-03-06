import React, { Component } from "react";
import { Card, CardBody, Button, CardText, NavLink } from "reactstrap";

class PastTrips extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        const pasttrips = this.props.pastdriver;

        return (
            <div>
                <h1 className="pastdisplay">Past Trips : Driver Mode</h1>
                <Card className='card'>
                    <CardBody>
                        <h5 class="pasttripheader">Trip 1</h5>
                        <CardText className='temp'>Source : {pasttrips[0].source}</CardText>
                        <CardText className='temp'>Destination : {pasttrips[0].destination}</CardText>
                        <CardText className='temp'>Date : {pasttrips[0].date}</CardText>
                    </CardBody>
                </Card>
                <Card className='card'>
                    <CardBody>
                        <h5 class="pasttripheader">Trip 2</h5>
                        <CardText className='temp'>Source : {pasttrips[1].source}</CardText>
                        <CardText className='temp'>Destination : {pasttrips[1].destination}</CardText>
                        <CardText className='temp'>Date : {pasttrips[1].date}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PastTrips;
