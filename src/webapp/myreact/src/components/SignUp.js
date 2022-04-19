import React from "react";
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox } from "@material-ui/core";

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    const headerStyle = { margin: 0 }
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
                    <TextField fullWidth label="First Name" placeholder="Enter first name" />
                    <TextField fullWidth label="Last Name" placeholder="Enter last name" />
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
                    <TextField fullWidth label="Username" placeholder="Enter username" />
                    <TextField fullWidth label="Mobile" placeholder="Enter mobile number" type="number" />
                    <TextField fullWidth label="Password" placeholder="Enter password" type="password" />
                    <TextField fullWidth label="Confirm Password" placeholder="Re-enter password" type="password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms & conditions"
                    />
                    <Grid container justify="center">
                        <Button type="submit" variant="contained" color='primary' margin >Sign Up</Button></Grid>
                </form>
            </Paper>
        </Grid>
    )
}
export default Signup;