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
        let  localResponse=null;

        const myTripsList = () => {
            axios.post('http://localhost:8181/createTripMapping', {
                "trip_id" : trip_id,
                "rider_id" : rider_id,
                "no_of_seats" : no_of_seats
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
                <Card>
                    <CardBody>
                        <CardTitle>Trip 1</CardTitle>
                        <CardSubtitle>Source</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button style={{ marginRight: 20 }} onClick={myTripsList}><Link style={{ textDecoration: "none", color: "white" }} to="/riderconfirmation">
                            Select Trip
                        </Link></Button>
                        <Button style={{ marginRight: 20 }}><Link style={{ textDecoration: "none", color: "white" }} to="/rider">
                            Back
                        </Link></Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ListOfRides;