import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Driver from './DriverComponent';
import Rider from './RiderComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MODES } from '../shared/modes';
import DriverConfirmation from './DriverConfirmationComponent';
import RiderConfirmation from './RiderConfirmationComponent';
import Login from './LoginComponent';
import Signup from './SignUp';
import ResponsiveDriverEdit from './ResponsiveDriverEdit';
import ResponsiveRiderEdit from './ResponsiveRiderEdit';
import Profile from './ProfileComponent';
import RideHistory from './RideHistory';
import Wallet from './WalletComponent';
import FAQ from './FAQComponent';
import Support from './SupportComponent';
import PastTrips from './PastTripsComponent';
import UpcomingTrips from './UpcomingTripsComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modes: MODES
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    driver={this.state.modes.filter((x) => x.mode === 'Driver')[0]}
                    rider={this.state.modes.filter((y) => y.mode === 'Rider')[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/driver" element={<Driver />} />
                    <Route path="/rider" element={<Rider />} />
                    <Route path="/driverconfirmation" element={<DriverConfirmation />} />
                    <Route path="/riderconfirmation" element={<RiderConfirmation />} />
                    <Route path="/edittripdriver" element={<ResponsiveDriverEdit />} />
                    <Route path="/edittriprider" element={<ResponsiveRiderEdit />} />
                    <Route path="/userprofile" element={<Profile />} />
                    <Route path="/ridehistory" element={<RideHistory />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/pasttrips" element={<PastTrips />} />
                    <Route path="/upcomingtrips" element={<UpcomingTrips />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        );
    }
}
export default Main;

