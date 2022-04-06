import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap";
import {Link} from 'react-router-dom';
import axios from "axios";

function DriverConfirmation(props) {
  const deleteTrip = () => {
    axios.delete()


  }

  return (
    <div>
      <Card className='card' id='driverConfirmation'>
        {/* <CardImg top width="100%" src="/assets/images/driver.png" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Ride Confirmed</CardTitle>
          <CardSubtitle>Driver mode</CardSubtitle>
          <CardText>Your trip has been scheduled, Happy Ecommuting!.</CardText>
          <Button style={{marginRight: 20 }}><Link style={{textDecoration:"none", color:"white"}} to="/edittrip">
                    Edit Ride
                </Link></Button>
          <Button onClick={deleteTrip}>Cancel Ride</Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default DriverConfirmation;