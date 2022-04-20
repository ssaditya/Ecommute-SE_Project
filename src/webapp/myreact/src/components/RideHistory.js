import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import drawer from './NavbarComponent';
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
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box>
                        <div>
                            <Card className='pasttripsCard'>
                                <CardBody>
                                    <h3 id="rideHistoryHeader">Past Trips</h3>
                                </CardBody>
                                <Button id="pasttripsId" color="secondary" size="md" className='pasttripsClass' block>
                                    <NavLink className="nav-link" to="/pasttrips">
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