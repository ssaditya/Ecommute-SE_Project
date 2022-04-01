import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap";
function RiderConfirmation(props) {
  return (
    <div>
      <Card className='card' id='riderConfirmation'>
        {/* <CardImg top width="100%" src="/assets/images/rider.png" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Trip Confirmed</CardTitle>
          <CardSubtitle>Rider mode</CardSubtitle>
          <CardText>Your ride has been matched, Happy Ecommuting!.</CardText>
          <Button>Cancel Ride</Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default RiderConfirmation;