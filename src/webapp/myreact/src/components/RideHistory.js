import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MyDrawer from './NavbarComponent';
import { Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class RideHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }

    }
    render() {

        const drawerWidth = 240;
        const driverId = 1;
        const riderId = 1;
        var localResponse = null;

        const getUpcomingTrips = () => {
            //console.log("entered");
            axios.get('http://localhost:8181/getDriverUpcomingTrips/' + `${driverId}`, {

            })
                .then(function (response) {
                    //console.log(response);
                    localResponse = response.data.data;
                    console.log(localResponse);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const mode1 = "Driver";
        const mode2 = "Rider";


        const getPastTripsDriver = () => {
            //console.log("entered");
            axios.get('http://localhost:8181/getPastTripsById/' + `${mode1}` + '/' + `${driverId}`, {

            })
                .then(function (response) {
                    //console.log(response);
                    localResponse = response.data.data;
                    console.log(localResponse);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const getPastTripsRider = () => {
            //console.log("entered");
            axios.get('http://localhost:8181/getPastTripsById/' + `${mode2}` + '/' + `${riderId}`, {

            })
                .then(function (response) {
                    //console.log(response);
                    localResponse = response.data.data;
                    console.log(localResponse);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }




        return (
            <div style={{ marginLeft: 350, marginTop: 150 }}>
                <Box sx={{ display: 'flex' }}>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            <MyDrawer />
                        </Drawer>
                    </Box>
                    <Box>
                        <div>
                            <Card className='pasttripsDriverCard'>
                                <CardBody>
                                    <h3 id="rideHistoryHeader">Past Trips in Driver Mode</h3>
                                </CardBody>
                                <Button id="pasttripsdriverId" onClick={getPastTripsDriver} color="secondary" size="md" className='pasttripsdriverClass' block>
                                    <NavLink className="nav-link" to="/pasttrips">
                                        View
                                    </NavLink>
                                </Button>
                            </Card>
                            <Card className='pasttripsRiderCard'>
                                <CardBody>
                                    <h3 id="rideHistoryHeader">Past Trips in Rider Mode</h3>
                                </CardBody>
                                <Button id="pasttripsriderId" onClick={getPastTripsRider} color="secondary" size="md" className='pasttripsriderClass' block>
                                    <NavLink className="nav-link" to="/pasttripsrider">
                                        View
                                    </NavLink>
                                </Button>
                            </Card>
                            <Card className='upcomingtripsCard'>
                                <CardBody>
                                    <h3 id="rideHistoryHeader">Upcoming Trips</h3>
                                </CardBody>
                                <Button id="upcomingtripsId" onClick={getUpcomingTrips} color="primary" size="md" className='upcomingtripsClass' block>
                                    <NavLink className="nav-link" to="/upcomingtrips">
                                        View
                                    </NavLink>
                                </Button>
                            </Card>
                        </div>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default RideHistory;