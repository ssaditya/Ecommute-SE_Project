import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Time from '../shared/Time'
import DropDown from '../shared/DropDown'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import drawer from './NavbarComponent';

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

function ResponsiveDrawerDriver(props) {
  const [pickup, setPickup] = useState("")
  const [dropOff, setDropOff] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [seats, setSeats] = useState(1)
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const findMonth = (month) => {
    for (let i = 0; i < 12; i++) {
      if (month === months[i] && i < 10) {
        let x = i + 1;
        return "0" + x;
      }
      else if (month === months[i] && i >= 10) return i + 1;
    }
  }

  const pickUpChange = e => {
    setPickup(e.target.value);
    console.log(pickup)
  }

  const dropOffChange = e => {
    setDropOff(e.target.value);
    console.log(dropOff)
  }

  const onSelectDate = (datetime) => {
    let dateTime = datetime.toString();
    let c = dateTime.substring(17, 24)
    setTime(c);
    console.log(dateTime.substring(4, 7))
    let month = findMonth(dateTime.substring(4, 7))
    let day = dateTime.substring(8, 10)
    let year = dateTime.substring(11, 15)
    setDate(month + "/" + day + "/" + year)
    console.log(date)
  }

  const onSelectSeats = (seat) => {
    setSeats(parseInt(seat))
    console.log(seat)
  }

  useEffect(() => {

  }, [])

  const createTrip = () => {
    axios.post('http://localhost:8181/createTrip', {
      "driver_id": 4,
      "source": pickup,
      "destination": dropOff,
      "date_of_trip": date,
      "time_of_trip": time,
      "no_of_seats": seats
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


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
        <Box id='driverForm'>
          <h2>Publish a Ride : Driver</h2>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item >
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="driversource" label="Source" variant="outlined" onChange={pickUpChange} />
                <ArrowForwardIcon style={{ marginTop: 20 }} />
                <TextField id="driverdestination" label="Destination" variant="outlined" onChange={dropOffChange} />
              </form>
            </Grid>
            <Grid item >
              <div className={classes.items}> <Time onChange={onSelectDate} /> </div>
            </Grid>
            <Grid item>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={classes.items}><DropDown onChange={onSelectSeats} /></div>
            </Grid>
            <Grid item>
              <div className={classes.items}>
                <Button variant="outlined" id="driversubmit" style={{ width: 260 }} onClick={createTrip}><NavLink className="nav-link" to="/driverconfirmation">
                  Publish Ride
                </NavLink></Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>

  );
}

ResponsiveDrawerDriver.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawerDriver;