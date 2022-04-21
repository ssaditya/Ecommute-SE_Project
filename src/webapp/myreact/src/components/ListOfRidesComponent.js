import React, { Component } from 'react';
import { Button, Card, CardBody, CardText, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListOfRides extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const trip_id = 1;
        const rider_id = 1;
        const no_of_seats = 1;
        let localResponse = null;

        const listofrides = this.props.listofrides;

        const myTripsList = () => {
            axios.post('http://localhost:8181/createTripMapping', {
                "trip_id": trip_id,
                "rider_id": rider_id,
                "no_of_seats": no_of_seats
            })
                .then(function (response) {
                    //console.log(response);
                    console.log("now my responsee")
                    localResponse = response.data.data;
                    console.log(localResponse);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        return (

            <div>
                <Card className='card'>
                    <CardBody>
                        <h5 class="upcomingtripheader">{listofrides[0].date}</h5>
                        <CardText className='temp'>Source : {listofrides[0].source}</CardText>
                        <CardText className='temp'>Destination : {listofrides[0].destination}</CardText>
                    </CardBody>
                    <a className="listclassm" href="/riderconfirmation">Book Ride!</a>
                    <a className="backclassm" href="/rider">Back</a>
                </Card>
                <Card className='card'>
                    <CardBody>
                        <h5 class="upcomingtripheader">{listofrides[1].date}</h5>
                        <CardText className='temp'>Source : {listofrides[1].source}</CardText>
                        <CardText className='temp'>Destination : {listofrides[1].destination}</CardText>
                    </CardBody>
                    <a className="listclassm" href="/riderconfirmation">Book Ride!</a>
                    <a className="backclassm" href="/rider">Back</a>
                </Card>
                <Card className='card'>
                    <CardBody>
                        <h5 class="upcomingtripheader">{listofrides[2].date}</h5>
                        <CardText className='temp'>Source : {listofrides[2].source}</CardText>
                        <CardText className='temp'>Destination : {listofrides[2].destination}</CardText>
                    </CardBody>
                    <a className="listclassm" href="/riderconfirmation">Book Ride!</a>
                    <a className="backclassm" href="/rider">Back</a>
                </Card>
                <Card className='card'>
                    <CardBody>
                        <h5 class="upcomingtripheader">{listofrides[3].date}</h5>
                        <CardText className='temp'>Source : {listofrides[3].source}</CardText>
                        <CardText className='temp'>Destination : {listofrides[3].destination}</CardText>
                    </CardBody>
                    <a className="listclassm" href="/riderconfirmation">Book Ride!</a>
                    <a className="backclassm" href="/rider">Back</a>
                </Card>
            </div>
        );
    }
}

export default ListOfRides;