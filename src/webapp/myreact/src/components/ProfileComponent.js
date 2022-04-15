import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import drawer from './NavbarComponent';
import { Card, CardTitle, CardText } from 'reactstrap';

class Profile extends Component {

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
                        <div className='userprofilediv'>
                            <h1 className='userprofileheading'>User Profile</h1>
                            <Card body inverse color="primary">
                                <CardTitle><h3>Name</h3></CardTitle>
                                <CardText>Raj Gopala Vamsee Jaggaraju</CardText>
                            </Card>
                            <Card body inverse color="success">
                                <CardTitle><h3>Phone Number</h3></CardTitle>
                                <CardText>+1 352 888 2788</CardText>
                            </Card>
                            <Card body inverse color="info">
                                <CardTitle><h3>Email Address</h3></CardTitle>
                                <CardText>vamsee2312@gmail.com</CardText>
                            </Card>
                            <Card body inverse color="warning">
                                <CardTitle><h3>Upcoming Trip</h3></CardTitle>
                                <CardText> 20th April 11:59 PM</CardText>
                            </Card>
                            <Card body inverse color="danger">
                                <CardTitle><h3>Rating</h3></CardTitle>
                                <CardText>4.2 Stars</CardText>
                            </Card>
                        </div>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default Profile;