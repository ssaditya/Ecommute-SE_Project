import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HouseIcon from '@mui/icons-material/House';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { dataService } from './DataService';

const username = "brad1";
var localResponse = null;

const getUserDetails = () => {

    axios.get('http://localhost:8181/getUserByUsername/' + `${username}`, {

    })
        .then(function (response) {
            console.log(response);
            localResponse = response.data.data;
            console.log(localResponse);

            dataService.setData(localResponse.fname);
            dataService.getData().subscribe(message => {
                alert(message.value);
            })

            window.location.href = "/userprofile";
        })
        .catch(function (error) {
            console.log(error);
        });
}

function MyDrawer() {

    return (
        <div className='sidepaneldiv'>
            <div>
                <a href='/home' className='sidepanellinks'>
                    <ListItem button key="Home">
                        <ListItemIcon>
                            <HouseIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </a>
                <a href='#' className='sidepanellinks' onClick={getUserDetails}>
                    <ListItem button key="Profile">
                        <ListItemIcon>
                            <AccountCircleRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                </a>
                <a href='/ridehistory' className='sidepanellinks'>
                    <ListItem button key="Ride History">
                        <ListItemIcon>
                            <SettingsBackupRestoreRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ride History" />
                    </ListItem>
                </a>
                <a href='/wallet' className='sidepanellinks'>
                    <ListItem button key="Wallet">
                        <ListItemIcon>
                            <AccountBalanceWalletIcon />
                        </ListItemIcon>
                        <ListItemText primary="Wallet" />
                    </ListItem>
                </a>
                <a href='/faq' className='sidepanellinks'>
                    <ListItem button key="FAQ">
                        <ListItemIcon>
                            <LiveHelpIcon />
                        </ListItemIcon>
                        <ListItemText primary="FAQ" />
                    </ListItem>
                </a>
                <a href='/support' className='sidepanellinks'>
                    <ListItem button key="Support">
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Support" />
                    </ListItem>
                </a>
            </div>

            <div style={{ marginTop: 289 }} className='signoutdiv'>
                <a href='/login' className='sidepanellinks'>
                    <ListItem button key="Sign Out">
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItem>
                </a>
            </div>
        </div>
    );
}

export default MyDrawer;