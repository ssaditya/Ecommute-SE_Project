import React, { Component } from "react";
import { Card, CardBody, CardText, NavLink } from "reactstrap";

class PastTripsRider extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        const pasttrips = this.props.pastrider;

        return (
            <div>
                <h1 className="pastdisplay">Past Trips : Rider Mode</h1>
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
                <Card className='card'>
                    <CardBody>
                        <h5 class="pasttripheader">Trip 3</h5>
                        <CardText className='temp'>Source : {pasttrips[2].source}</CardText>
                        <CardText className='temp'>Destination : {pasttrips[2].destination}</CardText>
                        <CardText className='temp'>Date : {pasttrips[2].date}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default PastTripsRider;
