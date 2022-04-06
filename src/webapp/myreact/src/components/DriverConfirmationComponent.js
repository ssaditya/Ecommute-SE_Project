import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap";
import {NavLink} from 'react-router-dom';

function DriverConfirmation(props) {
  return (
    <div>
      <Card className='card' id='driverConfirmation'>
        {/* <CardImg top width="100%" src="/assets/images/driver.png" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Ride Confirmed</CardTitle>
          <CardSubtitle>Driver mode</CardSubtitle>
          <CardText>Your trip has been scheduled, Happy Ecommuting!.</CardText>
          <Button style={{marginRight: 20 }}>Edit Ride<NavLink  to="/edittrip">
                  
                </NavLink></Button>
          <Button>Cancel Ride</Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default DriverConfirmation;