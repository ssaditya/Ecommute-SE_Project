import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import drawer from './NavbarComponent';
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
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box>
                        <div>

                        </div>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default FAQ;