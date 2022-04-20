import React from "react";
import { Grid,Paper,Avatar, Typography, Link } from '@material-ui/core'
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const Login=()=>{
    
    const paperStyle={padding :20, height:'55vh', width:300, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    const avatarStyle={backgroundColor:'green'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                <h2>Sign In</h2>

                </Grid>
               <TextField label="Email" placeholder="Enter email address*" fullWidth required/>
               <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required/>
               <FormControlLabel
               control={
                   <Checkbox
                   name="checkedB"
                   color="primary"
                   />
               }
               label="Remember Me"
               />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth><Link href="/home">
            Sign In
            </Link></Button> 
            <Typography>
                <Link href="#">
                Forgot Password?  
                </Link> 
                </Typography>
                <Typography> Do you have an account?      

                <Link href="/signup">
                        Sign Up 
                </Link> 
                </Typography>
                </Paper>
            
        </Grid>
    )
}

export default Login