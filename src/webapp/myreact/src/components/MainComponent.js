import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Driver from './DriverComponent';
import Rider from './RiderComponent';
import {Routes,Route,Navigate} from 'react-router-dom';
import {MODES} from '../shared/modes';

 class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            modes:MODES
        };
    }

    render(){
        
        const HomePage=()=>{
            return(
                <Home 
                    driver={this.state.modes.filter((x)=>x.mode==='Driver')[0]}
                    rider={this.state.modes.filter((y)=>y.mode==='Rider')[0]}
                />
            );
        }

        return(
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/driver" element={<Driver/>} />
                    <Route path="/rider" element={<Rider/>} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </div>
        );
    }
 }
 export default Main;

