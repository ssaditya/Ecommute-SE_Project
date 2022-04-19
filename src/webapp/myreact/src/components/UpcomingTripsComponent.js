import React, {Component} from "react";

class  UpcomingTrips extends Component {
    constructor(props){
        super(props);
    };

    render(){

        var upcomingtripsDriver = this.props.driverUpcoming;
        return(
            <div>
                {upcomingtripsDriver}
            </div>
        );
    }
}

export default UpcomingTrips;
