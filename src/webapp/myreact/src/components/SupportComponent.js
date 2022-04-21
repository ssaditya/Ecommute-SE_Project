import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MyDrawer from './NavbarComponent';
import { Card, CardTitle, CardText } from 'reactstrap';

class Support extends Component {

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
                                Ecommute Support
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Reach us out</h5>
                                <p class="card-text">You can send out a mail to us at <a href="#">getsupport@ecommute.com</a></p>
                                <a href="#" class="btn btn-secondary">Back</a>
                            </div>
                        </div>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default Support;