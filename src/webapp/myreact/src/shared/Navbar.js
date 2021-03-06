import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  items: {
    marginTop: 50,
  }
}));

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div>
        <ListItem button key="Profile">
          <ListItemIcon>
            <AccountCircleRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
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
        </Box>
      </Box>
    </div>

  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;