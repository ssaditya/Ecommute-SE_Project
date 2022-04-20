import React from "react";
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core'
import PropTypes from 'prop-types';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from 'react';

    function SignUp(props) {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [uname, setUname] = useState("")
    const [bio, setBio] = useState("")
    const [carname, setCarname] = useState("")
    const [mobile, setMobile] = useState(1)
    const [password, setPassword] = useState("")
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;
    const paperStyle = { padding: '30px 20px', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    const headerStyle = { margin: 0 }

    const fnameChange = e => {
        setFname(e.target.value);
        console.log(fname)
      }

    const lnameChange = e => {
        setLname(e.target.value);
        console.log(lname)
      }

      const unameChange = e => {
        setUname(e.target.value);
        console.log(uname)
      }
      const mobileChange = e => {
        setMobile(e.target.value)
        console.log(mobile)
      }

      const bioChange = e => {
        setBio(e.target.value);
        console.log(bio)
      }

      const passwordChange = e => {
        setPassword(e.target.value);
        console.log(password)
      }

      const carnameChange = e => {
        setCarname(e.target.value);
        console.log(carname)
      }

      useEffect(() => {

    }, [])


      const createUser = () => {
        axios.post('http://localhost:8181/createUser', {
          "username": uname,
          "password": password,
          "fname": fname,
          "lname": lname,
          "dob": 0,
          "phoneno": mobile,
          "credits": 0,
          "carname": carname, 
          "bio": bio,
          "r_rating":3,
          "d_rating":3,
          "r_count":10,
          "d_count":6

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

        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <HowToRegIcon />
                    </Avatar>

                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption" gutterBottom>Create an account to proceed to ECommute</Typography>
                </Grid>

                <form>
                    <TextField id="fname" fullWidth label="First Name" placeholder="Enter first name" onChange={fnameChange} />
                    <TextField id="lname" fullWidth label="Last Name" placeholder="Enter last name" onChange={lnameChange} />
                    <FormControl margin="dense" >
                        <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group" style={{ display: 'initial' }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth id="uname" label="Username" placeholder="Enter username" onChange={unameChange} />
                    <TextField fullWidth id="mobile" label="Mobile" placeholder="Enter mobile number" type="number" onChange={mobileChange} />
                    <TextField id="carname" fullWidth label="Car Name" placeholder="Enter If you're a Driver" onChange={carnameChange} />
                    <TextField id="bio" fullWidth label="Enter Bio" placeholder="Say something about yourself" onChange={bioChange} />
                    <TextField fullWidth id="password" label="Password" placeholder="Enter password" type="password" onChange={passwordChange} />
                    <TextField fullWidth label="Confirm Password" placeholder="Re-enter password" type="password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms & conditions"
                    />
                    <Grid container justify="center">
                        <Button type="submit" variant="contained" color='primary' margin onClick={createUser} >Sign Up</Button></Grid>
                </form>
            </Paper>
        </Grid>
    )
}
SignUp.propTypes = {
    window: PropTypes.func,
  };
export default SignUp;