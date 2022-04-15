import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

function RiderConfirmation(props) {
  const [tripId, setTripId] = useState(1)
  const deleteTrip = () => {
    axios.delete('http://localhost:8181/deleteTrip/' + `${tripId}`, {

    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });



  }
  const getData = () => {

    axios.get('http://localhost:8181/getAllTrips', {

    })
      .then(function (response) {
        console.log(response);
        console.log("RRR");
        setTripId(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  useEffect(() => {
    getData()
  });

  return (
    <div>
      <Card className='card' id='riderConfirmation'>
        {/* <CardImg top width="100%" src="/assets/images/driver.png" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Ride Confirmed</CardTitle>
          <CardSubtitle>Rider mode</CardSubtitle>
          <CardText>Your trip has been scheduled, Happy Ecommuting!.</CardText>
          <Button style={{ marginRight: 20 }}><Link style={{ textDecoration: "none", color: "white" }} to="/edittriprider">
            Edit Ride
          </Link></Button>
          <Button onClick={deleteTrip}><Link style={{ textDecoration: "none", color: "white" }} to="/rider">
            Cancel Ride
          </Link></Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default RiderConfirmation;