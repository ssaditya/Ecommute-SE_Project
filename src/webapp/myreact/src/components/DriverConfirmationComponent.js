import react from 'react';
import {Card,CardImg,CardBody,CardSubtitle,CardTitle,CardText,Button} from "reactstrap";
function DriverConfirmation(props){
    return(
        <div>
        <Card className='card'>
          {/* <CardImg top width="100%" src="/assets/images/driver.png" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle>Ride Confirmed</CardTitle>
            <CardSubtitle>Driver mode</CardSubtitle>
            <CardText>Your trip has been scheduled, Happy Ecommuting!.</CardText>
            <Button>Cancel Ride</Button>
          </CardBody>
        </Card>
      </div>
    );
}
export default DriverConfirmation;