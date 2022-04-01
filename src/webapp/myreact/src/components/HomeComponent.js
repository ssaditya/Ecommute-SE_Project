import React from 'react';
import { Card,CardImg,CardText, CardBody,Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';

function RenderCard({item}){
    return(
        <Card className='card'>
            <CardImg src={item.image} alt={item.mode} />
            <CardBody>
                <h4>{item.mode}</h4>
                <CardText className='temp'>{item.description}</CardText>
            </CardBody>
            <Button outline color="info" size="lg" className='cardbutton' block>
                <NavLink className="nav-link" to={item.gotoLink}>
                  {item.quote}
                </NavLink>
            </Button>
        </Card>
    );
}

function Home(props){
    return(
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.driver} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.rider} />
                </div>
            </div>  
        </div>
    );
}
export default Home;