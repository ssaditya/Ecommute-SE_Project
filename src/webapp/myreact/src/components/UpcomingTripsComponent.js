import React, { Component } from "react";
import { Card, CardBody, CardText } from "reactstrap";

class UpcomingTrips extends Component {
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
                    </CardBody>
                    <a className="deleteclassm" href="/upcomingtripdelete">Cancel Ride</a>
                    <a className="backclassm" href="/driver">Back</a>
                </Card>
                <Card className='card'>
                    <CardBody>
                        <h5 class="upcomingtripheader">{upcomingtrips[1].date}</h5>
                        <CardText className='temp'>Source : {upcomingtrips[1].source}</CardText>
                        <CardText className='temp'>Destination : {upcomingtrips[1].destination}</CardText>
                    </CardBody>
                    <a className="deleteclassm" href="/upcomingtripdelete">Cancel Ride</a>
                    <a className="backclassm" href="/driver">Back</a>
                </Card>
            </div>
        );
    }
}

export default UpcomingTrips;