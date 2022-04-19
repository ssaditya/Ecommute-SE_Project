import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import drawer from './NavbarComponent';
import { Card, CardBody, Button } from 'reactstrap';
import { NavLink} from 'react-router-dom';

class RideHistory extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const drawerWidth = 240;

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
                                    <h4>Past Trips</h4>
                                </CardBody>
                                <Button outline id="pasttripsId" color="secondary" size="md" className='pasttripsClass' block>
                                    <NavLink className="nav-link" to="/pasttrips">
                                        View
                                    </NavLink>
                                </Button>
                            </Card>
                            <Card className='upcomingtripsCard'>
                                <CardBody>
                                    <h4>Upcoming Trips</h4>
                                </CardBody>
                                <Button outline id="upcomingtripsId" color="primary" size="md" className='upcomingtripsClass' block>
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