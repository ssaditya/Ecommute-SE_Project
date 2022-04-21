import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MyDrawer from './NavbarComponent';
import { Card, CardTitle, CardText } from 'reactstrap';

class FAQ extends Component {

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
                            <MyDrawer />
                        </Drawer>
                    </Box>
                    <Box>
                        <div class="card">
                            <div class="card-header">
                                Help with the Trip
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">How do I cancel the Trip</h5>
                                <a href="#" class="btn btn-primary">View</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                Account Options
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Changing my Account Settings</h5>
                                <a href="#" class="btn btn-primary">View</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                Signing Up
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Creating a Ride as a Driver</h5>
                                <a href="#" class="btn btn-primary">View</a>
                            </div>
                        </div>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default FAQ;