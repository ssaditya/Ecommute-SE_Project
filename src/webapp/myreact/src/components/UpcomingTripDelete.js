import React, { Component } from "react";
import { Card, CardBody, CardText } from "reactstrap";

class UpcomingTripDelete extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        const upcomingtrips = this.props.upcomingdriver;

        return (
            <div>
                <h1 className="upcomingdisplay">UpcomingTrips</h1>
                <Card className='card'>
                    <CardBody>
                        <h5 class="upcomingtripheader">{upcomingtrips[0].date}</h5>
                        <CardText className='temp'>Source : {upcomingtrips[0].source}</CardText>
                        <CardText className='temp'>Destination : {upcomingtrips[0].destination}</CardText>
                        <CardText className='temp'>Date : {upcomingtrips[0].date}</CardText>
                    </CardBody>
                </Card>
                <Card className='card'>
                    <CardBody>
                        <h5 class="upcomingtripheader">{upcomingtrips[1].date}</h5>
                        <CardText className='temp'>Source : {upcomingtrips[1].source}</CardText>
                        <CardText className='temp'>Destination : {upcomingtrips[1].destination}</CardText>
                        <CardText className='temp'>Date : {upcomingtrips[1].date}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default UpcomingTripDelete;
