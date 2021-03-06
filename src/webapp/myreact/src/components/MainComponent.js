import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Driver from './DriverComponent';
import Rider from './RiderComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MODES } from '../shared/modes';
import { USER } from '../shared/testUser';
import { PASTDRIVER } from '../shared/testUser';
import { PASTRIDER } from '../shared/testUser';
import { UPCOMINGDRIVER } from '../shared/testUser';
import { LISTOFRIDES } from '../shared/testUser';
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
import PastTripsRider from './PastTripsRiderComponent';
import UpcomingTrips from './UpcomingTripsComponent';
import ListOfRides from './ListOfRidesComponent';
import UpcomingTripDelete from './UpcomingTripDelete';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modes: MODES,
            user: USER,
            pastdriver: PASTDRIVER,
            pastrider: PASTRIDER,
            upcomingdriver: UPCOMINGDRIVER,
            listofrides: LISTOFRIDES
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

        const ProfilePage = () => {
            return (
                <Profile
                    user={this.state.user}
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
                    <Route path="/userprofile" element={<ProfilePage />} />
                    <Route path="/ridehistory" element={<RideHistory />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/pasttrips" element={<PastTrips pastdriver={this.state.pastdriver} />} />
                    <Route path="/pasttripsrider" element={<PastTripsRider pastrider={this.state.pastrider} />} />
                    <Route path="/upcomingtrips" element={<UpcomingTrips upcomingdriver= {this.state.upcomingdriver}/>} />
                    <Route path="/upcomingtripdelete" element={<UpcomingTripDelete upcomingdriver= {this.state.upcomingdriver}/>} />
                    <Route path="/listofrides" element={<ListOfRides listofrides={this.state.listofrides} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        );
    }
}
export default Main;