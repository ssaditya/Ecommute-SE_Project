import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

function DriverConfirmation(props) {
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
      <Card className='card' id='driverConfirmation'>
        {/* <CardImg top width="100%" src="/assets/images/driver.png" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Ride Confirmed</CardTitle>
          <CardSubtitle>Driver mode</CardSubtitle>
          <CardText>Your trip has been scheduled, Happy Ecommuting!</CardText>
          {/*<Button style={{ marginRight: 20 }}><Link style={{ textDecoration: "none", color: "white" }} to="/edittripdriver">
            Edit Ride
          </Link></Button>
          <Button style={{ marginRight: 20 }} onClick={deleteTrip}><Link style={{ textDecoration: "none", color: "white" }} to="/driver">
            Cancel Ride
          </Link></Button>
          <Button style={{ marginRight: 20 }}><Link style={{ textDecoration: "none", color: "white" }} to="/home">
            Home
          </Link></Button>*/}
          <Button style={{marginRight: 20}}><Link style={{textDecoration: "none", color: "white"}} to="/driver">
            Back
          </Link></Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default DriverConfirmation;