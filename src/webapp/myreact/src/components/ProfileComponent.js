import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MyDrawer from './NavbarComponent';
import { Card, CardTitle, CardText } from 'reactstrap';
import { dataService } from './DataService';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.subscription = dataService.getData().subscribe(message => {
            console.log("abovee dataservice message");
            console.log(message);
        })
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {

        const drawerWidth = 240;
        const user = this.props.user;

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
                        <div className='userprofilediv'>
                            <h1 className='userprofileheading'>User Profile</h1>
                            <Card body inverse color="primary">
                                <CardTitle><h3>Name</h3></CardTitle>
                                <CardText>{user.fname}</CardText>
                            </Card>
                            <Card body inverse color="success">
                                <CardTitle><h3>Phone Number</h3></CardTitle>
                                <CardText>{user.phoneno}</CardText>
                            </Card>
                            <Card body inverse color="info">
                                <CardTitle><h3>Email Address</h3></CardTitle>
                                <CardText>{user.username}</CardText>
                            </Card>
                            <Card body inverse color="warning">
                                <CardTitle><h3>Date Of Birth</h3></CardTitle>
                                <CardText>{user.dob}</CardText>
                            </Card>
                            <Card body inverse color="danger">
                                <CardTitle><h3>User Rating</h3></CardTitle>
                                <CardText>{user.avg_rating} Stars</CardText>
                            </Card>
                            <Card body inverse color="dark">
                                <CardTitle><h3>Bio</h3></CardTitle>
                                <CardText>{user.bio}</CardText>
                            </Card>
                            <Card body inverse color="secondary">
                                <CardTitle><h3>Car Name</h3></CardTitle>
                                <CardText>{user.carname}</CardText>
                            </Card>
                        </div>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default Profile;