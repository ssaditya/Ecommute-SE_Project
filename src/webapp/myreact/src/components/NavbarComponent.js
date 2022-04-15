import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';

const drawer = (
    <div>
        <div>
            <a href='/userprofile' className='sidepanellinks'>
                <ListItem button key="Profile">
                    <ListItemIcon>
                        <AccountCircleRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            </a>
            <ListItem button key="Ride History">
                <ListItemIcon>
                    <SettingsBackupRestoreRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Ride History" />
            </ListItem>
            <ListItem button key="Wallet">
                <ListItemIcon>
                    <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary="Wallet" />
            </ListItem>
            <ListItem button key="FAQ">
                <ListItemIcon>
                    <LiveHelpIcon />
                </ListItemIcon>
                <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button key="Support">
                <ListItemIcon>
                    <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Support" />
            </ListItem>
        </div>
        <div style={{ marginTop: 510 }}>
            <ListItem button key="Sign Out">
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
            </ListItem>
        </div>
    </div>
);

export default drawer;